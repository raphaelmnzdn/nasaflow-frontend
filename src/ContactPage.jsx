import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_v254k2c";
const TEMPLATE_ID = "template_wg76i5p";
const PUBLIC_KEY = "rHYlus3TwvwhvTuXK";

export default function ContactPage() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Attention : les noms doivent être EXACTEMENT ceux de ton template !
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: values.name,
        email: values.email,
        message: values.message,
        // title: "Contact Bewezy", // active si tu as {{title}} dans le template
      },
      PUBLIC_KEY
    )
      .then(() => {
        setSent(true);
        setLoading(false);
        setValues({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        setError("Erreur lors de l'envoi du message.");
        console.error(err);
      });
  };

  if (sent) {
    return (
      <div className="contact-success">
        <h2>Merci !</h2>
        <p>Votre message a bien été envoyé. Nous reviendrons vers vous très vite.</p>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>
        <input
          name="name"
          placeholder="Votre nom"
          value={values.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Votre email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={values.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        {error && <div className="contact-error">{error}</div>}
      </form>
    </div>
  );
}
