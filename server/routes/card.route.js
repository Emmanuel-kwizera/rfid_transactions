const express = require("express");
const Router = express.Router();

const { 
    addCard,
    getAllCard
}= require("../controllers/Cards/card.controller");

Router.post("/add",addCard);
Router.get("/all",getAllCard);

module.exports =Router;