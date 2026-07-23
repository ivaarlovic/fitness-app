import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
        <h2 className="logo">FitTrack</h2>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/exercises">Exercises</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/workout">Workout</Link>
            <Link to="/profile">Profile</Link>
        </div>
    </nav>
    );
    
}

export default Navbar;