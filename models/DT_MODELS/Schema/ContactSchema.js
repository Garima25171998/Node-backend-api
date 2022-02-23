const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({

    contact_id:{
        type:String,
        required:true
    },
    account_id:{
        type:String,
        required:true
    },
    contact_owner:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    contact_name:{
        type:String,
        required:true
    },
    country_code:{
        type:String,
        required:true
    },
    phone_no:{
        type:String
    },
    mobile_no:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    secondary_email:{
        type:String
    },
    remark:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    },
    modified_at:{
        type:Date
    }
})

module.exports = ContactSchema