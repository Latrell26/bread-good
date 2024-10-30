import React from "react";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <img className="logo" src="/img/bread-black.png" width="120px" alt="Logo" />
      <ul>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#donation" className="nav-link">Donation</a>
        </li>
        <li className="nav-item">
          <a href="#news" className="nav-link">News</a>
        </li>
        <li className="nav-item">
          <a href="faq.html" className="nav-link">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
