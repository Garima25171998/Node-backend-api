const mongoose = require('mongoose');
const userSchema= require('../../models/DT_MODELS/Schema/UserSchema')

const userModel=mongoose.model('epr_user',userSchema);
module.exports=userModel