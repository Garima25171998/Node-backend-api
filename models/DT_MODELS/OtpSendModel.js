const mongoose = require('mongoose');
const OtpSchema=require('./Schema/OtpSchema')

let OtpModel = mongoose.model('bl_sent-otp',OtpSchema)

module.exports=OtpModel