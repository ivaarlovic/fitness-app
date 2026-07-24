import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "./ExerciseModal.css";
import { useTranslation } from "react-i18next";

function ExerciseModal({ exercise, closeModal }) {
    const { t } = useTranslation();

    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                modalRef.current && !modalRef.current.contains(event.target)
            ) {
                closeModal();
            }
        }

        function handleEscape(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [closeModal]);

    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="close-button" onClick={closeModal}>
                    X
                </button>

                <h2>{t(exercise.name)}</h2>

                <div className="exercise-info">
                    <p>
                        <strong>{t("bodyPart")}: </strong>
                        {exercise.bodyPart}
                    </p>
                    <p>
                        <strong>{t("target")}: </strong>
                        {exercise.target}
                    </p>
                    <p>
                        <strong>{t("equipment")}: </strong>
                        {exercise.equipment}
                    </p>
                    <p>
                        <strong>{t("difficulty")}: </strong>
                        {exercise.difficulty}
                    </p>
                </div>
                <h3>{t("description")}:</h3>
                <p>{exercise.description}</p>

                <ol>
                    {
                        exercise.instructions.map((step, index) => (
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