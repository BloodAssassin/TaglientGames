import React, { useState } from "react";
import "../css/contact.css";

export default function Footer() {
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  // Expand textarea during input
  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setMessage(textarea.value);
  };

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (!validateEmail(email) && email.length > 0) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // Submit contact form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(user_email)) {
      setEmailError("Invalid email format");
      return;
    }

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");

    // Reset textarea height
    const textarea = document.querySelector(".message-input");
    textarea.style.height = "100px";

    // Send the message to backend
    try {
      const response = await fetch("https://taglientgames.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, user_email, user_message }),
      });
      if (response.ok) {
        alert("Message sent successfully");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form id="contact" className="contact" onSubmit={handleSubmit}>
      <div className="contact-content">
        <h1>Contact Us!</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            className="name-input"
            value={user_name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="email-input"
            value={user_email}
            onChange={handleEmailChange}
          />
        </div>
        <textarea
          placeholder="Message"
          className="message-input"
          value={user_message}
          onInput={handleInput}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <br />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
