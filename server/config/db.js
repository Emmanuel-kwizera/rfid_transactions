const mongoose = require('mongoose')

const connectToDB = async () =>{
    var connect = await mongoose.connect("mongodb://localhost/rfid_transactions",{
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true
    });
    console.log(`Connected to mongoDb: ${connect.connection.host}`);
};

connectToDB();