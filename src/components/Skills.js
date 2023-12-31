import React from 'react';
import '../styles/Skills.css';
import Skillscard from '../helpers/Skillscard';
import { Languages,Databses,Frameworks,clouds,others, projects,certificates } from '../helpers/Data';

function Skills() {
  return (
    <div id="skills" className='skills'>
      <h1 className='title'>Featured Skills</h1>
      <h2>Languages</h2>
        <div className="skills-section">
          {Languages.map((skills, index) => (
          <Skillscard key={index} {...skills} />
        ))}
        </div>
        <h2>Databses</h2>
        <div className="database-section">
          {Databses.map((skills, index) => (
          <Skillscard key={index} {...skills} />
        ))}
        </div>
        <h2>Frameworks</h2>
        <div className="database-section">
          {Frameworks.map((skills, index) => (
          <Skillscard key={index} {...skills} />
        ))}
        </div>
        <h2>Clouds</h2>
        <div className="database-section">
          {clouds.map((skills, index) => (
          <Skillscard key={index} {...skills} />
        ))}
        </div>
        <h2>Others</h2>
        <div className="database-section">
          {others.map((skills, index) => (
          <Skillscard key={index} {...skills} />
        ))}
        </div>
    </div>

    
  )
}

export default Skills