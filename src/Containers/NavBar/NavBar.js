import { BrowserRouter as Router, Route, useLocation } from "react-router-dom"
import "./NavBar.css"
import profile from '../../images/profilephoto.jpg'
import React from "react";

const NavBar = () => {

const location = useLocation()

    return (  
        <Router>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="photo-li">
                <Link to="/"><img className='profile-img'src={profile}/></Link>
            </li>
            <li className="nav-li">
                <Link to="/about" className={location.pathname === "/about" ? 'active-link' : "nav-link"}>About</Link>
            </li>
            <li className="nav-li">
                <Link to="/projects" className={location.pathname === "/projects" ? 'active-link' : "nav-link"}>Projects</Link>
            </li>
            <li className="nav-li">
            <a className="nav-link" href="https://drive.google.com/file/d/16jrzeqnAY4DgvFZNKZ4BKykCAQYM2M0m/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
            </ul>
        </nav>
        </Router>
    );
}
 
export default NavBar;
