import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "./Containers/About/About.js";
import Projects from "./Containers/Projects/Projects.js";
import Home from "./Containers/Home/Home.js";
import Particle from "./Components/Particles/Particle";
import NavBar from "./Containers/NavBar/NavBar.js";
import Footer from "./Containers/Footer/Footer.js";
import Contact from "./Containers/Contact/Contact.js";
import './App.css'

const App = () => {

return (
  <div className="Main-Container">
  <NavBar/>
  <Particle id="tsparticles" />
  
  <Routes>
    <Route path="/Portfolio" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/projects" element={<Projects/>}/>

  </Routes>
  <Footer/>
  </div>
)}

export default App;

    


