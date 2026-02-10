const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name:String,
  subject:String,
  rating: {
  type: Number,
  min: 1,
  max: 5,
  required: true
},
  comments:String,
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
