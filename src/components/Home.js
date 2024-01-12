import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Home.css';
import ProfilePic from '../assets/ProfilePic.jpg';
import { Zoom } from "react-awesome-reveal";

function Home() {
  return (
    <div id="Home" className='home'>
      <Zoom cascade triggerOnce duration={500}>
      <ul className='navbar-home'>
        <li>
          <Link to="Home" className='logo' smooth={true} duration={100}>
            BA
          </Link>          
        </li>
        <li>
          <Link to="about" smooth={true} offset={-75} duration={100}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-75}  duration={100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-75}  duration={100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="certifications" spy={true} smooth={true} offset={-75} duration={100}>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" className="connect-link" spy={true} smooth={true}  offset={-75} duration={100}>
            Contact Me
          </Link>
        </li>
      </ul>
      </Zoom>
        <img src={ProfilePic} alt='Profile' className='profile-image' />
        <h1 className='text'>
          Hi, I'm  <span className='name-color'>Bhavdeep Arora</span>.
        </h1> 
        <h1 className='intro'>
          Nice to meet you.
          <br /> 
          Here, you can check out what I'm working on. 
        </h1>
    </div>
  )
}

export default Home