const mongoose = require('mongoose');


const DealSchema=mongoose.Schema({
    deal_id:{
        type:String,
        required:true
    },
    deal_owner:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    quote_location:{
        type:String,
        required:true
    },
    deal_source:{
        type:String,
        required:true
    },
    deal_title:{
        type:String,
        required:true
    },
    deal_type:{
        type:String,
        required:true
    },
    referral:{
        type:String
    },
    industry :{
        type:String
    },
    deal_stimated_value:{
        type:String,
        required:true
    },
    deal_status_stage:{
        type:String,
        required:true
    },
    account_id:{
        type:String,
        required:true
    },
    contact_id:{
        type:String,
        required:true
    },
    requirement_summary:{
        type:String,
        required:true
    },
    product_services:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    attachments:{
        type:String,
        required:true
    },
    so_no:{
        type:String,
        required:true
    },
    inco_terms:{
        type:String,
        required:true
    },
    payment_terms:{
        type:String,
        required:true
    },
    p_f:{
        type:String,
        required:true
    },
    freight:{
        type:String,
        required:true
    },
    other_charges:{
        type:String,
        required:true
    },
    delivery:{
        type:String,
        required:true
    },
    warranty:{
        type:String,
        required:true
    },
    deal_validity:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    },
    created_by:{
        type:String,
        required:true
    },
    created_date_time:{
        type:Date,
        required:true
    },
    modified_by:{
        type:String
    },
    modified_date_time:{
        type:Date
    },
    notes:{
        type:String
    },
    edit_status:{
        type:Boolean,
        required:true
    },
})

module.exports=DealSchema