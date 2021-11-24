const express = require("express");

const QuestionController = require("../controller/QuestionController");

const router = express.Router();

router.get("/", QuestionController.getQuestion);
router.post("/", QuestionController.postAnswer);

module.exports = router;
