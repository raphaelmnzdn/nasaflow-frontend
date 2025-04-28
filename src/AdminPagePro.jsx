
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./NasaFlowShop.css";


export default function AdminPagePro() {
  const [orders, setOrders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4242/api/orders")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(sorted);
        setFiltered(sorted);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filteredOrders = orders.filter((order) =>
      order.email.toLowerCase().includes(value)
    );
    setFiltered(filteredOrders);
  };

  if (localStorage.getItem("isAdmin") !== "true") {
    return <Navigate to="/admin-login" />;
  }
  
  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container">
        <h1 className="nasaflow-title">📊 Admin – Historique commandes</h1>

        <input
          type="text"
          placeholder="Rechercher par email"
          value={search}
          onChange={handleSearch}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "2rem",
            borderRadius: "0.5rem",
            fontSize: "1rem",
          }}
        />

        {filtered.length === 0 ? (
          <p>Aucune commande trouvée.</p>
        ) : (
          filtered.map((order, i) => (
            <div key={i} className="nasaflow-card" style={{ marginBottom: "1rem" }}>
              <p><strong>Date :</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Email :</strong> {order.email}</p>
              <p><strong>Total :</strong> CHF {order.total}</p>
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
