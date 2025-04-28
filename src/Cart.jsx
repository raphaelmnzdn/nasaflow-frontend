import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="nasaflow-card" style={{ marginTop: "2rem" }}>
      <h3 className="nasaflow-product-title">🛒 Panier</h3>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} - CHF {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="nasaflow-price">Total : CHF {total.toFixed(2)}</p>
          <button className="nasaflow-button" onClick={clearCart}>
            Vider le panier
          </button>
        </>
      )}
    </div>
  );
}
