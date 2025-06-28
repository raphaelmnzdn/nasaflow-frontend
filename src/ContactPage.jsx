import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Tu peux ici ajouter l'envoi réel (emailjs, formulaire backend, etc)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <h1 className="contact-title">Contactez Webicy</h1>
        <p className="contact-desc">
          Une idée, une question, un projet digital ?<br />Laisse-nous un message, on te répond en 24h.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-label">Nom</label>
          <input
            className="contact-input"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
          />

          <label className="contact-label">Email</label>
          <input
            className="contact-input"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Votre adresse mail"
            value={form.email}
            onChange={handleChange}
          />

          <label className="contact-label">Message</label>
          <textarea
            className="contact-textarea"
            name="message"
            required
            placeholder="Décrivez votre besoin, projet, question…"
            value={form.message}
            onChange={handleChange}
          />

          <button className="contact-btn" type="submit">
            Envoyer 🚀
          </button>
        </form>
        {sent && (
          <div style={{ color: "#ffe380", marginTop: "1.3rem", textAlign: "center" }}>
            Merci, votre message a bien été envoyé !
          </div>
        )}
        <div className="contact-footer">
          Ou contactez-nous sur <a href="mailto:contact@webicy.ch" style={{ color: "#ffe380" }}>contact@webicy.ch</a>
        </div>
      </div>
    </div>
  );
}
