import { Link } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
    return (  
        <ul className="nav-bar-list">
            <li>
                <Link className='nav-bar-item' to='/'>Home</Link>
            </li>
            <li>
                <Link className='nav-bar-item' to='/portfolio'>Portfolio</Link>
            </li>
        </ul>
    );
}
 
export default NavBar;