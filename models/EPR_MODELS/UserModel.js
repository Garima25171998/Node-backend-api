const Mongoose = require("mongoose") 

const UserSchrema=Mongoose.Schema({
   
    username:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    designation:{
        type:String
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    role:{
        type:String
    }
})

//model///
const UserModal=Mongoose.model('user_epr',UserSchrema)
module.exports=UserModal
