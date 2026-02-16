import React, { useState } from "react";
import axios from "axios";
import "./App.css";


function Feedback({ setIsLoggedIn }) {

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    rating: "",
    comments: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/feedback",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );

      alert("Feedback Submitted!");
    } catch (error) {
      alert("Error submitting feedback");
    }
  };
return (
  <div className="container">
    <div className="card">
      <h2>Feedback Form</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          onChange={(e)=>setFormData({...formData,name:e.target.value})}
        />

        <input
          placeholder="Subject"
          onChange={(e)=>setFormData({...formData,subject:e.target.value})}
        />

        <input
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          onChange={(e)=>setFormData({...formData,rating:e.target.value})}
        />

        <textarea
          placeholder="Comments"
          onChange={(e)=>setFormData({...formData,comments:e.target.value})}
        />

        <button type="submit">Submit</button>
      </form>

      <button
        className="logout"
        onClick={()=>{
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  </div>
);

}

export default Feedback;
