import React, { useState } from "react";
import { motion } from "framer-motion";
import "./NasaFlowShop.css";
import { useCart } from "./CartContext";

export default function NasaFlowShop() {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Bandelette magnétique NasaFlow",
      price: 19.90,
      quantity: 1,
    });

    // 🔈 Joue le son
  const ding = new Audio("/ding.mp3");
  ding.play();


    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="nasaflow-wrapper">
      {showNotification && (
        <div className="notification">Produit ajouté au panier 🛒</div>
      )}

      <div className="nasaflow-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="nasaflow-title"
        >
          NasaFlow – Respirez la performance
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="nasaflow-grid"
        >
          <img
            src="/nasaflow-box.png"
            alt="Boîte NasaFlow"
            className="nasaflow-image"
          />

          <div className="nasaflow-card">
            <h2 className="nasaflow-product-title">
              Bandelette magnétique NasaFlow
            </h2>
            <p className="nasaflow-description">
              Oxygénez vos performances avec notre bandelette nasale
              magnétique. Réutilisable, confortable, invisible. Idéale pour le
              sport et le sommeil.
            </p>
            <p className="nasaflow-price">CHF 19.90</p>
            <button className="nasaflow-button" onClick={handleAddToCart}>
              Ajouter au panier
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
