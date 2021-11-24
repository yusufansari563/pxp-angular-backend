const questionModal = require("../model/question");

const getQuestion = async (req, res) => {
  try {
    console.log(req.query, "<>?");
    const question = await questionModal.findOne({
      questionNumber: req.query.no,
    });
    console.log(question);
    res.status(200).json(question);
  } catch (error) {
    console.log(error, "<>?");
  }
};

const postAnswer = async (req, res) => {
  await questionModal.insertMany(req.body);
  res.send(200);
};

module.exports = {
  getQuestion,
  postAnswer,
};
