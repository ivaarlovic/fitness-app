import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import useStore from "../../hooks/useStore";
import "./Exercises.css";
import { useTranslation } from "react-i18next";

const Exercises = observer(() =>{
    const { t } = useTranslation();
const { exerciseStore} = useStore();

    useEffect(()=> {
        exerciseStore.fetchExercises();
    }, [exerciseStore]);


    if(exerciseStore.loading) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
            <h1>{t("exercises")}</h1>
            <div className="exercises-container">
                {
                exerciseStore.exercises.map(exercise => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                    />
                ))
            }
            </div>
            
        </div>
    );
})

export default Exercises;