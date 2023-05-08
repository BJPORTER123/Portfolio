import React from "react";
import TypingEffect from "../../Components/TypingEffect";
import worldspin from "../../images/world-spin.gif"
import "./Home.css";


const Home = () => {
  // const handleZoomClick = (event) => {
  //   event.preventDefault();
  //   const zoomedInDiv = document.getElementById("zoomed-in-div");
  //   zoomedInDiv.style.transition = "transform 0.5s ease-in-out";
  //   zoomedInDiv.style.transform = "scale(20) rotate(360deg)";
  //   zoomedInDiv.style.opacity = 1;
  //   const fadeInterval = setInterval(() => {
  //     zoomedInDiv.style.opacity -= 0.001;
  //   }, 30);

  //   setTimeout(() => {
  //     clearInterval(fadeInterval);
  //     zoomedInDiv.style.opacity = 0;
  //     window.location.href = event.target.href;
  //   }, 300);
  // };

  return (
    <div className="home-page-container">
      <h2 className="text">
        <TypingEffect/>
      </h2>
      <div className="image-container">
        <img id="desk-image" src={worldspin} alt="world spinnign gif" height="500" width/>
      </div>
    </div>
  );
};

export default Home;
