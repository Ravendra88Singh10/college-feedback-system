const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Test route
app.get("/", (req,res)=>{
  res.send("API running...");
});

// Routes
app.use("/api/feedback", require("./routes/feedbackRoutes"));

app.listen(process.env.PORT, ()=>{
  console.log("Server running on port 5000");
});
