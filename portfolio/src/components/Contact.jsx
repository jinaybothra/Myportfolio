// File: components/Contact.jsx
import React from "react";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p>If you'd like to reach out, feel free to contact me through the following:</p>
      <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
        <li><strong>📞 Mobile:</strong> +91 9899911291</li>
        <li><strong>📧 Email:</strong> jinaydeep2001@gmail.com</li>
        <li><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/jinay-bothra-511b352b8/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jinay-bothra</a></li>
        <li><strong>💻 GitHub:</strong> <a href="https://github.com/jinaybothra" target="_blank" rel="noopener noreferrer">github.com/jinaybothra</a></li>
      </ul>
    </section>
  );
}
