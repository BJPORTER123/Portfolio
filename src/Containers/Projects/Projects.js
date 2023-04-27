import React from 'react';
import travelApp from '../../images/travelapp.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className="main-container-projects">
          <div className='project-item'>
            <img className='project-photo' src={travelApp} alt='Travel app Project'/>
          <div className='project-description'>
            <h3 className='project-title'>Travel App</h3>
            <p className='contains-description'>
              Travel app project blah blah 
            </p>  
          </div>
            <div className='contains-tech'>
              tecnologies used 
            </div>
          </div>
          <div className='project-item'>
            <img className='project-photo' src={travelApp} alt='Travel app Project'/>
          <div className='project-description'>
            <h3 className='project-title'>Travel App</h3>
            <p className='contains-description'>
              Travel app project blah blah 
            </p>  
          </div>
            <div className='contains-tech'>
              tecnologies used 
            </div>
          </div>
      </div>
    );
  };
  
  export default Projects;