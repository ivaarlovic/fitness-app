import axios from "axios";

const exerciseApi = axios.create({
    baseURL: "https://exercisedb.p.rapidapi.com",
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
         "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
    }
});

export const getExerciseImage = async (exerciseId) =>{
    const response = await exerciseApi.get(
        `/image?exerciseId=${exerciseId}&resolution=180`,
        {
            responseType: "blob"
        }
    );

    return URL.createObjectURL(response.data);
}

export default exerciseApi;