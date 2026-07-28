import AuthStore from "./AuthStore";
import ExerciseStore from "./ExerciseStore";

class RootStore {
    constructor() {
        this.exerciseStore = new ExerciseStore();
        this.authStore = new AuthStore();
    }
}

const rootStore = new RootStore();
export default rootStore;