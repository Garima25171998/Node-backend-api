const  Mongoose  = require("mongoose")

const UlbSchema=Mongoose.Schema({
    ulb_id:{
        type:String
    },
    ulb_name:{
        type:String
    },
    ulb_state:{
        type:String
    },
    ulb_district:{
        type:String
    },
    user_id:{
        type:String
    },
    ulb_city:{
        type:String
    },
    gstin:{
        type:String
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    title:{
        type:String
    },
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    phone:{
        type:String
    },
    mobile:{
        type:String
    },
    email:{
        type:String
    },
    secondary_email:{
        type:String
    },
    monthly_oty_mlp:{
        type:String
    },
    population:{
        type:String
    },
    remark:{
        type:String
    }


})

// model//
const UlbModel=Mongoose.model('epr_ulb',UlbSchema)
module.exports=UlbModel
