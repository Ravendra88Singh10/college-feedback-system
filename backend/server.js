const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());



// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  family: 4
})
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Test route
app.get("/", (req,res)=>{
  res.send("API running...");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

