import { makeObservable, observable, action } from "mobx";

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

}

export default ExerciseStore;