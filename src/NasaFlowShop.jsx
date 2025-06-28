import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./NasaFlowShop.css";

export default function NasaFlowShop() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#eee" }}>
      {/* HERO */}
      <section
        style={{
          background: "transparent",
          padding: "4em 0 2em 0",
          maxWidth: 1200,
          margin: "auto"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3em",
            justifyContent: "center"
          }}
        >
          <div style={{ minWidth: 320, maxWidth: 460, flex: 1 }}>
            <h1 style={{ fontSize: "2.7em", fontWeight: 900, color: "#7447e1", marginBottom: 15 }}>
              Webicy
              <span style={{ color: "#eee", fontWeight: 600 }}> – Développeur de votre présence digitale</span>
            </h1>
            <p style={{ fontSize: "1.13em", color: "#bdbdbd", marginBottom: 18 }}>
              <b style={{ color: "#fff" }}>Vous voulez un site, une boutique ou un logiciel sur-mesure ?</b><br />
              Webicy accompagne entrepreneurs, indépendants, PME et assos pour créer des <span style={{ color: "#7447e1" }}>sites et outils digitaux</span> <b>clés en main</b> et <b>qui rapportent</b>.
            </p>
            <ul style={{ color: "#eee", fontSize: "1.05em", margin: "0 0 20px 0", paddingLeft: 18 }}>
              <li>✅ Sites web modernes, design pro</li>
              <li>✅ E-commerce qui vendent</li>
              <li>✅ Logiciels, automatisations, API</li>
              <li>✅ 100% sur-mesure, sécurisé</li>
              <li>✅ SEO, hébergement, maintenance</li>
            </ul>
            <button
              style={{
                background: "#7447e1",
                color: "#fff",
                fontWeight: 700,
                border: "none",
                borderRadius: "30px",
                fontSize: "1.09em",
                padding: "0.9em 2em",
                marginTop: 7,
                cursor: "pointer",
                boxShadow: "0 2px 18px 0 #7447e142"
              }}
              onClick={() => setShowContact(true)}
            >
              Demander un devis gratuit 🚀
            </button>
          </div>
          <div style={{ minWidth: 260, maxWidth: 370, flex: 1 }}>
            <img
              src="/nasaflow-box.png"
              alt="Portfolio Webicy"
              style={{
                width: "100%",
                borderRadius: "1.3em",
                border: "3px solid #7447e1",
                background: "#7447e1",
                boxShadow: "0 8px 32px #7447e120"
              }}
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        style={{
          background: "transparent",
          maxWidth: 900,
          margin: "3em auto 2em auto",
          padding: 0
        }}
      >
        <h2 style={{ color: "#7447e1", fontWeight: 800, marginBottom: 22, fontSize: "2em" }}>
          Quelques réalisations & inspirations
        </h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3500}
          stopOnHover
          showStatus={false}
        >
          <div>
            <img src="/otakoy.png" alt="Otakoy" />
            <p className="legend">
              <a href="https://otakoy.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#7447e1", fontWeight: 700 }}>
                Voir Otakoy.com
              </a>
            </p>
          </div>
          <div>
            <img src="/curvup.png" alt="Curvup" />
            <p className="legend">
              <a href="https://curvup.fr/" target="_blank" rel="noopener noreferrer" style={{ color: "#7447e1", fontWeight: 700 }}>
                Voir Curvup.fr
              </a>
            </p>
          </div>
          <div>
            <img src="/nasaflow-box.png" alt="Votre site ici" />
            <p className="legend">
              <span style={{ color: "#7447e1", fontWeight: 700 }}>Bientôt votre site ici !</span>
            </p>
          </div>
        </Carousel>
      </section>

      {/* AVIS CLIENTS */}
      <section
        style={{
          background: "transparent",
          maxWidth: 900,
          margin: "2.5em auto",
          padding: "1.6em 0 0.2em 0"
        }}
      >
        <h2 style={{ color: "#7447e1", marginBottom: 20 }}>Ce qu’ils pensent de nous</h2>
        <div style={{ display: "flex", gap: "1.5em", flexWrap: "wrap" }}>
          {[
            { name: "Emma", text: "Webicy a créé mon site en 2 semaines, il est magnifique et mes ventes ont décollé !" },
            { name: "Pierre", text: "Rapide, créatif, à l’écoute, un vrai partenaire pour mon business." },
            { name: "Alice", text: "Ils m’ont conseillé, designé et mis en ligne un site pro, facile à gérer." }
          ].map((r, i) => (
            <div key={i}
              style={{
                background: "#222",
                color: "#fff",
                borderLeft: "4px solid #7447e1",
                borderRadius: "1.1em",
                padding: "1.2em 1.6em",
                flex: "1 1 240px",
                minWidth: 180,
                marginBottom: 10
              }}>
              <strong style={{ color: "#7447e1" }}>⭐️⭐️⭐️⭐️⭐️ {r.name}</strong>
              <p style={{ fontSize: "1.08em" }}>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section
        style={{
          background: "transparent",
          maxWidth: 900,
          margin: "2em auto"
        }}
      >
        <h2 style={{ color: "#7447e1" }}>
          Pourquoi choisir <span style={{ color: "#fff" }}>Webicy</span> ?
        </h2>
        <ul style={{ color: "#bbb", fontSize: "1.1em", paddingLeft: 17 }}>
          <li>• Accompagnement humain, réactif, transparent</li>
          <li>• Design unique, adapté à votre image</li>
          <li>• Solutions simples à gérer, évolutives</li>
          <li>• Tarifs clairs, pas de surprise</li>
          <li>• Hébergement, maintenance, sécurité inclus</li>
        </ul>
      </section>

      {/* À PROPOS */}
      <section
        style={{
          background: "transparent",
          maxWidth: 900,
          margin: "2em auto"
        }}
      >
        <h2 style={{ color: "#7447e1" }}>À propos de Webicy</h2>
        <p style={{ color: "#ccc", fontSize: "1.08em" }}>
          <b>Webicy</b> est né de la passion d’aider les indépendants, créateurs, commerçants et PME à <b>réussir sur le web</b>.<br />
          Je suis <b>Raphaël</b>, développeur et entrepreneur, et j’ai accompagné déjà de nombreux projets à booster leur présence digitale.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#7447e1" }}>Instagram</a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#7447e1" }}>TikTok</a>
          <a href="https://snapchat.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#7447e1" }}>Snapchat</a>
        </div>
      </section>

      {/* NOUS CONTACTER */}
      <section
        style={{
          background: "transparent",
          maxWidth: 900,
          margin: "2em auto 3em auto",
          textAlign: "center"
        }}
      >
        <h2 style={{ color: "#7447e1" }}>Discutons de votre projet !</h2>
        <p style={{ color: "#aaa", fontSize: "1.12em" }}>
          Un besoin, une question ? Contactez-nous pour un devis, un conseil ou simplement échanger sur votre idée !
        </p>
        <Link
          to="/contact"
          className="webicy-btn-contact"
          style={{
            background: "#7447e1",
            color: "#fff",
            borderRadius: "30px",
            fontWeight: 700,
            padding: "1em 2.2em",
            margin: "1.1em 0 2.1em 0",
            display: "inline-block",
            textDecoration: "none"
          }}
        >
          ✉️ Contactez Webicy
        </Link>
      </section>

      {/* POPUP CONTACT */}
      {showContact && (
        <div style={{
          position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh",
          background: "#000a", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
        }}
          onClick={() => setShowContact(false)}
        >
          <div
            style={{
              background: "#181522",
              padding: "2.2em 2em",
              borderRadius: "1.1em",
              boxShadow: "0 2px 40px #7447e1aa",
              minWidth: 300,
              maxWidth: "90vw",
              color: "#fff"
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3 style={{ color: "#7447e1", fontWeight: 800 }}>Contactez Webicy</h3>
            <p style={{ color: "#ddd", marginBottom: 18 }}>Parlez-moi de votre projet ! 👇</p>
            <a
              href="mailto:contact@webicy.ch"
              style={{
                background: "#7447e1",
                color: "#fff",
                borderRadius: "30px",
                fontWeight: 700,
                padding: "0.9em 2em",
                textDecoration: "none"
              }}
            >
              Écrire à contact@webicy.ch
            </a>
            <button
              style={{
                background: "transparent",
                color: "#7447e1",
                border: "none",
                fontWeight: 800,
                marginTop: "1.3em",
                cursor: "pointer"
              }}
              onClick={() => setShowContact(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
