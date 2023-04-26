import React from 'react';
import travelApp from '../../images/travelapp.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className="main-container-projects">
          <div className='project-item'>
            <img className='project-photo' src={travelApp} alt='Travel app Project'/>
            <section>
                <h3 className='project-title'>Travel App</h3>
                <p>
                  Travel app project blah blah 
                </p>
            </section>
            <p>
              tecnologies used 
            </p>
          </div>
          <div className='project-item'>
            <img className='project-photo' src={travelApp} alt='Travel app Project'/>
            <section>
                <h3  className='project-title'>Travel App</h3>
                <p>
                  Travel app project blah blah 
                </p>
            </section>
            <p>
              tecnologies used 
            </p>
          </div>
          <div className='project-item'>
            <img className='project-photo' src={travelApp} alt='Travel app Project'/>
            <section>
                <h3  className='project-title'>Travel App</h3>
                <p>
                  Travel app project blah blah 
                </p>
            </section>
            <p>
              tecnologies used 
            </p>
          </div>
          <div className='project-item'>
              <img className='project-photo' src={travelApp} alt='Travel app Project'/>
              <section>
                  <h3 className='project-title'>Travel App</h3>
                  <p>
                    Travel app project blah blah 
                  </p>
              </section>
              <p>
                tecnologies used 
              </p>
          </div>
      </div>
    );
  };
  
  export default Projects;