import React, { useState } from "react";
import { Link } from "react-scroll";

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
      <div className={`menu ${menuOpen ? 'close' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`ul ${menuOpen ? 'close' : ''}`}>
        <li>
          <Link to="Home" className='logo' smooth={true} duration={100} onClick={closeMenu}>
            BA
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={100} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" className="connect-link" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
