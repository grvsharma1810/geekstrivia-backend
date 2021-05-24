const express = require("express");
const questionSetController = require("../controller/question-set.controller");

const router = express.Router();

router.get("/", questionSetController.getQuestionSets);

module.exports = router