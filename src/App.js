import About from "./Containers/About/About.js";
import Projects from "./Containers/Projects/Projects.js";
import Home from "./Containers/Home/Home.js";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  

return (
  <>
  <Routes>
    <Route path="/Portfolio" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
  </Routes>
  
</>
)}

export default App;

    


