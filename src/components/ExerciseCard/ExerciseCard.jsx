import "./ExerciseCard.css";
import ExerciseModal from "../ExerciseModal/ExerciseModal";
import { useState } from "react";

function ExerciseCard({ exercise }) {

    const [showModal, setShowModal] = useState(false);

    return (

        <div className="exercise-card">

            <img
                src={exercise.imageUrl}
                alt={exercise.name}
            />


            <h3>
                {exercise.name}
            </h3>


            <p>
                Target: {exercise.target}
            </p>


            <p>
                Equipment: {exercise.equipment}
            </p>


            <p>
                Difficulty: {exercise.difficulty}
            </p>

            <button onClick={() => setShowModal(true)} className="details-btn">
                View details
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

}

export default ExerciseCard;