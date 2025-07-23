import React from 'react';
import './App.css';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Bewezy" className="logo-img" />
          Bewezy
        </a>

        <div className="nav-links">
          <a href="/about">À propos</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="navbar-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </header>

      {/* Reste de la page ici */}
    </div>
  );
}

export default App;
