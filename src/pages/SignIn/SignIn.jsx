import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import useStore from "../../hooks/useStore";

function SignIn() {
    const navigate = useNavigate();
    const { authStore } = useStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("Unesi sva obavezna polja");
            return;
        }

        if (password.trim() !== confirmPassword.trim()) {
            alert("Lozinke se trebaju podudarati.")
            return;
        }

        const success = authStore.register(email, password);

        if (success) {
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/");
        } else {
            return;
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Create Account</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input className="input-field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="input-field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="input-field" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label className="terms-label">
                        <input type="checkbox" />
                        <span>I agree to terms and Privacy Policy</span>
                    </label>
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
                <p className="mt-4 text-center">Already have an account? <Link to="/">Log in</Link></p>
            </div>
        </div>
    );
}

export default SignIn;