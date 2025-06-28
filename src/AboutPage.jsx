import React from "react";
import "./AboutPage.css"; // à créer si tu veux le style qui suit
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">À propos de Webicy</h1>
        <p className="about-desc">
          Chez <strong>Webicy</strong>, chaque projet digital mérite une approche unique, sur-mesure et humaine.<br /><br />
          <b>À l’origine</b>, Webicy proposait des produits innovants. Aujourd’hui, nous avons évolué pour accompagner les entrepreneurs, commerçants et indépendants dans la réussite de leur activité <b>en ligne</b>.<br /><br />
          <b>Nous créons des sites internet, boutiques en ligne, logiciels sur-mesure et outils digitaux performants</b> – pour booster votre activité, automatiser vos process et rendre votre marque visible.
        </p>

        <div className="about-section">
          <h2>Nos prestations</h2>
          <ul>
            <li> Création de sites vitrines modernes et responsives</li>
            <li> Développement de boutiques en ligne (e-commerce)</li>
            <li> Développement de logiciels/solutions métier</li>
            <li> Conseil digital & automatisation</li>
            <li> Maintenance, hébergement, SEO</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Pourquoi choisir Webicy ?</h2>
          <ul>
            <li> Écoute & accompagnement personnalisé</li>
            <li> Design unique et moderne</li>
            <li> Réactivité, transparence & tarifs adaptés</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Qui se cache derrière Webicy ?</h2>
          <p>
            Je suis <b>Raphaël</b>, passionné de digital et d’entrepreneuriat. J’aide les PME, indépendants et créateurs à réussir sur le web.<br /><br />
            Discutons de votre projet autour d’un café (virtuel ou réel) !
          </p>
          <p className="about-contact">
            <b>Contact :</b> <a href="mailto:contact@webicy.ch">contact@webicy.ch</a>
          </p>
          <div className="about-socials">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://snapchat.com/" target="_blank" rel="noopener noreferrer"><FaSnapchatGhost /></a>
          </div>
        </div>

        <div className="about-footer">
          Webicy – Créateur de solutions digitales sur-mesure
        </div>
      </div>
    </div>
  );
}
