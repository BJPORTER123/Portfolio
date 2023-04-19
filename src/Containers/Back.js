import {Link} from "react-router-dom"
import "../css/NavBar.css"
import React from "react";

const Back = () => {

    return (  
        <>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="nav-li">
                <Link className="nav-link" to="/">Back</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default Back;
