const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Webhook Stripe – raw body middleware avant JSON
app.post("/webhook", bodyParser.raw({ type: "application/json" }));

app.use(cors());
app.use(express.json());

// Config email Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Crée une session Stripe
app.post("/create-checkout-session", async (req, res) => {
  const { cart, email } = req.body;

  const line_items = cart.map((item) => ({
    price_data: {
      currency: "chf",
      product_data: { name: item.name },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email: email,
      shipping_address_collection: {
        allowed_countries: ["CH", "FR", "BE"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 500, currency: "chf" },
            display_name: "Livraison Standard (3-5 jours)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
          },
        },
      ],
      success_url: "https://nasaflow-frontend-amg.vercel.app/success",
      cancel_url: "https://nasaflow-frontend-amg.vercel.app/panier",
      metadata: {
        rawCart: JSON.stringify(cart),
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ Erreur session Stripe :", error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook Stripe : envoi email + enregistrement commande
app.post("/webhook", bodyParser.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Signature webhook invalide :", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["shipping"],
      });

      const email = fullSession.customer_email;
      const cart = JSON.parse(session.metadata.rawCart || "[]");

      const address = fullSession.shipping?.address;
      const fullAddress = address
        ? `${address.line1 || ""}, ${address.postal_code || ""} ${address.city || ""}, ${address.country || ""}`
        : "Non fournie";

      const total = cart.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2);
      const itemList = cart.map(item => `• ${item.name} – CHF ${item.price.toFixed(2)}`).join("<br>");

      // Email de confirmation
      await transporter.sendMail({
        from: "NasaFlow <" + process.env.EMAIL_USER + ">",
        to: email,
        subject: "Confirmation de votre commande NasaFlow",
        html: `
          <h2>Merci pour votre commande !</h2>
          <p><strong>Adresse de livraison :</strong><br>${fullAddress}</p>
          <hr>
          <p>Produits commandés :</p>
          <p>${itemList}</p>
          <p><strong>Total :</strong> CHF ${total}</p>
          <br><p>L’équipe NasaFlow 🌬️</p>
        `,
      });

      // Enregistrement dans orders.json
      const orderData = {
        id: session.id,
        email,
        address: fullAddress,
        items: cart,
        total,
        date: new Date().toISOString(),
      };

      const ordersPath = path.join(__dirname, "orders.json");
      fs.readFile(ordersPath, "utf8", (err, data) => {
        const orders = data ? JSON.parse(data) : [];
        orders.push(orderData);
        fs.writeFile(ordersPath, JSON.stringify(orders, null, 2), () => {});
      });

      console.log("✅ Commande confirmée & email envoyé à", email);
    } catch (err) {
      console.error("❌ Erreur traitement webhook :", err);
    }
  }

  res.status(200).json({ received: true });
});

// Route pour afficher les commandes (admin)
app.get("/api/orders", (req, res) => {
  const ordersPath = path.join(__dirname, "orders.json");
  fs.readFile(ordersPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erreur lecture commandes" });
    const orders = JSON.parse(data);
    res.json(orders);
  });
});

// Démarrer le serveur
app.listen(4242, () => console.log("✅ Serveur Stripe prêt sur http://localhost:4242"));
