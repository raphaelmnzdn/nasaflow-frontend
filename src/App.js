import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import { useCart } from "./CartContext";

function App() {
  const { cart } = useCart();
  const totalItems = cart.length;

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow py-4 px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-black">
          <img src="/assets/nasaflow-1.png" alt="NasaFlow" className="h-10" />
          NasaFlow
        </Link>
        <Link
          to="/panier"
          className="relative bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-2 rounded-lg shadow transition"
        >
          🛒 Panier
          {totalItems > 0 && (
            <span className="cart-badge absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/panier" element={<CartPage />} />
        {/* Ajoute d’autres pages ici si besoin */}
      </Routes>
    </>
  );
}
export default App;
