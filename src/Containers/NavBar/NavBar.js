import {Link} from "react-router-dom"
import "./NavBar.css"
import React from "react";

const NavBar = ({handleZoomClick}) => {

    return (  
        <>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="nav-li">
                <Link className="nav-link1" to="/" onClick={handleZoomClick}>111</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/about" onClick={handleZoomClick}>About</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/experience" onClick={handleZoomClick}>Experience</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/contact" onClick={handleZoomClick}>Projects</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/projects" onClick={handleZoomClick}>Contact</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default NavBar;
