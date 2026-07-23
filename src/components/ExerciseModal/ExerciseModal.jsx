import { createPortal } from "react-dom";
import "./ExerciseModal.css";

function ExerciseModal({exercise, closeModal}) {
    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                    X
                </button>

                <h2>{exercise.name}</h2>

                <div className="exercise-info">
                    <p><strong>Body part: </strong>{exercise.bodyPart}</p>
                    <p><strong>Target: </strong>{exercise.target}</p>
                    <p><strong>Equipment: </strong>{exercise.equipment}</p>
                    <p><strong>Difficulty: </strong>{exercise.difficulty}</p>
                </div>
                <h3>Description: </h3>
                <p>{exercise.description}</p>

                <ol>
                    {
                        exercise.instructions.map((step,index) => (
                            <li key={index}>
                                {step}
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default ExerciseModal;