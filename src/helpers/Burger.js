import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Burger.css';

function Burger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-burger">
      <div className="menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="Home" className='logo' smooth={true} offset={-75} duration={100}>
            BA
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-75} duration={100}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-75} duration={100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-75} duration={100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} offset={-75} duration={100}>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" className="connect-link" spy={true} smooth={true} offset={-75} duration={100}>
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
