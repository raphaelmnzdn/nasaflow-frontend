import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./TarifsPage.css";

const plans = [
  {
    id: "site-vitrine-starter",
    name: "Site vitrine Starter",
    price: 790,
    details: [
      "1 a 3 pages",
      "Design moderne et responsive",
      "Formulaire de contact",
      "Mise en ligne incluse",
    ],
  },
  {
    id: "site-vitrine-pro",
    name: "Site vitrine Pro",
    price: 1490,
    details: [
      "Jusqu'a 8 pages",
      "SEO de base",
      "Animations et sections avancees",
      "Support prioritaire 30 jours",
    ],
    featured: true,
  },
  {
    id: "site-ecommerce",
    name: "Boutique E-commerce",
    price: 2490,
    details: [
      "Catalogue produits",
      "Panier et checkout",
      "Configuration paiements",
      "Formation de prise en main",
    ],
  },
  {
    id: "consultation-lancement",
    name: "Consultation / conseil de lancement",
    price: 10,
    details: [
      "Appel de cadrage rapide",
      "Conseils pour bien lancer ton site",
      "Recommandations sur l'offre et le contenu",
    ],
  },
];

export default function TarifsPage() {
  const { addToCart } = useCart();
  const [addedPlan, setAddedPlan] = useState("");

  const handleAddToCart = (plan) => {
    addToCart({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      quantity: 1,
    });
    setAddedPlan(plan.name);
    setTimeout(() => setAddedPlan(""), 2200);
  };

  return (
    <main className="tarifs-wrapper">
      <section className="tarifs-hero">
        <h1>Nos tarifs web</h1>
        <p>
          Choisis la formule qui correspond a ton projet. Tu peux ajouter une offre au panier puis
          payer en ligne avec Stripe.
        </p>
      </section>

      <section className="tarifs-grid">
        {plans.map((plan) => (
          <article key={plan.id} className={`tarif-card ${plan.featured ? "featured" : ""}`}>
            {plan.featured && <span className="tarif-badge">Le plus choisi</span>}
            <h2>{plan.name}</h2>
            <p className="tarif-price">CHF {plan.price.toFixed(2)}</p>
            <ul>
              {plan.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <button type="button" className="tarif-btn" onClick={() => handleAddToCart(plan)}>
              Ajouter au panier
            </button>
          </article>
        ))}
      </section>

      {addedPlan && <p className="tarif-confirm">{addedPlan} ajoute au panier.</p>}

      <div className="tarifs-actions">
        <Link to="/panier" className="tarifs-link tarifs-link-primary">
          Voir mon panier
        </Link>
        <Link to="/contact" className="tarifs-link">
          Besoin d'un devis sur mesure ?
        </Link>
      </div>
    </main>
  );
}
