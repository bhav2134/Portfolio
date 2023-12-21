import React from 'react';
import './Skillscard.css';

const Skillscard = ({ title, imageSrc }) => {
  return (
    <div className='skills-card'>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>    

    </div>
  )
}

export default Skillscard;