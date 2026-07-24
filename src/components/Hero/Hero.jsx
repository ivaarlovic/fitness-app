import { Link } from "react-router-dom";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {

    const { t } = useTranslation();

    return (
        <section className="hero">

            <h1>FitTrack</h1>

            <p>
                {t("heroText")}
            </p>

            <Link 
                to="/exercises" 
                className="hero-btn"
            >
                {t("exploreExercises")}
            </Link>

        </section>
    );
}

export default Hero;