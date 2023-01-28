const express = require("express");
const app = express.Router();
const QuizModel = require("../model/quiz.model");

app.get("/", async (req, res) => {
  let data = await QuizModel.find()
  console.log("res", data);
  return res.send(data);
});

app.post("/", async (req, res) => {
  const { category, difficulty, questions } = req.body;
  let quiz = await QuizModel.find({ category, difficulty }).limit(questions);
  console.log("quiz", quiz);
  return res.send(quiz);
});

module.exports = app;
