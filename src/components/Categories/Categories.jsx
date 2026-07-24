import { useTranslation } from "react-i18next";
import "./Categories.css";

function Categories() {
    const { t } = useTranslation();

    const categories = [
        "Chest",
        "Back",
        "Legs",
        "Shoulders",
        "Arms",
        "Cardio",
    ];

    return (
        <section className="categories">
            <h2>{t("popularCategories")}</h2>
            <div className="category-grid">
                {
                categories.map(category => (
                    <div className="category-btn" key={category}>
                        {t(category)}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;