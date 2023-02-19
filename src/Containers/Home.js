import NavBar from "./NavBar";
import Footer from "./Footer";
import '../css/Home.css'

const Home = () => {

    const handleZoomClick = (event) => {
        event.preventDefault();
        const zoomedInDiv = document.getElementById("zoomed-in-div");
        zoomedInDiv.style.transition = "transform 0.5s ease-in-out";
        zoomedInDiv.style.transform = "scale(20)";
        zoomedInDiv.style.transform= "rotate(360deg)"
    
        setTimeout(() => {
          window.location.href = event.target.href;
        }, 500);
      }
  

    return (  
    <div className="home-page-container">
        <NavBar handleZoomClick={handleZoomClick}/>
        <header className="title-conatiner">
        <h2>This is home</h2>
        </header>
        <div id="zoomed-in-div"></div>
    <Footer />
    </div>
    );
}
 
export default Home;


