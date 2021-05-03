const express = require('express')
require("./config/db");

const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json({
        message: "Hello World"
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Server started at port ${port}`)});