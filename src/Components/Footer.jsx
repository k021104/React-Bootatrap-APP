import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          {/* Logo & About */}
          <Col lg={3} md={6} className="mb-4">
            <h2 className="footer-logo">iSTUDIO</h2>
            <p className="footer-text">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore.
            </p>
          </Col>

          {/* Get in touch */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Get In Touch</h5>
            <p><FaMapMarkerAlt /> 123 Street, New York, USA</p>
            <p><FaPhoneAlt /> +012 345 67890</p>
            <p><FaEnvelope /> info@example.com</p>

            <div className="social-icons">
              <FaTwitter />
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </Col>

          {/* Popular Links */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Popular Link</h5>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Career</li>
            </ul>
          </Col>

          {/* Our Services */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li>Interior Design</li>
              <li>Project Planning</li>
              <li>Renovation</li>
              <li>Implement</li>
              <li>Landscape Design</li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-line" />

        {/* Bottom */}
        <Row className="py-3 align-items-center">
          <Col md={6}>
            <p className="copyright">
              © Your Site Name, All Right Reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <span className="footer-bottom-links">Home</span>
            <span className="footer-bottom-links">Cookies</span>
            <span className="footer-bottom-links">Help</span>
            <span className="footer-bottom-links">FAQs</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
