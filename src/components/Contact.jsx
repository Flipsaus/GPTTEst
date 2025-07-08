import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Let's Connect</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@example.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="How can I help?" />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
