import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Home.css';
import { FaArrowRight } from "react-icons/fa";
import ProfilePic from '../assets/ProfilePic.jpg';

function Home() {
  return (
    <div id="Home" className='home'>
        <img src={ProfilePic} alt='Profile' className='profile-image' />
        <h1 className='text'>Hi, I'm <span className='name-color'>Bhavdeep Arora</span>.</h1> 
        <h1 className='intro'>Nice to meet you.<br /> Here, you can check out what I'm working on. </h1>
    </div>
  )
}

export default Home