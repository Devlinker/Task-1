import "./footer.scss";
import logo from "../../assets/img/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__top container">
          <div className="footer__logo">
            <img src={logo} alt="Valam logo" />
            <span>stay strong</span>
          </div>

          <nav className="footer__nav">
            <a href="/">Home</a>
            <a href="/faqs">FAQs</a>
            <a href="/safety">Safety</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact Us</a>
          </nav>

          <div className="footer__socials">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaLinkedinIn />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
          
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__links">
              <a>Privacy</a>
              <span>|</span>
              <a>Terms & Conditions</a>
            </div>
            <p>©2024 Valam</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
