import { FaMusic } from "react-icons/fa";

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
            <FaMusic className="faMusic" style={{fontSize: '2rem', width: '1.5rem', color: 'aquamarine'}}/>
            <h3>Music Library</h3>
            <FaMusic className="faMusic" style={{fontSize: '2rem', width: '1.5rem', color: 'aquamarine'}}/>
        </span>
    </nav>

     );
}
 
export default Navbar;