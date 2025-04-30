import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NasaFlowShop from "./NasaFlowShop";
import CartPage from "./CartPage"; // ✅ Exactement comme le nom du fichier

import { useCart } from "./CartContext";
import SuccessPage from "./SuccessPage";
import AdminPage from "./AdminPage";
import AdminPagePro from "./AdminPagePro";
import AdminLogin from "./AdminLogin";
import AboutPage from "./AboutPage";



function App() {
  const { cart } = useCart();
  const totalItems = cart.length;

  return (
    <>
      {/* Barre de navigation */}
      <header className="navbar">
  <div className="nasaflow-container">
    <Link to="/" className="logo">NasaFlow</Link>

    <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/a-propos" className="cart-button">À propos</Link>

      <Link to="/panier" className="cart-button">
        🛒 Panier
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </div>
  </div>
</header>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<NasaFlowShop />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-pro" element={<AdminPagePro />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/a-propos" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
