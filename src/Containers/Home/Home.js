import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import TypingEffect from "../../Components/TypingEffect";
import Particle from "../../Components/Particles/Particle";
import hole from "../../images/hole.png";
import desk from "../../images/desk.png";
import earth from "../../images/earth.png"
import "./Home.css";


const Home = () => {
  const handleZoomClick = (event) => {
    event.preventDefault();
    const zoomedInDiv = document.getElementById("zoomed-in-div");
    zoomedInDiv.style.transition = "transform 0.5s ease-in-out";
    zoomedInDiv.style.transform = "scale(20) rotate(360deg)";
    zoomedInDiv.style.opacity = 1;
    const fadeInterval = setInterval(() => {
      zoomedInDiv.style.opacity -= 0.001;
    }, 30);

    setTimeout(() => {
      clearInterval(fadeInterval);
      zoomedInDiv.style.opacity = 0;
      window.location.href = event.target.href;
    }, 300);
  };

  return (
    <div className="home-page-container">
      <Particle id="tsparticles" />
      <NavBar handleZoomClick={handleZoomClick} />
      <h2 className="text">
        <TypingEffect/>
      </h2>
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
