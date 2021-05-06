const express = require("express");
const Router = express.Router();

const {
    addTransaction,
    getTransactions
} = require("../controllers/Transactions/transaction.controller");

Router.post("/add",addTransaction);
Router.get("/all", getTransactions);

module.exports = Router;