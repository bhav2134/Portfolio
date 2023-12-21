import React from 'react';
import './Projectcard.css';

const Projectcard = ({ title, description, imageSrc, url, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(url);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <div className='project-card'>
        <img src={imageSrc} alt={title} />
        <h2 className='project-title'>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Projectcard;
