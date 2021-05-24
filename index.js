const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const { initializeDBConnection } = require('./db/db.connect')
const populateDB = require("./db/populateDB")
dotenv.config()

const app = express()
app.use(cors());
app.use(express.json());

initializeDBConnection();
// populateDB();

app.get('/', (req, res) => {
    res.json({ message: "HELLO FROM GEEKSTRIVIA" });
})

app.post('/', (req, res) => {
    console.log(req.body.x)
    res.json({ x: req.body.x });
})

app.use("/question-sets", require("./routes/question-set.routes"))

app.use("/question-sets/:questionSetId/questions", (req, res, next) => {
    req.questionSetId = req.params.questionSetId;
    next();
}, require("./routes/question.routes"))

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
})