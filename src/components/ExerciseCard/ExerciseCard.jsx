import "./ExerciseCard.css";
import ExerciseModal from "../ExerciseModal/ExerciseModal";
import { useState } from "react";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const ExerciseCard = observer(({ exercise }) => {

    const { t } = useTranslation();

    const { exerciseStore } = useStore();
    const isFavorite = exerciseStore.favorites.some((fav) => fav.id === exercise.id); // vraca true, false

    const [showModal, setShowModal] = useState(false);

    return (

        <div className="exercise-card">

            <img
                src={exercise.imageUrl}
                alt={exercise.name}
            />


            <div className="exercise-header">

                <h3>{exercise.name}</h3>

                <button
                    className="favorite-button"
                    onClick={() => exerciseStore.toggleFavorite(exercise)}
                >
                    {isFavorite ? "❤️" : "🤍"}
                </button>

            </div>


            <p>
                {t("target")}: {t(exercise.target)}
            </p>


            <p>
                {t("equipment")}: {t(exercise.equipment)}
            </p>


            <p>
                {t("difficulty")}: {t(exercise.difficulty)}
            </p>

            <button onClick={() => setShowModal(true)} className="details-btn">
                {t("viewDetails")}
            </button>


            {
                showModal && (
                    <ExerciseModal
                        exercise={exercise}
                        closeModal={() => setShowModal(false)}
                    />
                )
            }
        </div>

    );

});

export default ExerciseCard;