import ExerciseStore from "./ExerciseStore";

class RootStore {
    constructor() {
        this.exerciseStore = new ExerciseStore();
    }
}

const rootStore = new RootStore();
export default rootStore;