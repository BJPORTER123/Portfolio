import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (  
        <>
        <nav className="footer-bar">
            <ul className="footer-ul">
            <li className="footer-li">
                <Link className="footer-link" to="/about">About</Link>
            </li>
            <li className="footer-li">
                <Link className="footer-link" to="/projects">Experience</Link>
            </li>
            <li className="footer-li">
                <Link className="footer-link" to="/projects">Projects</Link>
            </li>
            <li className="footer-li">
                <Link className="footer-link" to="/projects">Contact</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default Footer;