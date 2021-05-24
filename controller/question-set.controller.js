const { QuestionSet } = require("../models/question-set.model")

const questionController = {
    getQuestionSets: async (req, res) => {
        try {
            const questionSets = await QuestionSet.find();
            res.json({ questionSets })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = questionController
