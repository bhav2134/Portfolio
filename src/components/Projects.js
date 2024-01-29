import React from 'react';
import '../styles/Projects.css';
import Projectcard from '../helpers/Projectcard';
import { Languages, Databases, Frameworks, Clouds, Others, projects,certificates } from '../helpers/Data';
import { Zoom, Fade } from "react-awesome-reveal";

function Projects() {

  return (
    <div id="projects" className='projects'>
      <Zoom triggerOnce>
      <h1 className='title'>
        Projects<span className='dot'>.</span>
      </h1>
      </Zoom>
      <div className="project-section">
        <Fade cascade triggerOnce>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Projectcard {...project} />
          </a>
        ))}
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
