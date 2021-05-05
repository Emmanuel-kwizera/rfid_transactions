class ErrorResponse extends Error{
    constructor(message,statusCode){
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}

exports.formatResult = ({ status = 200, message = 'OK', data }) => {
    return {
        status: status,
        message: message.toString().split('\"').join(''),
        data: data
    }
}

module.exports = ErrorResponse;