const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema({
    UUID: {
      type:String,
      required:[true,"UUID is required"],
      minlength:[3,"UUID must be at least 3 letters "],
      maxlength:[50,"UUID must not exceed 255 letters"],
      trim:true
    },
    InitialBalance: {
      type:Number,
      required:[true,"InitialBalance is required"],
      trim:true
    },
    NewBalance: {
      type:Number,
      required:[true,"NewBalance is required"],
      trim:true
    },
    TransaportFare: {
      type:Number,
      required:[true,"InitialBalance is required"],
      trim:true
    }    

},
    {
      timestamps:{
        createdAt:"Registered_at",
        updatedAt:"Updated_at"
      },
      toJSON:{
        virtuals:true
      },
      toObject:{
        virtuals:true
      }
    }
);

module.exports = model("Transaction",TransactionSchema);