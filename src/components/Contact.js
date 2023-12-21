// Contact.js
import React from 'react';
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import '../styles/Contact.css';

function Contact() {

  const handleGithubClick = () => {
    window.open('https://github.com/bhav2134', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/bhavdeep-arora-747b52217/', '_blank');
  };

  return (
    <div id="contact" className='contact-me'>
      <h1 className='letconnect'>Let's Connect</h1>
      <a href="https://github.com/bhav2134" target="_blank" rel="noopener noreferrer" className='giticon' onClick={handleGithubClick}>
        <BsGithub />
        <span>GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/bhavdeep-arora-747b52217/" target="_blank" rel="noopener noreferrer" className='linkedicon' onClick={handleLinkedinClick}>
        <GrLinkedin />
        <span>LinkedIn</span>
      </a>
      <h3> or email me at <br /> <span className='email'>bhavdeepsa@gmail.com</span></h3>
    </div>
  )
}

export default Contact;
