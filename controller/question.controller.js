const { Question } = require("../models/question.model")

const questionController = {
    getQuestions: async (req, res) => {
        try {
            const questions = await Question.find({ questionSetId: req.questionSetId })
            res.json({ questions })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = questionController