import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <h1>FitTrack</h1>
            <p>Track your workouts and build your own fitness journey.</p>
            <Link to="/exercises" className="hero-btn">
            Explore Exercises</Link>
        </section>
    );
}

export default Hero;