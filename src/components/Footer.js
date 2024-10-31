import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img className="logo2" src="img/bread-white.png" alt="Bread Logo" width="120px" />
        <p className="footer-company-name">Copyright &copy; 2024 Bread, Inc. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>123 Main St.</span> City, Country</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p><span>+123 456 7890</span> (Customer Service)</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><span>info@bread.com</span> (Email us)</p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Contact us on</span>
        </p>
        <div className="footer-icons">
          <img src="img/icons8-facebook-50.png" alt="Facebook" width="35px" />
          <img src="img/icons8-ig-50.png" alt="Instagram" width="35px" />
          <img src="img/icons8-youtube-50.png" alt="YouTube" width="35px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
