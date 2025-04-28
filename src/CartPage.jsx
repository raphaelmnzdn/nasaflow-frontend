import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RHDZQFJWPRkSATup6EDc3iFZtYyPqBfZ8K2bMvA8eOm78jQmA1sO4mlXh1TFkQ6l01b6XWRGYWRhzgs3PnEJ1w000M4D4DlVJ"); // Remplace avec ta clé publique Stripe

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const [email, setEmail] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!email) {
      alert("Merci d'entrer votre adresse email.");
      return;
    }
  
    const stripe = await stripePromise;
  
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, email }),
    });
  
    const session = await res.json();
  
    if (session.id) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      alert("Erreur de session Stripe.");
      console.error("Session non reçue :", session);
    }
  };  

  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container">
        <h1 className="nasaflow-title">🛍️ Votre Panier</h1>

        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            <ul style={{ marginBottom: "1rem" }}>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} – CHF {item.price.toFixed(2)}
                </li>
              ))}
            </ul>

            <p className="nasaflow-price">Total : CHF {total.toFixed(2)}</p>

            {/* Champ email */}
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                marginBottom: "1rem",
                padding: "0.75rem",
                width: "100%",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
            />

            {/* Bouton de paiement */}
            <button className="nasaflow-button" onClick={handleCheckout}>
              Commander avec Stripe 💳
            </button>

            <button
              className="nasaflow-button"
              onClick={clearCart}
              style={{ marginTop: "1rem", backgroundColor: "#555" }}
            >
              Vider le panier
            </button>
          </>
        )}

        <br />
        <Link
          to="/"
          className="nasaflow-button"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          ← Retour à la boutique
        </Link>
      </div>
    </div>
  );
}
