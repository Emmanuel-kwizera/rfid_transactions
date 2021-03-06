const Transaction = require("../../models/transaction.model.js");
const ErrorMessage = require("../../utils/ErrorResponse");
const Card = require("../../models/card.model.js");
const asyncHandler = require('express-async-handler');

module.exports.addTransaction = asyncHandler(async(req,res,next) => {
    let {UUID,TransaportFare} = req.body;
    let card = await Card.findOne({UUID: UUID});
    if(!card){
        return res.send("CARD NOT FOUND").status(404);
    }else{
        card.Balance = card.Balance-TransaportFare;
        NewBalance = card.Balance;
        const newTransaction = await Transaction.create({UUID,NewBalance,TransaportFare});
        await card.save();
        if(newTransaction){res.send({success:true,data:newTransaction}).status(200);} else return next(new ErrorMessage("Something Went wrong during user creation",400));
    }
})

module.exports.getTransactionById = asyncHandler(async(req,res,next) => {
    let transaction_id = req.params.id;
    let transaction = await Transaction.findById(transaction_id);
    if(transaction){res.send({success:true,data:transaction}).status(201);} else return next(new ErrorMessage("TRANSACTION NOT FOUND",404));
})

exports.getTransactions = async(req, res) =>{
    const transactions = await Transaction.find({})
    return res.send(transactions).status(200);
}

module.exports.deleteTransaction = asyncHandler(async(req,res,next)=>{
    let transaction = await Transaction.findByIdAndDelete(req.params.id);
    if(transaction){res.send({success:true,data:transaction}).status(201)} else return next(new ErrorMessage("Transaction deletion failed",400));     
})

