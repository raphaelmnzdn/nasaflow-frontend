import React from "react";
import "./AboutPage.css"; // Pense à mettre à jour ce CSS !
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">À propos de <span style={{ color: "#7447e1" }}>Bewezy</span></h1>
        <p className="about-desc">
          <b>bewezy</b>, c’est la volonté d’offrir à chaque entrepreneur, indépendant ou PME un <span style={{ color: "#7447e1" }}>site internet</span> ou <span style={{ color: "#7447e1" }}>logiciel</span> à la hauteur de ses ambitions.
          <br /><br />
          <b>Ma mission</b> : rendre le digital accessible, puissant et sur-mesure pour tous.<br />
          Je t’accompagne de A à Z : du conseil à la mise en ligne, en passant par le design, le développement et l’optimisation.
        </p>

        <div className="about-section">
          <h2>Mes services</h2>
          <ul>
            <li>✨ Création de sites web professionnels & uniques</li>
            <li>🛒 Développement de boutiques en ligne (e-commerce)</li>
            <li>⚙️ Logiciels & outils métier personnalisés</li>
            <li>🚀 SEO, automatisations, intégration d’API</li>
            <li>💡 Conseils stratégiques, maintenance & support</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Pourquoi choisir bewezy ?</h2>
          <ul>
            <li>✔️ Accompagnement humain, réactif, bienveillant</li>
            <li>✔️ Design moderne, orienté conversion</li>
            <li>✔️ Outils simples à gérer, même sans compétences tech</li>
            <li>✔️ Tarifs transparents, pas de mauvaise surprise</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Qui suis-je ?</h2>
          <p>
            Je m’appelle <b>Raphaël</b> et je suis passionné par le web, le design, l’automatisation et l’entrepreneuriat. <br />
            J’aide les indépendants et entreprises à faire décoller leur présence digitale et gagner en efficacité grâce à des solutions 100% personnalisées.
          </p>
        </div>

        <div className="about-section">
          <h2>On travaille ensemble ?</h2>
          <p>
            Discutons de ton projet autour d’un appel ou d’un café (virtuel ou réel) !<br />
            <b>Contact</b> : <a href="mailto:bewozi@hotmail.com">bewozi@hotmail.com</a>
          </p>
          <div className="about-socials">
            <a href="https://www.instagram.com/bewezy/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@bewezy8" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>

        <div className="about-footer">
          bewezy – Créateur de solutions digitales sur-mesure
        </div>
      </div>
    </div>
  );
}
