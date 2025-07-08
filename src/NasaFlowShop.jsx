import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NasaFlowShop.css";
import { useNavigate } from "react-router-dom";


export default function NasaFlowShop() {
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
      {/* HERO */}
      <section className="bewezy-hero">
        <h1 className="bewezy-title">
          <span className="accent">Bewezy</span><br />
          Développons votre présence en ligne.
        </h1>
        <p className="bewezy-subtitle">
          Création de sites internet, boutiques e-commerce, logiciels & solutions digitales sur-mesure.<br />
          Faites confiance à <b>Bewezy</b> pour propulser votre activité grâce à une expérience digitale moderne, fluide, performante.
        </p>
        <ul className="bewezy-benefits">
          <li>✓ Sites vitrines & e-commerce modernes, adaptatifs et performants</li>
          <li>✓ Automatisation, solutions métier & développement spécifique</li>
          <li>✓ Conseils personnalisés, accompagnement humain</li>
          <li>✓ Maintenance, sécurité, SEO inclus</li>
        </ul>
        <button className="bewezy-btn" onClick={() => navigate("/contact")}>
          Discuter de mon projet 🚀
        </button>
        
      </section>

      {/* ARGUMENTAIRE */}
      <section className="bewezy-argument">
        <h2>Votre réussite, notre priorité</h2>
        <p>
          Bewezy vous accompagne de A à Z : de l’idée à la mise en ligne, en passant par le conseil, le design et le développement sur-mesure.<br />
          Notre différence ? <b>Un suivi humain, une transparence totale et une expertise technique</b> pour chaque projet.<br /><br />
          Notre objectif : <b>vous simplifier le digital</b>, tout en boostant votre image, votre chiffre d’affaires et votre liberté.
        </p>
      </section>

      {/* POURQUOI CHOISIR BEWEZY */}
      <section className="bewezy-why">
        <h2>Pourquoi choisir <span className="accent">Bewezy</span> ?</h2>
        <ul>
          <li><b>Expertise</b> & créativité sur chaque projet</li>
          <li><b>Design</b> unique, adapté à votre image</li>
          <li><b>Réactivité</b> & suivi personnalisé</li>
          <li><b>Transparence</b> sur les tarifs et les délais</li>
          <li><b>Solutions évolutives</b>, prêtes à booster votre activité</li>
        </ul>
      </section>

      {/* AVIS CLIENTS */}
      <section className="bewezy-reviews">
        <h2>Ils nous ont fait confiance</h2>
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
            <h2>Besoin d’un site ? D’un logiciel ? Parlons-en.</h2>
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