import React from 'react';
import '../styles/Projects.css';
import Projectcard from '../helpers/Projectcard';
import { Link, Element } from "react-scroll";
import { Languages, Databases, Frameworks, Clouds, Others, projects,certificates } from '../helpers/Data';

function Projects() {
  const handleclick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="projects" className='projects'>
      <h1 className='title'>Projects</h1>
      <div className="project-section">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleclick(project.url)}
          >
            <Projectcard {...project} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
