import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    rating: "",
    comments: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      // Use correct URL with /api/feedback
      await axios.post(
        "https://college-feedback-system-9tsy.onrender.com/api/feedback",
        form
      );
      alert("Feedback Submitted!");
      
      // Reset form after submission
      setForm({ name: "", subject: "", rating: "", comments: "" });
    } catch (error) {
      console.error(error);
      alert("Error submitting feedback. Check console!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>College Feedback Form</h2>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            required
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />

          <input
            type="number"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            required
            value={form.rating}
            onChange={(e) => {
              let val = parseInt(e.target.value);

              if (val > 5) val = 5;
              if (val < 1) val = 1;

              setForm({ ...form, rating: val });
            }}
          />

          <textarea
            placeholder="Your Comments"
            value={form.comments}
            required
            onChange={(e) => setForm({ ...form, comments: e.target.value })}
          />

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default App;
