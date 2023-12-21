import Python from '../assets/python.png';
import java from '../assets/java.png';
import C from '../assets/C.png';
import html from '../assets/html.png';
import CSS from '../assets/CSS.png';
import javascript from '../assets/javascript.png';
import lisp from '../assets/Lisp.png';
import stocks from '../assets/images.jpg';
import mySQL from '../assets/MySQL.png';
import nosql from '../assets/nosql.png';
import firebase from '../assets/Firebase.png';
import mangoDB from '../assets/mangoDB.png';
import dynamoDB from '../assets/DynamoDB.png';
import react from '../assets/React.png';
import angular from '../assets/Angular.png';
import aws from '../assets/AWS.png';
import azure from '../assets/Azure.png';
import flask from '../assets/Flask.png';
import django from '../assets/Django.png';
import elixer from '../assets/Elixer.png';
import haskell from '../assets/Haskell.png';
import nodejs from '../assets/nodejs.png';
import vue from '../assets/Vue.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import rust from '../assets/rust.png';
import typescript from '../assets/typescript.png';

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
        title: 'MangoDB',
        imageSrc: mangoDB,
    },
    {
        title: 'DynamoDB',
        imageSrc: dynamoDB,
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
      title: 'Stock Analysis',
      description: 'Algorithmic Trading',
      imageSrc: stocks,
      url: 'https://github.com/bhav2134/Stock-Analysis',
    },
  ];

  export { Languages,Databses,Frameworks,clouds,others, projects };
