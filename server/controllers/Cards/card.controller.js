const Card = require("../../models/card.model.js");
const ErrorMessage = require("../../utils/ErrorResponse");
const asyncHandler = require('express-async-handler');

module.exports.addCard = asyncHandler(async(req,res,next) => {
    let {UUID,Balance} = req.body;
    const newCard = await Card.create({UUID,Balance});
    if(newCard){res.send({success:true,data:newCard}).status(200);} else return next(new ErrorMessage("Something Went wrong during Card creation",400));
})

module.exports.getAllCard = asyncHandler(async(req,res,next) => {
    let cards = await Card.find();
    if(cards){res.send({success:true,data:cards}).status(201);} else return next(new ErrorMessage("NO CARDS FOUND",404));
})

module.exports.getCardByUUId = asyncHandler(async(req,res,next) => {
    let card_id = req.params.UUID;
    let card = await Card.findById(card_id);
    if(card){res.send({success:true,data:card}).status(201);} else return next(new ErrorMessage("CARD NOT FOUND",404));
})

module.exports.updateCard = asyncHandler(async(req,res,next) => {
    let card_id = req.params.id;
    const newCard = {...req.body};
    let card = await Card.findByIdAndUpdate(card_id,newCard,{ new:true});
    if(card){res.send({success:true,data:card}).status(201);}else return next(new ErrorMessage("SOMETHING WENT WRONG WHILE UPDATING USER",400));
})