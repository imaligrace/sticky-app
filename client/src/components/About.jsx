import React from 'react';import aboutImage from '../assets/howto.png';
import { Link } from 'react-router-dom';

const About = () => {

  setTimeout(() => {
    window.location.href = '/';
  }, 10000);

  return (
    <div className='about-page'>
      <h1>How to Use Stic'K App</h1>
      <img
        src={aboutImage}
        alt='How to Use Stic-K App'
        className='about-image'
      />

      <Link to='/'>Back to Main Page</Link>
    </div>
  );
};

export default About;
