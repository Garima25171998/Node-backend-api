const mongoose = require('mongoose');
const userSchema= require('./Schema/UserSchema')

const userModel=mongoose.model('bl_user',userSchema);
module.exports=userModel