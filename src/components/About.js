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
        Hey there! I'm a computer science amateur at 
        <span className='uni'> Toronto Metropolitan University</span>, 
        on a wild quest to become the ultimate full-stack maestro and spend my days behind a computer screen.
        When I'm not tangled up in code, you'll find me lifting weights,
        strumming my guitar, struggling to breath during hikes, or diving headfirst into a good book. 
        </p>

        <p className='thrive'>
        My coding passion lies in the fields of Artificial Intelligence, Frontend Engineering, and Data Engineering. 
        I've got big dreams, and one of them involves unleashing a monstrous open-source project into the world. 
        Think of it as my love letter to the tech universe, 
        complete with lots of code that would need to be polished.
        <p></p>

        I believe in the magic of collaboration and think open source is where it's at. 
        So, get ready for a rollercoaster ride of innovation and creativity—I'm cooking up something special 
        for the entire developer community! More exciting things coming your way soon!
        </p>
        <div>
          <button onClick={handleDownloadResume} className='resume'> Resume <span className='arrow'>🏹</span></button>
        </div>
      </Zoom>
    </div>
  )
}

export default About