import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/img/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          {/* <div className="logo">
            <img src={logo} alt="Valam Logo" />
          </div> */}

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact-us</li>
          </ul>

          <div className={`auth ${menuOpen ? "open" : ""}`}>
            <button className="signin">Sign-In</button>
            <button className="signup">Sign-Up</button>
          </div>

          <div
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
