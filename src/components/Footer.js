import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

function Footer() {

  /*
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/api/quotes/random');
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
    fetchRandomQuote();
  }, []);
  */

  return (
    <div className='footer'>
      <div className='footer-line'></div>
      <h3 className='textinfooter'>
        &copy; 2024 Bhavdeep Arora. All rights reserved
      </h3>
    </div>
  )
}

export default Footer