import React, { useState } from "react";
import logo from "./assets/ton-logo.png"; // Mets ici ton logo
import product1 from "./assets/nasaflow-1.png";
import product2 from "./assets/nasaflow-2.png";
import product3 from "./assets/nasaflow-3.png";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const images = [product1, product2, product3];

export default function ProductPage() {
    
  const { addToCart } = useCart();
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen bg-yellow-300 font-sans flex flex-col">
        <div className="bg-yellow-400 text-black p-6">Test Tailwind</div>
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-8 py-6 bg-white/90 shadow">
        <img src={logo} alt="NasaFlow logo" className="h-12" />
        <Link
          to="/panier"
          className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          🛒 Panier
        </Link>
      </header>

      {/* Hero Produit */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-1 p-8 max-w-5xl mx-auto">
        {/* Carrousel */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={images[current]}
            alt={`Produit ${current + 1}`}
            className="rounded-xl shadow-md w-64 h-64 object-contain bg-white"
          />
          <div className="flex gap-2 mt-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 rounded-full border-2 ${
                  current === i
                    ? "bg-yellow-500 border-black"
                    : "bg-gray-200 border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Infos produit */}
        <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl font-extrabold mb-3 text-gray-900">
            Bandelette Magnétique NasaFlow
          </h1>
          <ul className="text-lg mb-4 text-gray-800 space-y-2">
            <li>🌬️ Oxygénez vos performances !</li>
            <li>🏃‍♂️ Idéal sport & sommeil</li>
            <li>💧 Invisible, confortable & réutilisable</li>
            <li>🇨🇭 Entreprise suisse</li>
          </ul>
          <div className="text-3xl font-black text-black mb-4">CHF 19.90</div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-bold shadow transition"
            onClick={() => addToCart({
              id: 1,
              name: "Bandelette magnétique NasaFlow",
              price: 19.90,
              quantity: 1,
            })}
          >
            Commander maintenant
          </button>
        </div>
      </main>

      {/* Avantages */}
      <section className="flex flex-wrap gap-8 justify-center bg-white/70 py-8">
        <Advantage icon="🚚" text="Livraison 48h" />
        <Advantage icon="🔒" text="Paiement sécurisé" />
        <Advantage icon="💸" text="Satisfait ou remboursé" />
        <Advantage icon="🇨🇭" text="Entreprise suisse" />
      </section>

      {/* Footer */}
      <footer className="bg-white/90 text-center py-5 mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} NasaFlow – Tous droits réservés
      </footer>
    </div>
  );
}

function Advantage({ icon, text }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl px-5 py-3 shadow">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="font-semibold text-gray-700">{text}</span>
    </div>
  );
}
