import React, { useEffect, useState } from "react";
import "./NasaFlowShop.css";

export default function AdminPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4242/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container">
        <h1 className="nasaflow-title">📦 Commandes</h1>

        {orders.length === 0 ? (
          <p>Aucune commande trouvée.</p>
        ) : (
          orders.map((order, i) => (
            <div key={i} className="nasaflow-card" style={{ marginBottom: "1rem" }}>
              <p><strong>Date :</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Email :</strong> {order.email}</p>
              <p><strong>Total :</strong> CHF {order.total}</p>
              <p><strong>Articles :</strong></p>
              <ul>
                {order.items.map((item, j) => (
                  <li key={j}>• {item.name} – CHF {item.price}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
