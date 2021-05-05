const Card = require("../../models/card.model.js");
const ErrorMessage = require("../../utils/ErrorResponse");
const asyncHandler = require('express-async-handler');

module.exports.addCard = asyncHandler(async(req,res,next) => {
    let {UUID,Balance} = req.body;
    const newCard = await Card.create({UUID,Balance});
    if(newCard){res.send({success:true,data:newCard}).status(200);} else return next(new ErrorMessage("Something Went wrong during Card creation",400));
})