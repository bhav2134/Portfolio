import React from 'react';
import '../styles/Certifications.css';
import Certificatescard from '../helpers/Certificatescard';
import { Languages,Databses,Frameworks,clouds,others,projects,certificates } from '../helpers/Data';

function Certifications() {
  return (
    <div id="certifications" className='certifactions'>
      <h1 className='certificate-title'>
        Certifications<span className='dot'>.</span>
      </h1>
        <div className="certificate-section">
          {certificates.map((certificate, index) => (
          <Certificatescard key={index} {...certificate} />
        ))}
        </div>
    </div>
  )
}

export default Certifications