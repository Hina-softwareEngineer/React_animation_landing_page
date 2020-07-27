import React from "react";
import logo from "../../image/logo.png";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="Logo of Website" />
        <label>Hope</label>
      </div>

      <nav>
        <li>Services</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Blog</li>
        <button>Get in Touch</button>
      </nav>
    </div>
  );
};

export default Navbar;
