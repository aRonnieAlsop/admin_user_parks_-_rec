import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // → redirect user
import { signOut } from "firebase/auth"; // → firebase sign-out
import { auth } from "./../../firebaseConfig"; 
import axios from "axios";
import './HomePage.css';

const HomePage = () => {
  const [programs, setPrograms] = useState([]);
  const [showPrograms, setShowPrograms] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:5000/programs")
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
      });
  }, []);

  const togglePrograms = () => {
    setShowPrograms(!showPrograms);
  };

    // 🔥 logout function
    const handleLogout = async () => {
      try {
        await signOut(auth); // → firebase sign-out
        navigate("/"); // → redirect to login page
      } catch (error) {
        console.error("Logout Error:", error);
      }
    };

  return (
    <div className="container">
       {/* 🔥 Logout Button */}
       <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <h1 className="title">Koyom Koyo Admin Dashboard</h1>

      {/* Add Event Button */}
      <button className="add-button">+ Add Event</button>

      {/* Expand Programs Button */}
      <button onClick={togglePrograms} className="toggle-button">
        Programs {showPrograms ? "▲" : "▼"}
      </button>

      {/* Programs List (Only visible when expanded) */}
      {showPrograms && (
        <div className="programs-container">
          {programs.length > 0 ? (
            programs.map((program) => (
              <div key={program.id} className="card">
                <h2 className="card-title">{program.name}</h2>
                <p className="date">𝄜  Start Date: {formatDate(program.start_date)}</p>
                <p className="time">⏱ Start Time: {formatTime(program.start_time)}</p>

                <div className="card-buttons">
                  <button className="edit-button">Edit Event</button>
                  <button className="delete-button">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-events">No events available.</p>
          )}
        </div>
      )}
    </div>
  );
};

// Function to format date into "Month Day, Year" (e.g., "February 20, 2025")
const formatDate = (dateString) => {
  if (!dateString) return "No date available";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Function to format time into "hh:mm AM/PM" (e.g., "11:00 AM")
const formatTime = (timeString) => {
  if (!timeString) return "No time available";

  // Ensure proper format by appending a date (to prevent invalid parsing)
  const fullDateTime = `1970-01-01T${timeString}`; // Using an arbitrary date
  const dateObj = new Date(fullDateTime);

  return dateObj.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // Converts to AM/PM format
  });
};


export default HomePage;
