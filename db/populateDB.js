const { QuestionSet } = require("../models/question-set.model");
const { Question } = require("../models/question.model");
const setOne = require("../data/set-1")
const setTwo = require("../data/set-2")
const setThree = require("../data/set-3")
const setFour = require("../data/set-4")


const populateDB = async () => {
    try {
        let newQuestionSet = new QuestionSet({ name: "Set 1" });
        let savedQuestionSet = await newQuestionSet.save();
        setOne.forEach(async (question) => {
            const newQuestion = new Question({
                questionSetId: savedQuestionSet._id,
                question: question.question,
                options: question.options
            });
            const savedQuestion = await newQuestion.save();
            console.log(savedQuestion);
        });

        newQuestionSet = new QuestionSet({ name: "Set 2" });
        savedQuestionSet = await newQuestionSet.save();
        setTwo.forEach(async (question) => {
            const newQuestion = new Question({
                questionSetId: savedQuestionSet._id,
                question: question.question,
                options: question.options
            });
            const savedQuestion = await newQuestion.save();
            console.log(savedQuestion);
        });

        newQuestionSet = new QuestionSet({ name: "Set 3" });
        savedQuestionSet = await newQuestionSet.save();
        setThree.forEach(async (question) => {
            const newQuestion = new Question({
                questionSetId: savedQuestionSet._id,
                question: question.question,
                options: question.options
            });
            const savedQuestion = await newQuestion.save();
            console.log(savedQuestion);
        });


        newQuestionSet = new QuestionSet({ name: "Set 4" });
        savedQuestionSet = await newQuestionSet.save();
        setFour.forEach(async (question) => {
            const newQuestion = new Question({
                questionSetId: savedQuestionSet._id,
                question: question.question,
                options: question.options
            });
            const savedQuestion = await newQuestion.save();
            console.log(savedQuestion);
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = populateDB;