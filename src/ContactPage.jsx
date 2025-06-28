import React, { useState } from "react";
import "./ContactPage.css"; // Tu crées un style sympa jaune & blanc

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1>Contactez Webicy</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Expliquez votre projet..." required />
          <button type="submit">Envoyer</button>
        </form>
        {sent && <div className="contact-success">Merci ! Nous vous répondrons rapidement.</div>}
        <div style={{ marginTop: "2rem" }}>
          Ou écrivez-nous directement à <a href="mailto:contact@webicy.ch">contact@webicy.ch</a>
        </div>
      </div>
    </div>
  );
}
