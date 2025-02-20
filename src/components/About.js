import React from 'react';
import '../styles/About.css';
import { Fade } from "react-awesome-reveal";


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
      <Fade triggerOnce direction='up' duration={1200}>
        <h2 className='title'>About<span className='dot'>.</span></h2>
        <p className='interests'>
        Hey there! I'm a computer science enthusiast currently studying at 
        <span className='uni'> Toronto Metropolitan University (Formerly known as Ryerson Univeristy) </span>, focused on mastering full-stack development with a specialization in <span className='career-choices'> Artificial Intelligence and Data Engineering</span>. I love exploring how emerging technologies can solve real-world problems and continuously challenge myself with new projects.
        </p>
        <div className='resume-button'>
          <button onClick={handleDownloadResume} className='resume' title='Download resume'> resume </button>
        </div>
      </Fade>
    </div>
  )
}

export default About