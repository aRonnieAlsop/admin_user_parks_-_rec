// AddEventForm.js
import React, { useState } from "react";
import axios from "axios";
import "./AddEventForm.css";

const AddEventForm = ({ onClose, onEventAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    start_date: "",
    start_time: "",
    end_time: "",
    repeats: 0,
    repeat_type: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/programs", formData)
      .then((response) => {
        console.log("Event added:", response.data);
        if (onEventAdded) onEventAdded();
        onClose();
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Event Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          
          <label>Start Date:</label>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            required
          />
          
          <label>Start Time:</label>
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
          
          <label>End Time:</label>
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            required
          />
          
          <label>Repeats (1 for yes, 0 for no):</label>
          <input
            type="number"
            name="repeats"
            value={formData.repeats}
            onChange={handleChange}
            required
          />
          
          <label>Repeat Type:</label>
          <input
            type="text"
            name="repeat_type"
            value={formData.repeat_type}
            onChange={handleChange}
            placeholder="e.g., weekly, monthly"
          />
          
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Add Event
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;
