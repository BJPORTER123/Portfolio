import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Containers/About/About.js";
import Projects from "./Containers/Projects/Projects.js";
import Home from "./Containers/Home/Home.js";
import Particle from "./Components/Particles/Particle";
import NavBar from "./Containers/NavBar/NavBar.js";
import "./App.css";

const App = () => {
  return (
    <div className="Main-Container">
      <NavBar />
      <Particle id="tsparticles"/>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;


    


