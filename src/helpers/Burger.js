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
    <nav className="navbar-burger">
      <div className={`menu ${menuOpen ? 'close' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-burger ${menuOpen ? 'close' : ''}`}>
        <li>
          <Link to="Home" className='logo' smooth={true} duration={100} onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={100} onClick={closeMenu}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            CERTIFICATES
          </Link>
        </li>
        <li>
          <Link to="contact" className="connect-link" spy={true} smooth={true} duration={100} onClick={closeMenu}>
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Burger;
