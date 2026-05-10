import React from "react";
import { Link } from "react-router-dom";
import "./NasaFlowShop.css";

export default function CancelPage() {
  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container" style={{ textAlign: "center" }}>
        <h1 className="nasaflow-title">Paiement annule</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Le paiement a ete annule. Vous pouvez reprendre votre commande quand vous voulez.
        </p>

        <Link to="/panier" className="nasaflow-button">
          Retour au panier
        </Link>
      </div>
    </div>
  );
}
