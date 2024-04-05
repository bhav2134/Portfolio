import Python from '../assets/python.png';
import java from '../assets/java.png';
import C from '../assets/C.png';
import html from '../assets/html.png';
import CSS from '../assets/CSS.png';
import javascript from '../assets/javascript.png';
import lisp from '../assets/Lisp.png';
import stocks from '../assets/Stocks.jpeg';
import calandhobbes from '../assets/calandhobbes.jpg';
import mySQL from '../assets/MySQL.png';
import nosql from '../assets/nosql.png';
import firebase from '../assets/Firebase.png';
import MongoDB from '../assets/mangoDB.png';
import react from '../assets/React.png';
import angular from '../assets/Angular.png';
import aws from '../assets/AWS.png';
import azure from '../assets/Azure.png';
import flask from '../assets/Flask.png';
import elixer from '../assets/Elixer.png';
import haskell from '../assets/Haskell.png';
import nodejs from '../assets/nodejs.png';
import vue from '../assets/Vue.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import rust from '../assets/rust.png';
import typescript from '../assets/typescript.png';
import harvardlogo from '../assets/harvardlogo.png';
import freecodecamplogo from '../assets/freecodecamp.png';
import bugreport from '../assets/bug-report.png';
import smalltalk from '../assets/smalltalk.jpg';
import sqlite from '../assets/sqlite.png';
import express from '../assets/express.png';
import django from '../assets/Django.png';
import go from '../assets/go.png';

const Languages = [
    {
      title: 'Java',
      imageSrc: java,
    },
    {
      title: 'Python',
      imageSrc: Python
    },
    {
      title: 'C',
      imageSrc: C
    },
    {
      title: 'HTML',
      imageSrc: html
    },
    {
      title: 'CSS',
      imageSrc: CSS
    },
    {
      title: 'Javascript',
      imageSrc: javascript
    },
    {
      title: 'Typescript',
      imageSrc: typescript,
    },
    {
      title: 'Lisp',
      imageSrc: lisp
    },
    {
      title: 'Smalltalk',
      imageSrc: smalltalk
    },
    {
        title: 'Elixer',
        imageSrc: elixer,
    },
    {
        title: 'Haskell',
        imageSrc: haskell,
    },
    {
      title: 'Go',
      imageSrc: go,
    },
    {
      title: 'Rust',
      imageSrc: rust,
    },
  ];

  const Databses = [
    {
      title: 'mySQL',
      imageSrc: mySQL,
    },
    {
        title: 'noSQL',
        imageSrc: nosql,
    },
    {
      title: 'SQLite',
      imageSrc: sqlite,
    },
    {
        title: 'Firebase',
        imageSrc: firebase,
    },
    {
        title: 'MongoDB',
        imageSrc: MongoDB,
    },
    {
      title: 'AWS',
      imageSrc: aws,
    },
    {
      title: 'Azure',
      imageSrc: azure,
    },
    
  ];

  const Frameworks = [
    { 
        title: 'React',
        imageSrc: react,
    },
    { 
        title: 'Angular',
        imageSrc: angular,
    },
    { 
        title: 'Vue',
        imageSrc: vue,
    },
    {
        title: 'Flask',
        imageSrc: flask,
    },
    {
      title: 'Django',
      imageSrc: django,
    },
    {
      title: 'express',
      imageSrc: express,
    },
  ];

  const clouds = [
  ];
  const others = [
    {
        title: 'NodeJS',
        imageSrc: nodejs,
    },
    {
        title: 'Git',
        imageSrc: git,
    },
    {
        title: 'Github',
        imageSrc: github,
    }
  ]

  const projects = [
    {
      title: 'Stockify',
      description: 'Simplifying Large Stock Data for Easier Trading Information',
      imageSrc: stocks,
      url: 'https://github.com/bhav2134/Stock-Analysis',
      tools: 'Python, SQL, Excel, Replit',
      backgroundcolor: 'linear-gradient(343deg, rgba(34,193,195,1) 0%, rgba(241,251,34,1) 100%)',
    },
    {
      title: 'Calvin & Hobbes Quoter',
      description: 'Creating a RESTful API to provide random quotes from Calvin & Hobbes comic',
      imageSrc: calandhobbes,
      url: 'https://github.com/bhav2134/calandhobbes-quoter',
      tools: 'Python, Flask',
      backgroundcolor: 'linear-gradient(109.7deg, rgb(202, 50, 50) 5.7%, rgb(252, 195, 12) 92.4%)',
    },
    {
      title: 'Bug Report App',
      description: 'A platform for users to submit and track bug reports for software applications',
      imageSrc: bugreport,
      url: 'https://github.com/bhav2134/bug-report',
      tools: 'Python, Flask, SQLite, Javascript, HTML, CSS',
      backgroundcolor: 'linear-gradient(to right, #87CEEB, #00BFFF)',
    },
  ];

  const certificates = [
    {
      title: 'Harvard CS50: Introduction to programming',
      imageSrc: harvardlogo,
      description: 'Languages & Tools Learned: C, Python, SQL, HTML, CSS, JavaScript, Flask (Python web framework), Scratch, Git',
      url: 'https://certificates.cs50.io/5837b167-1735-40e8-8010-3e4edeedab8d.pdf?size=letter',
      backgroundcolor: 'linear-gradient(343deg, rgba(255,175,189,1) 0%, rgba(255,195,160,1) 100%)',
    },
    {
      title: 'freeCodeCamp: Scientific Computing with python',
      imageSrc: freecodecamplogo,
      description: 'Languages & Tools Learned: Python, NumPy, Pandas, Matplotlib, SciPy, SymPy, Jupyter Notebooks',
      url: 'https://www.freecodecamp.org/certification/fcc37f3aa4a-4ffd-44be-b44f-55b59d1db431/scientific-computing-with-python-v7',
      backgroundcolor: 'linear-gradient(to right, #6ea3fc, #93c5fd)',    
    },
  ]

  export { Languages,Databses,Frameworks,clouds,others, projects, certificates };
