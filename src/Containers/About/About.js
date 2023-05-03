import './About.css'
import profile from '../../images/profilephoto.jpg'
import React from 'react';

const About = () => {
    return (
      <div className='main-about'>
        <h2 className='title-about'>Hello, I'm Ben Porter, I am based in Edinburgh and recently completed CodeClan's Software Developer course</h2>
        <img className='about-img' alt="Profile" src={profile}/>
        <p className='description-about'>
          I've always been someone who loves a challenge, so when I realized that business just wasn't doing it for me, I decided to take the leap into software development. This is when I discovered CodeClan's 16-week Professional Software Development course, which opened up the wonders of Software development.
          <br></br>
          The satisfaction of building applications from conception to completion had me instantly hooked. I pushed myself to learn as much as I could during my time at CodeClan, and now I'm ready to take on new challenges as a software developer.
          <br></br>
          I know that my background in business gives me a unique perspective and set of skills that can add value to any team. I'm excited to collaborate with innovative and dynamic groups of people and see where this path takes me.
        </p>
      </div>
    );
  };
  
  export default About;