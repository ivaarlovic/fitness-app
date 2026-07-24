import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";

function Navbar() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const {theme, toggleTheme} = useTheme();

    return(
        <nav className="navbar">
        <h2 className="logo">FitTrack</h2>
        <div className="nav-links">
             <Link to="/">
                    {t("home")}
                </Link>

                <Link to="/exercises">
                    {t("exercises")}
                </Link>

                <Link to="/favorites">
                    {t("favorites")}
                </Link>

                <Link to="/workout">
                    {t("workout")}
                </Link>

                <Link to="/profile">
                    {t("profile")}
                </Link>


                <button onClick={() => changeLanguage("hr")}>
                    HR
                </button>

                <button onClick={() => changeLanguage("en")}>
                    EN
                </button>

                <button className="theme-button" onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
        </div>
    </nav>
    );
    
}

export default Navbar;