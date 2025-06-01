import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing messages from localStorage
    const existingMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    // Add the new message
    const updatedMessages = [...existingMessages, formData];

    // Save back to localStorage
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

    // Clear the form
    setFormData({ name: "", email: "", message: "" });

    alert("Message saved successfully!");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feedback, or concerns, feel free to reach out
        to us!
      </p>

      <div className="contact-details">
        <h2>📍 Address</h2>
        <p>
          Mini Mart Pvt. Ltd.
          <br />
          Main Street, Butavadar, Gujarat, India
        </p>

        <h2>📞 Phone</h2>
        <p>+91 63524 81426</p>

        <h2>📧 Email</h2>
        <p>aryankaramur@gmail.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send us a message</h2>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
