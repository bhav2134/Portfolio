import React from 'react';
import '../styles/Projects.css';
import Projectcard from '../helpers/Projectcard';
import { Languages, Databases, Frameworks, Clouds, Others, projects,certificates } from '../helpers/Data';
import { Zoom } from "react-awesome-reveal";

function Projects() {
  const handleclick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="projects" className='projects'>
      <Zoom triggerOnce>
      <h1 className='title'>
        Projects<span className='dot'>.</span>
      </h1>
      </Zoom>
      <div className="project-section">
        <Zoom cascade triggerOnce>
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
        </Zoom>
      </div>
    </div>
  );
}

export default Projects;
