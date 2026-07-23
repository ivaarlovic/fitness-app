import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Exercises from "./pages/Exercises/Exercises";
import Workout from "./pages/Workout/Workout";
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/workout" element={<Workout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;