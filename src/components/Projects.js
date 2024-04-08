import React from 'react';
import '../styles/Projects.css';
import Projectcard from '../helpers/Projectcard';
import { Languages, Databases, Frameworks, Clouds, Others, projects,certificates } from '../helpers/Data';
import { Zoom, Fade } from "react-awesome-reveal";

function Projects() {

  return (
    <div id="projects" className='projects'>
      <Fade direction='up' triggerOnce>
      <h1 className='title'>
        Projects<span className='dot'>.</span>
      </h1>
      </Fade>
      <div className="project-section">
        <Zoom triggerOnce>
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
        </Zoom>
      </div>
    </div>
  );
}

export default Projects;
