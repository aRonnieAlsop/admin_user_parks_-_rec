import React, { useState, useEffect } from "react";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      // 🔥 check if email is registered in Firebase
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) {
        setMessage("⤫ Access Denied: This email is not authorized.");
        return;
      }

      // if email exists, send login link:
      const actionCodeSettings = {
        url: "http://localhost:3000/", // ⤷ redirect after login
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("✓  Login link sent! Check your email.");
    } catch (error) {
      console.error("Error sending login email:", error);
      setMessage("⤫ Failed to send login email.");
    }
  };

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please confirm your email for login:");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          setMessage("✓  Successfully logged in!");
        })
        .catch((error) => {
          console.error("Sign-in error:", error);
          setMessage("⤫ Login failed.");
        });
    }
  }, []);

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
      <button onClick={handleLogin} style={styles.button}>
        Send Login Link
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
