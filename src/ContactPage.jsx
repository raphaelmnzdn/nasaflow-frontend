import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css"; // Assure-toi d'avoir ce fichier

export default function ContactPage() {
  // Tes clés
  const SERVICE_ID = "service_v254k2c";
  const TEMPLATE_ID = "template_wg76i5p";
  const PUBLIC_KEY = "rHYlus3TwvwhvTuXK";

  // State pour le formulaire
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError(false);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSending(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  return (
    <div className="contact-bg">
      <div className="contact-card">
        <h1 className="contact-title">Contacte-nous</h1>
        <p className="contact-desc">
          Tu as un projet de site web ou de logiciel ? Discutons-en !<br />
          Tu peux aussi nous écrire sur <a href="https://www.instagram.com/bewezy/" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a> ou <a href="https://www.tiktok.com/@bewezy8" target="_blank" rel="noopener noreferrer" className="contact-link">TikTok</a>.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ton nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ton e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Décris ton projet ou pose-nous ta question"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button type="submit" className="contact-btn" disabled={sending}>
            {sending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        {success && <div className="contact-success">✅ Merci ! Ton message a bien été envoyé.</div>}
        {error && <div className="contact-error">❌ Oups, une erreur est survenue. Essaie à nouveau !</div>}
        <div className="contact-info">
          Ou écris-nous sur : <br />
          <b>bewozi@hotmail.com</b>
        </div>
      </div>
    </div>
  );
}
