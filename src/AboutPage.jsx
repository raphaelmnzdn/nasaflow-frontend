import React from "react";
import "./AboutPage.css"; // Pense à mettre à jour ce CSS !
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-hero">
          <span className="about-kicker">Agence digitale sur-mesure</span>
          <h1 className="about-title">À propos de <span>Bewezy</span></h1>
          <p className="about-desc">
            Bewezy accompagne les entrepreneurs, indépendants et PME avec des sites web, boutiques en ligne et outils métier pensés pour convertir, simplifier et faire gagner du temps.
          </p>
        </div>

        <div className="about-grid">
          <section className="about-section about-highlight">
            <h2>Ma mission</h2>
            <p>
              Rendre le digital plus clair, plus utile et plus rentable. Je conçois des interfaces modernes et des solutions fiables, du premier échange jusqu’à la mise en ligne.
            </p>
          </section>

          <section className="about-section">
            <h2>Mes services</h2>
            <ul>
              <li>Création de sites web professionnels et performants</li>
              <li>Boutiques e-commerce avec panier et paiement</li>
              <li>Logiciels et outils métier personnalisés</li>
              <li>SEO, automatisations et intégration d’API</li>
              <li>Maintenance, support et conseils stratégiques</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Pourquoi Bewezy</h2>
            <ul>
              <li>Accompagnement humain et réactif</li>
              <li>Design moderne orienté conversion</li>
              <li>Outils simples à gérer au quotidien</li>
              <li>Tarifs transparents, sans surprise</li>
            </ul>
          </section>

          <section className="about-section about-profile">
            <h2>Qui suis-je ?</h2>
            <p>
              Je m’appelle Raphaël. Je travaille le web, le design et l’automatisation avec une approche simple: produire des interfaces propres, utiles et pensées pour durer.
            </p>
          </section>

          <section className="about-section about-contact-card">
            <h2>On travaille ensemble ?</h2>
            <p>
              Si tu as un projet en tête, on peut en parler simplement, sans jargon inutile.
            </p>
            <a className="about-mail" href="mailto:bewozi@hotmail.com">bewozi@hotmail.com</a>
            <div className="about-socials">
              <a href="https://www.instagram.com/bewezy/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@bewezy8" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>
          </section>
        </div>

        <div className="about-footer">
          Bewezy - Créateur de solutions digitales sur-mesure
        </div>
      </div>
    </div>
  );
}
