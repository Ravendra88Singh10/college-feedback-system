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
    await axios.post("https://college-feedback-system-9tsy.onrender.com/", form);
    alert("Feedback Submitted!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>College Feedback Form</h2>

        <form onSubmit={submit}>
          <input
            placeholder="Your Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Subject"
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
    let val = e.target.value;

    if (val > 5) val = 5;
    if (val < 1) val = 1;

    setForm({ ...form, rating: val });
  }}
/>


          <textarea
            placeholder="Your Comments"
            onChange={(e) => setForm({ ...form, comments: e.target.value })}
          />

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default App;
