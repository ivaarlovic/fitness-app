import { makeObservable, observable, action, runInAction, reaction } from "mobx";
import exerciseApi from "../exerciseApi";
import { getExerciseImage } from "../exerciseApi";

class ExerciseStore {
    exercises = [];
    loading = false;
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    constructor() {
        makeObservable(this, {
            exercises: observable,
            loading: observable,
            favorites: observable,
            setExercises: action,
            setLoading: action,
            fetchExercises: action,
            toggleFavorite: action, 
        });

        reaction(
            () => this.favorites.slice(),
            (favorites) => {
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );
            }
        );
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

    toggleFavorite(exercise) {
    const isFavorite = this.favorites.some((fav) => fav.id === exercise.id);

    if (isFavorite) {
        this.favorites = this.favorites.filter((fav) => fav.id !== exercise.id);
    } else {
        this.favorites = [...this.favorites, exercise];
    }
}

}

export default ExerciseStore;