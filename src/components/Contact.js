import React, { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/Contact.css';
import { Fade, Zoom } from 'react-awesome-reveal';

function Contact() {
  const formRef = useRef();

  const handleGithubClick = () => {
    window.open('https://github.com/bhav2134', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/bhavdeep-arora-747b52217/', '_blank');
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        e.target,
        process.env.REACT_APP_USER_KEY
      );

      toast.success('Message successfully sent!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send the message, please try again');
    }
  };

  return (
    <div id="contact" className="contact-me">
      <Zoom triggerOnce>
      <h1 className="letconnect">
        Let's Connect<span className='dot'>.</span>
      </h1>
      </Zoom>
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
      <Fade delay={200} triggerOnce>
      <h3 className='email'>
        or send a message to <br /> <span className="my-email">bhavdeepsa@gmail.com</span>
      </h3>
      </Fade>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea type="text" placeholder="Message" name="message" required></textarea>
        <input type="submit" className="flat-button" value="Send Message" />
      </form>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}

export default Contact;
