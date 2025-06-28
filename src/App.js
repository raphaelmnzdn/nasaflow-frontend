import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NasaFlowShop from "./NasaFlowShop";
import CartPage from "./CartPage";
import { useCart } from "./CartContext";
import SuccessPage from "./SuccessPage";
import AdminPage from "./AdminPage";
import AdminPagePro from "./AdminPagePro";
import AdminLogin from "./AdminLogin";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

import logo from "./assets/nasaflow-1.png";
import "./App.css";
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

function App() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo NasaFlow" className="logo-img" />
          <span>Webicy</span>
        </Link>
        <nav>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/panier">
            🛒 Panier
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
          {/* Réseaux dans la navbar */}
          <span className="navbar-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} />
            </a>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost size={20} />
            </a>
          </span>
        </nav>
      </header>

      {/* Affiche ton logo juste en dessous du header (optionnel, si tu le veux VRAIMENT ici aussi)
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <img src={logo} alt="Logo NasaFlow" style={{ maxWidth: 180 }} />
      </div>
      */}

      <Routes>
        <Route path="/" element={<NasaFlowShop />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-pro" element={<AdminPagePro />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nf-social-link">
            <FaInstagram size={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="nf-social-link">
            <FaTiktok size={24} />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="nf-social-link">
            <FaSnapchatGhost size={24} />
          </a>
        </div>
        <div style={{ color: "#222", fontWeight: 500, fontSize: "0.93em" }}>
          © {new Date().getFullYear()} Webicy – Développement web & logiciels sur-mesure. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

export default App;
