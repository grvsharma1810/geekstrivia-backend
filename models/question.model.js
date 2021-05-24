const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionSetId: {type: mongoose.SchemaTypes.ObjectId, required: ["Can't add without Question Set ID"] },
    question: { type: String, required: ["Can't add without question"] },
    options: [
        {
            value: { type: String, required: ["Can't add without option value"] },
            isCorrect: { type: Boolean },
        }
    ]
})

const Question = mongoose.model("Question", QuestionSchema);
module.exports = { Question };