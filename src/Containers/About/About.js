import './About.css'
import Back from '../Back/Back.js';
import React from 'react';

const About = () => {
    return (
      <div className='about'>
        <Back/>
        <h2 className='title-about'>About</h2>
        <div className="main-conatiner-about">
        </div>
      </div>
    );
  };
  
  export default About;