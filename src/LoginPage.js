import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

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
      // Authenticate using Email & Password
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
    <div style={styles.container}>
      <h1 style={styles.title}>Koyom Koyo Website Administration Login</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1A2421",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    width: "250px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
  },
};

export default LoginPage;




