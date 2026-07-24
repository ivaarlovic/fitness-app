import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

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
        </div>
    </nav>
    );
    
}

export default Navbar;