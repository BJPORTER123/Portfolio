import '../css/Projects.css'
import Back from './Back';

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