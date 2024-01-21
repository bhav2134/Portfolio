import Python from '../assets/python.png';
import java from '../assets/java.png';
import C from '../assets/C.png';
import html from '../assets/html.png';
import CSS from '../assets/CSS.png';
import javascript from '../assets/javascript.png';
import lisp from '../assets/Lisp.png';
import stocks from '../assets/stocks.png';
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
import CS50 from '../assets/CS50.png';
import freecodecamppython from '../assets/Freecodecampcertificate.png';

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
        title: 'Elixer',
        imageSrc: elixer,
    },
    {
        title: 'Haskell',
        imageSrc: haskell,
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
        title: 'Firebase',
        imageSrc: firebase,
    },
    {
        title: 'MongoDB',
        imageSrc: MongoDB,
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
  ];

  const clouds = [
    {
        title: 'AWS',
        imageSrc: aws,
    },
    {
        title: 'Azure',
        imageSrc: azure,
    },
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
  ];

  const certificates = [
    {
      title: 'Harvard CS50: Introduction to programming',
      imageSrc: CS50,
      description: 'Languages & Tools Learned: C, Python, SQL, HTML, CSS, JavaScript, Flask (Python web framework), Scratch, Git',
      url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
      backgroundcolor: 'linear-gradient(343deg, rgba(255,175,189,1) 0%, rgba(255,195,160,1) 100%)',
    },
    {
      title: 'freeCodeCamp: Scientific Computing with python',
      imageSrc: freecodecamppython,
      description: 'Languages & Tools Learned: Python, NumPy, Pandas, Matplotlib, SciPy, SymPy, Jupyter Notebooks',
      url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
      backgroundcolor: 'linear-gradient(to right, #6ea3fc, #93c5fd)',    
    },
  ]

  export { Languages,Databses,Frameworks,clouds,others, projects, certificates };
