const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const auth = require("../middleware/auth");

// POST feedback (PROTECTED)
router.post("/", auth, async (req, res) => {
  const fb = new Feedback(req.body);
  await fb.save();
  res.json({ message: "Feedback saved" });
});

// GET feedback (optional: keep public or protect later)
router.get("/", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

module.exports = router;
