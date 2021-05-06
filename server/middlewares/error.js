const ErrorResponse = require("../utils/ErrorResponse")

const ErrorHandler = (err,req,res,next)=>{
    let error = err;
    if(err.name == "CastError"){
        error = new ErrorResponse("USER NOT FOUND",404)
    }
    res.send({
        statusCode: error.statusCode || 500,
        error: error.message || "Server error"
    })
}

module.exports  = ErrorHandler;