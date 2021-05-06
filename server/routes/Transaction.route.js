const express = require("express");
const Router = express.Router();

const {
    addTransaction
} = require("../controllers/Transactions/transaction.controller");

Router.post("/add",addTransaction);

module.exports = Router;