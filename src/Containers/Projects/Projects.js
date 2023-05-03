import React from 'react';
import travelApp from '../../images/travelapp.png'
import robit from '../../images/Robit.png'
import triviaapp from '../../images/triviaapp.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className="main-container-projects">
          <div className='project-item'>
              <img className='project-photo' src={travelApp} alt='Travel app Project'/>
            <div className='project-description'>
              <h3 className='project-title'>Travel App</h3>
              <p className='contains-description'>
                A Travel App Built in ReactJS for users to bucketlist countries they would like to visit. 
              </p>  
            </div>
              <div className='contains-tech'>
                Tecnologies used: Javascript, React, Express.JS, MongoDB
              </div>
          </div>
          <div className='project-item'>
              <img className='project-photo' src={robit} alt='Travel app Project'/>
            <div className='project-description'>
              <h3 className='project-title'>Robit</h3>
              <p className='contains-description'>
                A platform game built in Unity Engine and my first Unity Project. 
              </p>  
            </div>
              <div className='contains-tech'>
                 Technologies Used: Unity, C#, Adobe Photoshop
              </div>
          </div>
          <div className='project-item'>
              <img className='project-photo' src={triviaapp} alt='Travel app Project'/>
            <div className='project-description'>
              <h3 className='project-title'>Trivia App</h3>
              <p className='contains-description'>
                A simpslistic Trivia App made using a trivia API and react.  
              </p>  
            </div>
              <div className='contains-tech'>
                Technologies used: Javascript, React
              </div>
          </div>
      </div>
    );
  };
  
  export default Projects;