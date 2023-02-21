import About from "./Containers/About";
import Projects from "./Containers/Projects";
import Home from "./Containers/Home";
import "./App.css";
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

    


