const express = require('express')
const dotenv = require("dotenv")
const path = require('path')
require("./config/db");
const ErrorHandler = require("./middlewares/error")

const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());

const cards = require("./routes/Card.route");

app.get('/', (req,res) => {
    res.json({
        message: "Hello World!"
    });
});

app.use("/api/cards",cards);

app.use(ErrorHandler)
const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Server started at port ${port}`)});