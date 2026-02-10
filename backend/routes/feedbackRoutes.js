const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST feedback
router.post("/", async(req,res)=>{
  const fb = new Feedback(req.body);
  await fb.save();
  res.json({message:"Feedback saved"});
});

// GET feedback
router.get("/", async(req,res)=>{
  const data = await Feedback.find();
  res.json(data);
});

module.exports = router;
