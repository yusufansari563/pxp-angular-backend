const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: {
    type: String,
  },
  answer: [],
  last: {
    type: Boolean,
  },
  questionNumber: {
    type: String,
  },
  selectedAnswer: {
    type: String,
  },
  component: {
    type: String,
  },
});

const questionModal = mongoose.model("questions", questionSchema);

module.exports = questionModal;
