import React from "react";

export default function AboutPage() {
  return (
    <div className="nasaflow-wrapper">
      <div className="nasaflow-container">
        <h1 className="nasaflow-title">🌬️ À propos de NasaFlow</h1>

        <div className="nasaflow-card">
          <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Chez <strong>NasaFlow</strong>, nous croyons qu’une respiration optimale peut transformer le quotidien.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Notre aventure commence en Suisse, dans un vestiaire de football, entre deux jeunes passionnés de sport et
            d’innovation. L’un d’eux — asthmatique depuis l’enfance — cherchait une solution simple, naturelle et
            efficace pour mieux respirer sans médication.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            C’est ainsi qu’est née l’idée : <strong>des bandelettes nasales magnétiques</strong>, combinant technologie
            douce et design moderne, pour ouvrir les voies respiratoires tout en restant stylé.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Après des mois de tests, prototypes, retours de sportifs, et beaucoup de nuits blanches, <strong>NasaFlow</strong> est né.
            Aujourd’hui, nos produits sont pensés pour tous : sportifs, étudiants, travailleurs, ou simplement ceux qui veulent <em>respirer mieux et vivre plus intensément</em>.
          </p>

          <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
            Merci de faire partie de cette respiration nouvelle 🌬️<br />
            — L’équipe NasaFlow
          </p>
        </div>
      </div>
    </div>
  );
}
