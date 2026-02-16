import React, { useState } from "react";
import axios from "axios";
import "./App.css";


function Login({ setIsLoggedIn, setIsLoginPage }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post(
        "https://college-feedback-system-9tsy.onrender.com/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      setIsLoggedIn(true); // ✅ THIS FIXES REFRESH ISSUE

      alert("Login successful!");
    } catch (err) {
      alert("Login failed");
    }
  };

return (
  <div className="container">
    <div className="card">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={loginUser}>Login</button>

      <p onClick={()=>setIsLoginPage(false)} style={{cursor:"pointer"}}>
  Don't have account? Signup
</p>

    </div>
  </div>
);

}

export default Login;
