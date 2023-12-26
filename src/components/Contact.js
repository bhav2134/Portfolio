import React, { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// Contact component
function Contact() {
  const formRef = useRef();

  const handleGithubClick = () => {
    window.open('https://github.com/bhav2134', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/bhavdeep-arora-747b52217/', '_blank');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        e.target,
        process.env.REACT_APP_USER_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!');
          formRef.current.reset();
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div id="contact" className="contact-me">
      <h1 className="letconnect">Let's Connect</h1>
      <a
        href="https://github.com/bhav2134"
        target="_blank"
        rel="noopener noreferrer"
        className="giticon"
        onClick={handleGithubClick}
      >
        <BsGithub />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/bhavdeep-arora-747b52217/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedicon"
        onClick={handleLinkedinClick}
      >
        <GrLinkedin />
        <span>LinkedIn</span>
      </a>
      <h3>
        or send a message to <br /> <span className="my-email">bhavdeepsa@gmail.com</span>
      </h3>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea type="text" placeholder="Message" name="message" required></textarea>
        <input type="submit" className="flat-button" value="Send Message" />
      </form>
    </div>
  );
}

export default Contact;
