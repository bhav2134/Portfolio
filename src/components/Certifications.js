import React from 'react';
import '../styles/Certifications.css';
import Certificatescard from '../helpers/Certificatescard';
import { Languages,Databses,Frameworks,clouds,others,projects,certificates } from '../helpers/Data';
import { Zoom, Fade } from "react-awesome-reveal";

function Certifications() {
  return (
    <div id="certifications" className='certifactions'>
      <Fade direction='up' triggerOnce>
      <h1 className='title'>
        Certificates<span className='dot'>.</span>
      </h1>
      </Fade>
        <div className="certificate-section">
          <Fade cascade triggerOnce>
          {certificates.map((certificate, index) => (
          <Certificatescard key={index} {...certificate} />
        ))}
        </Fade>
        </div>
    </div>
  )
}

export default Certifications