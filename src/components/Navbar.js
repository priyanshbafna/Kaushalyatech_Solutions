import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <li className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/kaushalyatech_solutions_pvt_ltd_transparent.png`} alt="Kaushalyatech Solutions Logo" className="logo" />
        </li>
        <li className="elem"><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
        <li className="elem"><a href="#about" onClick={toggleMobileMenu}>About</a></li>
        <li className="elem"><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
        <li className="elem"><a href="#portfolio" onClick={toggleMobileMenu}>Portfolio</a></li>
        <li className="elem"><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
