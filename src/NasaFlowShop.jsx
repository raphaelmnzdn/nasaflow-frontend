import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NasaFlowShop.css";
import { useNavigate } from "react-router-dom";


export default function NasaFlowShop() {
  const services = [
    {
      title: "Sites vitrines",
      text: "Une présence en ligne claire, crédible et pensée pour convertir.",
    },
    {
      title: "E-commerce",
      text: "Une boutique fluide avec panier, paiement et parcours d'achat simple.",
    },
    {
      title: "Automatisation",
      text: "Des tâches répétitives simplifiées avec des outils sur-mesure.",
    },
  ];

  const process = [
    "On définit le besoin et le périmètre",
    "Je conçois le design et l'expérience",
    "Je développe, teste et mets en ligne",
    "Je reste disponible pour le suivi",
  ];

  // Liste d’avis clients (en mémoire)
  const [reviews, setReviews] = useState([
    { name: "Emma", text: "Bewezy a compris mes besoins et livré un site magnifique en un temps record !", stars: 5 },
    { name: "Pierre", text: "Un vrai partenaire digital, créatif et pro. Je recommande !", stars: 5 },
    { name: "Léa", text: "Beaucoup d’écoute, d’idées, et un vrai sens du service. Merci !", stars: 5 }
  ]);
  // Pour l’ajout d’un nouvel avis
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewStars, setReviewStars] = useState(5);
  const [reviewMsg, setReviewMsg] = useState("");
  const navigate = useNavigate();


  // Contact popup
  const [showContact, setShowContact] = useState(false);

  // Ajout d’un avis (front only)
  const handleAddReview = (e) => {
    e.preventDefault();
    if (reviewName.trim() && reviewText.trim()) {
      setReviews([
        ...reviews,
        { name: reviewName.trim(), text: reviewText.trim(), stars: reviewStars }
      ]);
      setReviewName("");
      setReviewText("");
      setReviewStars(5);
      setReviewMsg("Merci pour votre avis !");
      setTimeout(() => setReviewMsg(""), 2500);
    }
  };

  return (
    <main className="bewezy-bg">
      <section className="bewezy-hero">
        <div className="bewezy-hero-copy">
          <span className="bewezy-kicker">Agence web & digital sur-mesure</span>
          <h1 className="bewezy-title">
            Des sites plus beaux, plus clairs, et surtout plus efficaces.
          </h1>
          <p className="bewezy-subtitle">
            Bewezy conçoit des sites vitrines, boutiques en ligne et outils métier pensés pour donner une image plus professionnelle et faire avancer ton activité.
          </p>
          <div className="bewezy-hero-actions">
            <button className="bewezy-btn" onClick={() => navigate("/tarifs")}>
              Voir les tarifs
            </button>
            <Link to="/contact" className="bewezy-btn secondary">
              Me contacter
            </Link>
          </div>

          <ul className="bewezy-benefits">
            <li>Sites vitrines modernes et responsives</li>
            <li>Boutiques e-commerce avec panier et Stripe</li>
            <li>Automatisations, SEO et support personnalisé</li>
          </ul>
        </div>

        <div className="bewezy-hero-card">
          <div className="bewezy-hero-card-top">
            <span>Ce que tu gagnes</span>
            <strong>Une présence plus solide</strong>
          </div>
          <div className="bewezy-stat-grid">
            <div className="bewezy-stat">
              <strong>01</strong>
              <span>Site clair et crédible</span>
            </div>
            <div className="bewezy-stat">
              <strong>02</strong>
              <span>Meilleure conversion</span>
            </div>
            <div className="bewezy-stat">
              <strong>03</strong>
              <span>Expérience mobile fluide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bewezy-strip">
        <div>
          <span>Approche</span>
          <strong>Design propre + technique fiable</strong>
        </div>
        <div>
          <span>Livraison</span>
          <strong>Du besoin jusqu'à la mise en ligne</strong>
        </div>
        <div>
          <span>Résultat</span>
          <strong>Un site qui inspire confiance</strong>
        </div>
      </section>

      <section className="bewezy-services">
        <div className="bewezy-section-head">
          <h2>Ce que je peux construire pour toi</h2>
          <p>Des solutions utiles, élégantes et pensées pour ton activité.</p>
        </div>
        <div className="bewezy-service-grid">
          {services.map((service) => (
            <article className="bewezy-service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bewezy-argument">
        <div className="bewezy-section-head left">
          <h2>Une méthode simple, sans friction</h2>
          <p>On avance vite, avec une vision claire et des échanges concrets.</p>
        </div>
        <div className="bewezy-process">
          {process.map((step, index) => (
            <div className="bewezy-process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bewezy-why">
        <div className="bewezy-section-head left">
          <h2>Pourquoi choisir Bewezy ?</h2>
          <p>Une approche plus humaine, plus propre et plus orientée résultat.</p>
        </div>
        <ul className="bewezy-why-list">
          <li>Expertise et créativité sur chaque projet</li>
          <li>Design unique, adapté à ton image</li>
          <li>Réactivité et suivi personnalisé</li>
          <li>Tarifs transparents, sans surprise</li>
          <li>Solutions évolutives, prêtes à grandir avec toi</li>
        </ul>
      </section>

      {/* AVIS CLIENTS */}
      <section className="bewezy-reviews">
        <div className="bewezy-section-head">
          <h2>Ils nous ont fait confiance</h2>
          <p>Quelques retours de clients et projets accompagnés.</p>
        </div>
        <div className="bewezy-review-list">
          {reviews.slice(0).reverse().map((r, idx) => (
            <div className="bewezy-review" key={idx}>
              <span className="bewezy-review-stars">
                {Array.from({length: r.stars}, (_, i) => "⭐️").join("")}
              </span>
              <span className="bewezy-review-name">{r.name}</span>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
        <form className="bewezy-review-form" onSubmit={handleAddReview}>
          <h3>Laissez votre avis</h3>
          <input
            type="text"
            placeholder="Votre prénom"
            value={reviewName}
            onChange={e => setReviewName(e.target.value)}
            maxLength={20}
            required
          />
          <textarea
            placeholder="Votre témoignage (max 200 caractères)"
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
            maxLength={200}
            required
          />
          <label className="bewezy-review-stars-form">
            Note :
            <select
              value={reviewStars}
              onChange={e => setReviewStars(Number(e.target.value))}
              style={{ marginLeft: 8 }}
            >
              <option value={5}>⭐⭐⭐⭐⭐</option>
              <option value={4}>⭐⭐⭐⭐</option>
              <option value={3}>⭐⭐⭐</option>
              <option value={2}>⭐⭐</option>
              <option value={1}>⭐</option>
            </select>
          </label>
          <button type="submit" className="bewezy-btn small">Envoyer l’avis</button>
          {reviewMsg && <div className="bewezy-review-msg">{reviewMsg}</div>}
        </form>
      </section>

      {/* APPEL CONTACT */}
      <section className="bewezy-contact-cta">
        <div className="bewezy-cta-inner">
          <div className="bewezy-cta-content">
            <span className="bewezy-kicker">Projet sur-mesure</span>
            <h2>Besoin d’un site ou d’un outil plus pro ? Parlons-en.</h2>
            <p>Je t’aide à clarifier ton besoin et à construire une solution propre, utile et facile à faire évoluer.</p>
            <Link to="/contact" className="bewezy-cta-btn">
              Contactez Bewezy
            </Link>
          </div>
        </div>
      </section>

      {/* POPUP CONTACT MODAL */}
      {showContact && (
        <div className="bewezy-popup-bg" onClick={() => setShowContact(false)}>
          <div className="bewezy-popup" onClick={e => e.stopPropagation()}>
            <h3>Contactez Bewezy</h3>
            <p>
              Envoyez un email ou prenez rendez-vous pour discuter de votre projet.<br />
              <a href="mailto:contact@bewezy.ch" className="bewezy-btn" style={{ marginTop: "1rem" }}>
                ✉️ contact@bewezy.ch
              </a>
            </p>
            <button className="bewezy-popup-close" onClick={() => setShowContact(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </main>
  );
}