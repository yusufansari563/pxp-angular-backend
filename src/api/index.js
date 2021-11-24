const express = require("express");

const emojis = require("./emojis");
const question = require("./question");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/question", question);

module.exports = router;
