import NavBar from "./NavBar";
import Footer from "./Footer";
import "../css/Home.css";
import hole from "../images/black.png";
import desk from "../images/desk.png";
import Particle from "../Components/Particle";
import earth from "../images/earth.png"

const Home = () => {
  const handleZoomClick = (event) => {
    event.preventDefault();
    const zoomedInDiv = document.getElementById("zoomed-in-div");
    zoomedInDiv.style.transition = "transform 0.5s ease-in-out";
    zoomedInDiv.style.transform = "scale(20) rotate(360deg)";
    // zoomedInDiv.style.opacity = 1;
    // const fadeInterval = setInterval(() => {
    //   zoomedInDiv.style.opacity -= 0.001;
    // }, 30);

    setTimeout(() => {
      // clearInterval(fadeInterval);
      // zoomedInDiv.style.opacity = 0;
      window.location.href = event.target.href;
    }, 300);
  };

  return (
    <div className="home-page-container">
      <Particle id="tsparticles" />
      <NavBar handleZoomClick={handleZoomClick} />
      <div className="intro-container">
        <h2 className="writing"></h2>
      </div>
      <div className="image-container">
        <img id="desk-image" src={desk} alt="desk" height="500" width="500" />
        <img id="zoomed-in-div" src={hole} alt="black-hole" height="100" width="100" />
        <img id="earth" src={earth} alt="earth" height="800" width="800" />

      </div>
      <Footer />
    </div>
  );
};

export default Home;
