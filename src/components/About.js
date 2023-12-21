import React from 'react';
import '../styles/About.css';
import { Link, Element } from 'react-scroll/modules';

function About() {
  return (
    <div id="about" className='about'>
        <h2 className='header'>About Me</h2>
        <p className='interests'>I'm a computer science student at <span className='uni'> Toronto Metropolitan University</span>, aiming to become a 
          full-stack developer. Some of my other interests outside of my work are 
          Working out, playing the guitar, Hiking, Reading.</p>
        <p className='thrive'> My enthusiasm for programming centers around LLM software,
        quantitative finance, and video game development. My sights are set on publishing a large-scale open source project in the near future. </p>
    </div>
  )
}

export default About