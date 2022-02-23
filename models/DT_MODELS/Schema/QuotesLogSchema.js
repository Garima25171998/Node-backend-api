const mongoose = require('mongoose');

const quoteLogSchema=mongoose.Schema({
    
    quote_id_main : {
        type:String,
        required:true
    },
    quote_owner: {
        type:String,
        required:true
    },
    quote_source: {
        type:String,
        required:true
    },
    quotation_type: {
        type:String,
        required:true
    },
    account_id: {
        type:String,
        required:true
    },
    referral: {
        type:String,
        required:true
    },
    quote_type: {
        type:String,
        required:true
    },
    industry: {
        type:String,
        required:true
    },
    quote_title: {
        type:String,
        required:true
    },
    product_services: {
        type:String,
        required:true
    },
    quote_status_stage: {
        type:String,
        required:true
    },
    created_by: {
        type:String,
        required:true
    },
    created_date_time: {
        type:Date,
        required:true
    },
    modified_by: {
        type:String
    },
    modified_date_time: {
        type:Date
    },
    notes : {
        type:String,
        required:true
    },
    attachments: {
        type:String,
        required:true
    },
    inco_terms_master: {
        type:String,
        required:true
    },
    payment_terms_master: {
        type:String,
        required:true
    },
    edit_status: {
        type:Boolean,
        required:true
    }
})

module.exports=quoteLogSchema