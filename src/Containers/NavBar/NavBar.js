import {Link, useLocation} from "react-router-dom"
import "./NavBar.css"
import React from "react";

const NavBar = () => {

const location = useLocation()

    return (  
        <>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="nav-li">
                <Link to="/" className="nav-link"  >111</Link>
            </li>
            <li className="nav-li">
                <Link to="/about" className={location.pathname === "/about" ? 'active-link' : "nav-link"}>About</Link>
            </li>
            <li className="nav-li">
                <Link to="/experience" className={location.pathname === "/experience" ? 'active-link' : "nav-link"}>Experience</Link>
            </li>
            <li className="nav-li">
                <Link to="/projects" className={location.pathname === "/projects" ? 'active-link' : "nav-link"}>Projects</Link>
            </li>
            <li className="nav-li">
                <Link to="/contact" className={location.pathname === "/contact" ? 'active-link' : "nav-link"}>Contact</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default NavBar;
