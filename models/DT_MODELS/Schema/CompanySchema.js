const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({

    company_id:{
        type:String,
        required:true
    },
    company_owner:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    company_logo:{
        type:String
    },
    gstin:{
        type:String,
        required:true
    },
    pan:{
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
    created_at:{
        type:Date,
        required:true
    },
    modified_at:{
        type:Date
    }
    
    })

module.exports = CompanySchema