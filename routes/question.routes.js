const express = require("express");
const questionController = require("../controller/question.controller");

const router = express.Router();

router.get("/", questionController.getQuestions);

module.exports = router