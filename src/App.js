import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ programs, setPrograms ] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/programs")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging log
        setPrograms(Array.isArray(response.data) ? response.data : []); // Ensure it's always an array
      })
      .catch((error) => {
        console.error("Error connecting to backend:", error);
        setError("❌ Failed to connect to backend.");
      });
  }, []);
  
  

  return (
      <div>
    <ul>
  {Array.isArray(programs) && programs.length > 0 ? (
    programs.map((program) => (
      <li key={program.id}>
        <strong>{program.name}</strong> <br />
        <em>Location:</em> {program.location} <br />
        <em>Description:</em> {program.description}
      </li>
    ))
  ) : (
    <p>No programs found.</p>
  )}
</ul>

    </div>
  );
}

export default App;
