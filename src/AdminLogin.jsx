import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NasaFlowShop.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const secret = "nasaflowadmin2025"; // 🔑 Ton mot de passe (à changer si tu veux)

    if (password === secret) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-pro");
    } else {
      setError("Mot de passe incorrect.");
    }
  };

  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container" style={{ maxWidth: "400px" }}>
        <h1 className="nasaflow-title">🔐 Accès Admin</h1>

        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Mot de passe admin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="nasaflow-button">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
