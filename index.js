const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const { initializeDBConnection } = require('./db/db.connect')
dotenv.config()

const app = express()
app.use(cors());
app.use(express.json());

initializeDBConnection();

app.get('/', (req, res) => {
    res.json({ message: "HELLO FROM GEEKSTRIVIA" });
})

app.post('/', (req, res) => {
    console.log(req.body.x)
    res.json({ x: req.body.x });
})

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
})