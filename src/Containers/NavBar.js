import {Link} from "react-router-dom"
import "../css/NavBar.css"
import React from "react";

const NavBar = ({handleZoomClick}) => {

    return (  
        <>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="nav-li">
                <Link className="nav-link" to="/about" onClick={handleZoomClick}>About</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/projects" onClick={handleZoomClick}>Projects</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default NavBar;
