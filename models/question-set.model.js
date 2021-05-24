const mongoose = require("mongoose");

const QuestionSetSchema = new mongoose.Schema({
    name: { type: String, required: ["Can't add without name"] },
})

const QuestionSet = mongoose.model("QuestionSet", QuestionSetSchema);

module.exports = { QuestionSet };