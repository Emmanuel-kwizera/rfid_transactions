const express = require("express");
const Router = express.Router();

const { addCard }= require("../controllers/Cards/card.controller");

Router.post("/add",addCard);

module.exports =Router;