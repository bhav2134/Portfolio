import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuDirection, setMenuDirection] = useState('');
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    const newDirection = menuOpen ? 'reverse' : 'open';
    setMenuDirection(newDirection);
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuDirection('reverse');
    setMenuOpen(false);
  };

  const handleScroll = () => {
    const offset = 150;
    if (window.scrollY > offset) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolling ? 'scrolling' : ''}`}>
      <Link to="home" smooth={true} offset={-70} duration={100} onClick={closeMenu} className="site-title">
        b.
      </Link>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`tab ${menuOpen ? menuDirection : ''}`}>
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
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={100} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} offset={-70} duration={100} onClick={closeMenu}>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={100} onClick={closeMenu}>
            Connect
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
