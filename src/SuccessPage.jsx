import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./NasaFlowShop.css";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container" style={{ textAlign: "center" }}>
        <h1 className="nasaflow-title">✅ Paiement réussi</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Merci pour votre commande ! Votre bandelette NasaFlow arrive bientôt 🚀
        </p>

        <Link to="/" className="nasaflow-button">
          ← Retour à la boutique
        </Link>
      </div>
    </div>
  );
}
