import './Projects.css'
import Back from '../Back/Back.js';
import React from 'react';

const Projects = () => {
    return (
        <div className='project'>
        <Back/>
        <h2 className='title-project'>Projects </h2>
        <div className="main-container-project">
            <div className='project-item'></div>
            <div className='project-item'></div>
            <div className='project-item'></div>
            <div className='project-item'></div>
            <div className='project-item'></div>
            <div className='project-item'></div>
        </div>
      </div>
    );
  };
  
  export default Projects;