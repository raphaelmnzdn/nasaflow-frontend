import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import "./CartPage.css"; // en haut du fichier

const STRIPE_PUBLIC_KEY =
  process.env.REACT_APP_STRIPE_PUBLIC_KEY ||
  "pk_live_51RHDZFFKPR2fb0mT4srobIKnhb7oSq3FKzTwaYy5kh5aE2C56IVxV3IB9RSokqDOZesNHn8YabbPVH8PbnWYD17G00eVrodf1y";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://nasaflow-backend.onrender.com";
const stripePromise = STRIPE_PUBLIC_KEY ? loadStripe(STRIPE_PUBLIC_KEY) : null;

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const formatCurrency = (value) => `CHF ${value.toFixed(2)}`;

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
      <div className="cart-shell">
        <div className="cart-header">
          <span className="cart-kicker">Checkout sécurisé</span>
          <h1 className="cart-title">Votre panier</h1>
          <p className="cart-subtitle">
            Vérifie ton récapitulatif avant de finaliser le paiement Stripe.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Votre panier est vide</h2>
            <p>Ajoute une offre depuis la page Tarifs pour lancer ton projet.</p>
            <Link to="/tarifs" className="cart-btn-link">
              Voir les tarifs
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-panel cart-items-panel">
              <div className="cart-panel-head">
                <h2>Articles</h2>
                <span>{itemCount} article{itemCount > 1 ? "s" : ""}</span>
              </div>

              <ul className="cart-list">
                {cart.map((item) => {
                  const quantity = item.quantity || 1;
                  const lineTotal = item.price * quantity;

                  return (
                    <li key={item.id} className="cart-item-row">
                      <div>
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-meta">
                          {quantity} x {formatCurrency(item.price)}
                        </div>
                      </div>
                      <div className="cart-item-total">{formatCurrency(lineTotal)}</div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <aside className="cart-panel cart-summary-panel">
              <div className="cart-panel-head">
                <h2>Résumé</h2>
              </div>

              <div className="cart-summary-row">
                <span>Sous-total</span>
                <strong>{formatCurrency(total)}</strong>
              </div>
              <div className="cart-summary-note">
                Paiement sécurisé via Stripe.
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
                {isLoading ? "Redirection..." : "Payer avec Stripe"}
              </button>
              <button className="cart-btn-clear" onClick={clearCart}>
                Vider le panier
              </button>

              <Link to="/tarifs" className="cart-link-back">
                ← Continuer les achats
              </Link>
            </aside>
          </div>
        )}

        <Link to="/" className="cart-link-back cart-home-link">
          Retour à la boutique
        </Link>
      </div>
    </div>
  );
}
