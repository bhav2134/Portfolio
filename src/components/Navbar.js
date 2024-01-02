import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Navbar.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  

  return (
    <nav className='nav'>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
        className='site-title'
      >
        b. 
      </Link>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <Link to="about" smooth={true} offset={-70} duration={100} onClick={closeMenu}>
          About
        </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={100} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true}  offset={-70} duration={100} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true}  offset={-70} duration={100} onClick={closeMenu}>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-10} duration={100} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
