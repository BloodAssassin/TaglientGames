import React, { useState } from "react";
import "../css/contact.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setMessage(textarea.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
    // Reset textarea height
    const textarea = document.querySelector(".message-input");
    textarea.style.height = "100px";
  };

  return (
    <form id="contact" className="contact" onSubmit={handleSubmit}>
      <div>
        <h1>Contact Us!</h1>
        <input
          type="text"
          placeholder="Name"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="message-input"
          value={message}
          onInput={handleInput}
        ></textarea>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
