import NavBar from "./NavBar";
import Footer from "./Footer";
import '../css/Home.css'
import hole from '../images/black.png'
import desk from '../images/desk.png'

const Home = () => {

    const handleZoomClick = (event) => {
        event.preventDefault();
        const zoomedInDiv = document.getElementById("zoomed-in-div");
        zoomedInDiv.style.transition = "transform 0.5s ease-in-out";
        zoomedInDiv.style.transform = "scale(20) rotate(360deg)";
        zoomedInDiv.style.opacity = 1
        const fadeInterval = setInterval(()=>{
          zoomedInDiv.style.opacity -= 0.01
        },30)
    
        setTimeout(() => {
          clearInterval(fadeInterval);
          zoomedInDiv.style.opacity = 0
          window.location.href = event.target.href;
        }, 300);
      }
  

    return (  
    <div className="home-page-container">
        <NavBar handleZoomClick={handleZoomClick}/>
        <header className="title-conatiner">
        <h2>This is home</h2>
        </header>
        <div className="image-container">
          <img id ="desk-image" src={desk} alt='desk' height='500' width= '500'/>
          <img id="zoomed-in-div" src={hole} alt='black-hole' height="100" width="100"/>
        </div>
    <Footer />
    </div>
    );
}
 
export default Home;


