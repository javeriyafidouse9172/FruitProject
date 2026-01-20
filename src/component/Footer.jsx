
import React from "react";
import "./Footer.css";   // ✅ Footer CSS import added

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>📞 +91 8482841055</p>
        <p>📧 javeriyafirdous10725@gmail.com</p>
      </div>

      <div className="footer-section">
        <h3>Address</h3>
        <p>Grocery Store</p>
        <p>Main Market Road, Mumbai</p>
        <p>Maharashtra, India</p>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <p>📘 Facebook</p>
        <p>📸 Instagram</p>
        <p>🐦 Twitter</p>
      </div>

      <p className="footer-bottom">
        © 2025 Grocery Store | All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;
