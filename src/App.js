import { BrowserRouter, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "./components/Loading/Loading";
import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/Login/Login";

const Home = lazy(() => import("./pages/Home/Home"));
const Exercises = lazy(() => import("./pages/Exercises/Exercises"));
const Workout = lazy(() => import("./pages/Workout/Workout"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/workout" element={<Workout />} />
                <Route path="/register" element={<SignIn />} />
                <Route path="/" element={<Login />} />
            </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;