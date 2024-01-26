import React from 'react';
import '../styles/About.css';
import { Zoom } from "react-awesome-reveal";


function About() {
  
  //const for downloaded the resume pdf file
  const handleDownloadResume = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/Bhavdeep_s_Resume.pdf';
  
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Bhavdeep_s_Resume.pdf';
  
    document.body.appendChild(downloadLink);
    downloadLink.click();
  
    document.body.removeChild(downloadLink);
  };
  
  

  return (
    <div id="about" className='about'>
      <Zoom triggerOnce>
        <h2 className='header'>About<span className='dot'>.</span></h2>
        <p className='interests'>
        Hey there! I'm a computer science enthusiast currently studying at 
        <span className='uni'> Toronto Metropolitan University</span>, focused on mastering full-stack development with a specialization in Artificial Intelligence, Frontend Engineering, and Data Engineering.
        Committed to leaving a lasting mark on the tech landscape, I'm currently crafting a groundbreaking open-source project—a testament to my dedication to innovation and collaboration within the developer community.
        </p>

        <p className='thrive'>
        Beyond coding, I love to lift weights, playing the guitar, go on challenging hikes, and reading a lot of fiction books. Join me on this exciting journey where technology and passion come together, shaping the future possibilities in our ever-changing tech world. Let's work together to redefine what's possible and push the boundaries of innovation.

        </p>
        <div>
          <button onClick={handleDownloadResume} className='resume'> Resume <span className='arrow'>🏹</span></button>
        </div>
      </Zoom>
    </div>
  )
}

export default About