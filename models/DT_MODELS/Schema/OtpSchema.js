const mongoose = require('mongoose');

let OtpSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }
})

module.exports=OtpSchema