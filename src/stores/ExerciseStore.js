import { makeObservable, observable, action, runInAction } from "mobx";
import exerciseApi from "../exerciseApi";
import { getExerciseImage } from "../exerciseApi";

class ExerciseStore {
    exercises = [];
    loading = false;

    constructor() {
        makeObservable(this, {
            exercises: observable,
            loading: observable,
            setExercises: action,
            setLoading: action,
        });
    }

    setLoading(value) {
        this.loading = value;
    }

    setExercises(data) {
        this.exercises = data;
    }

    async fetchExercises() {
        this.setLoading(true);

        try {
            const response = await exerciseApi.get("/exercises?sortMethod=bodyPart&offset=0&limit=10&sortOrder=ascending");

            const exerciseWithImages = await Promise.all(
                response.data.map(async (exercise) => {
                    const imageUrl = await getExerciseImage(exercise.id);

                    return {
                        ...exercise, 
                        imageUrl
                    };
                })
            );

            runInAction(() => {
                this.exercises = exerciseWithImages;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }

}

export default ExerciseStore;