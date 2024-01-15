import React from 'react';
import './Certificatescard.css';

function Certificatescard({ title, imageSrc, description, url, onClick, backgroundcolor}) {

  const handleClick = () => {
    if (onClick) {
      onClick(url);
    }
  };

  const cardStyle = {
    background: backgroundcolor
  }

  return (
    <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    onClick={handleClick}
  >
    <div className='certificate' style={cardStyle}>
        <img src={imageSrc} alt={title} />
        <h3 className='certificate-name'>{title}</h3>  
        <p className='certificate-description'>{description}</p>
    </div>
    </a>
  )
}

export default Certificatescard;