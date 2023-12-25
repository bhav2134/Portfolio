import React from 'react';
import './Certificatescard.css';

function Certificatescard({ title, imageSrc, description }) {
  return (
    <div className='certificate'>
        <img src={imageSrc} alt={title} />
        <h3 className='certificate-name'>{title}</h3>  
        <p className='certificate-description'>{description}</p>
    </div>
  )
}

export default Certificatescard