const mongoose = require('mongoose');
const OtpSchema=require('../../models/DT_MODELS/Schema/OtpSchema')

let OtpModel = mongoose.model('epr_sent-otp',OtpSchema)

module.exports=OtpModel