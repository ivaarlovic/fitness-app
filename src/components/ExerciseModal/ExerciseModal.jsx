import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "./ExerciseModal.css";

function ExerciseModal({exercise, closeModal}) {
    const modalRef = useRef();

    useEffect(()=> {
        function handleClickOutside(event) {
            if(
                modalRef.current && !modalRef.current.contains(event.target)
            ){
                closeModal();
            }
        }

        function handleEscape(event) {
            if(event.key === "Escape"){
                closeModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    },[closeModal]);

    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
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