import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("⤫ Please enter both email and password.");
      return;
    }

    try {
      // authenticate using email & password:
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✓ Successfully logged in!");
      setTimeout(() => {
        navigate("/home"); // ⤷redirect to homepage
      }, 1000); // ⤷ delayed to show success method
    } catch (error) {
      console.error("⤫ Login error:", error);
      setMessage("⤫ Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Koyom Koyo Website Administration Login</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default LoginPage;




