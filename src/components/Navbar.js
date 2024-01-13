import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import '../styles/Navbar.css';

function Navbar() {

  const [scrolling, setScrolling] = useState(false);

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
    <nav>
      <ul className={`navbar ${scrolling ? 'scrolling' : ''}`}>
        <li>
          <Link to="Home" className='logo' smooth={true} duration={100}>
            BA
          </Link>          
        </li>
        <li>
          <Link to="about" smooth={true} offset={-90}  duration={100} className="component">
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-120} duration={100} className="component">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-90}  duration={100} className="component">
            Projects
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} offset={-120} duration={100} className="component">
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" className="connect-link" spy={true} smooth={true} offset={-90}  duration={100}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar