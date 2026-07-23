import "./Categories.css";

function Categories() {
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
            <h2>Popular categories</h2>
            <div className="category-grid">
                {
                categories.map(category => (
                    <div className="category-btn" key={category}>
                        {category}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;