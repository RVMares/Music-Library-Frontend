import { FaMusic } from "react-icons/fa";


const Navbar = (props) => {
    return ( 
        <nav className="navbar justify-content-center">
            <FaMusic 
            className="faMusic" 
            style={{fontSize: '2rem', width: '1.5rem', color: 'aquamarine'}}/>
            <h3>Music Library</h3>
            <FaMusic 
            className="faMusic" 
            style={{fontSize: '2rem', width: '1.5rem', color: 'aquamarine'}}/>
        </nav>

     );
}
 
export default Navbar;