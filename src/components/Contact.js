import React, { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/Contact.css';
import { Fade } from 'react-awesome-reveal';

function Contact() {
  const formRef = useRef();

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
      <Fade direction='down' triggerOnce>
      <h1 className="title">
        Let's Connect<span className='dot'>.</span>
      </h1>
      </Fade>
      <a
        href="https://github.com/bhav2134"
        target="_blank"
        rel="noopener noreferrer"
        className="giticon"
      >
        <BsGithub />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/bhavdeeparora/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedicon"
      >
        <GrLinkedin />
        <span>LinkedIn</span>
      </a>

      <Fade direction='up' delay={200} triggerOnce>
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
