import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Signup({ setIsLoginPage }) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const registerUser = async () => {
    try {
      await axios.post(
        "https://college-feedback-system-9tsy.onrender.com/api/auth/signup",
        { name,email,password }
      );

      alert("Signup successful! Please login.");
      setIsLoginPage(true);
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Signup</h2>

        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={registerUser}>
          Signup
        </button>

        <p onClick={()=>setIsLoginPage(true)} style={{cursor:"pointer"}}>
          Already have account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;
