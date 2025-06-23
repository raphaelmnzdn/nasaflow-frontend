import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_..."); // Mets ta clé Stripe ici

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
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center font-sans">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full mt-12">
        <h1 className="text-3xl font-bold mb-6 text-yellow-500">Votre panier 🛒</h1>
        {cart.length === 0 ? (
          <div className="text-gray-500 text-lg mb-6">Votre panier est vide.</div>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <span>CHF {item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="font-bold text-lg mb-4 text-gray-800">
              Total : CHF {total.toFixed(2)}
            </div>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="border border-yellow-400 rounded-lg p-2 mb-4 w-full"
            />
            <button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition mb-2"
              onClick={handleCheckout}
            >
              Commander avec Stripe 💳
            </button>
            <button
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg text-sm"
              onClick={clearCart}
            >
              Vider le panier
            </button>
          </>
        )}
        <Link
          to="/"
          className="block text-center mt-6 text-yellow-500 hover:underline"
        >
          ← Retour à la boutique
        </Link>
      </div>
    </div>
  );
}
