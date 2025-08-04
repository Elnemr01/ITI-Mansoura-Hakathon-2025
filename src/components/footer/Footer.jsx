import React from "react";
import "./footer.css";
import logo from "../../assets/assets_frontend/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src={logo} alt="Prescripto Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <p>Pfizer</p>
          <p>Johnson & Johnson</p>
          <p>Roche</p>
          <p>Novartis</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Keep in touch</h3>
          <p>+0-000-000-000</p>
          <p>greatstackdev@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">© Prescripto All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
