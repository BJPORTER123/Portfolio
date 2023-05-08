import React from "react";
import TypingEffect from "../../Components/TypingEffect";
import worldspin from "../../images/world-spin.gif"
import "./Home.css";


const Home = () => {

  return (
    <>
      <h2 className="text">
        <TypingEffect/>
      </h2>
        <img id="desk-image" src={worldspin} alt="world spinning gif" />
  </>
  );
};

export default Home;
