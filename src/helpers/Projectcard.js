import React from 'react';
import './Projectcard.css';

const Projectcard = ({ title, description, imageSrc, url,tools, onClick, backgroundcolor}) => {
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
      <div className='project-card' style={cardStyle}>
        <img src={imageSrc} alt={title} />
        <h2 className='project-title'>{title}</h2>
        <h3 className='description'>{description}</h3>
        <h3 className='tools'>{tools}</h3>
      </div>
    </a>
  );
};

export default Projectcard;
