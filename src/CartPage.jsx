import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import "./CartPage.css"; // en haut du fichier

const stripePromise = loadStripe("pk_live_51RHDZFFKPR2fb0mT4srobIKnhb7oSq3FKzTwaYy5kh5aE2C56IVxV3IB9RSokqDOZesNHn8YabbPVH8PbnWYD17G00eVrodf1y"); // Remplace avec ta clé publique Stripe

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
    const res = await fetch('https://nasaflow-backend.onrender.com/create-checkout-session', {
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
  <div className="cart-bg">
    <div className="cart-box">
      <h1 className="cart-title">Votre panier 🛒</h1>
      {cart.length === 0 ? (
        <div style={{ color: "#aaa", textAlign: "center", marginBottom: 18 }}>
          Votre panier est vide.
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, i) => (
              <li key={i}>
                <span>{item.name}</span>
                <span>CHF {item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total : CHF {total.toFixed(2)}
          </div>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="cart-input"
          />
          <button className="cart-btn-stripe" onClick={handleCheckout}>
            Commander avec Stripe 💳
          </button>
          <button className="cart-btn-clear" onClick={clearCart}>
            Vider le panier
          </button>
        </>
      )}
      <Link to="/" className="cart-link-back">
        ← Retour à la boutique
      </Link>
    </div>
  </div>
);
}
