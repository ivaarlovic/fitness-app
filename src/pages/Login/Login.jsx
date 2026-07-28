import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css"
import useStore from "../../hooks/useStore";

function Login() {
    const {authStore} = useStore();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if(!email.trim() || !password.trim()) {
            alert("Unesi email ili lozinku");
            return;
        }

        const success = authStore.login(email, password);
        if(success) {
            navigate("/home");
        } else {
            alert("Neispravan email ili lozinka");
        }
    }

    return(
        <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome to FitTrack</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input className="input-field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input-field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="submit-btn">Log in</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
    );
}

export default Login;