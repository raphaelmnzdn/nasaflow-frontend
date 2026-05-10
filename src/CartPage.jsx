import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import "./CartPage.css"; // en haut du fichier

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://nasaflow-backend.onrender.com";
const stripePromise = STRIPE_PUBLIC_KEY ? loadStripe(STRIPE_PUBLIC_KEY) : null;

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleCheckout = async () => {
    if (!email) {
      alert("Merci d'entrer votre adresse email.");
      return;
    }
    if (!STRIPE_PUBLIC_KEY) {
      alert("Configuration Stripe manquante. Ajoute REACT_APP_STRIPE_PUBLIC_KEY dans ton .env.");
      return;
    }

    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe n'a pas pu etre initialise.");
      }

      const res = await fetch(`${API_BASE_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, email }),
      });

      const session = await res.json();
      if (!res.ok || !session.id) {
        throw new Error(session.error || "Session Stripe non recue.");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      alert("Erreur lors du paiement Stripe.");
      console.error(err);
    } finally {
      setIsLoading(false);
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
          <button className="cart-btn-stripe" onClick={handleCheckout} disabled={isLoading}>
            {isLoading ? "Redirection..." : "Commander avec Stripe"}
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
