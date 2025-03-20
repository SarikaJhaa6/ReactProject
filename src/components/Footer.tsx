import React from "react";
import "../styles/Footer.css";
import logo from "../images/Logocommunion.png";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Logo and About */}
        <div className="footer-left" data-aos="fade-up">
          <img src={logo} alt="Communion Logo" className="footer-logo" />
          <p className="footer-description">
            Discover the power of connection with Communion. Uniting diverse
            communities through spirituality and innovation, we foster
            inclusivity, collaboration, and social cohesion for a better world.
          </p>
          {/* Social Media Icons */}
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Middle Section - Company Links */}
        <div className="footer-center" data-aos="fade-up" data-aos-delay="200">
          <h3>Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About</a></li>
           
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-right" data-aos="fade-up" data-aos-delay="400">
          <h3>Contact</h3>
          <p>contact@communionhub.org</p>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()}. All rights reserved to{" "}
          <strong>Communion</strong>
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;
