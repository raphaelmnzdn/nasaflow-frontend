import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NasaFlowShop from "./NasaFlowShop";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

import logo from "./assets/logo-bewezy.png";
import "./App.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function App() {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Bewezy" className="logo-img"/>
        </Link>
        <nav>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
          <div className="navbar-socials">
            <a href="https://www.instagram.com/bewezy/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@bewezy8" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} />
            </a>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<NasaFlowShop />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://www.instagram.com/bewezy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@bewezy8" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} />
          </a>
        </div>
        <div style={{ color: "#fff", fontWeight: 500, fontSize: "0.95em" }}>
          © {new Date().getFullYear()} Bewezy – Développement web & logiciels sur-mesure. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

export default App;