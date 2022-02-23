const mongoose = require('mongoose');

var LeadSchema = mongoose.Schema(
        {
            
            lead_id: {
                type: String,
                required:true
            },
            lead_owner: {
                type: String,
                required:true
            },
            company_name: {
                type: String,
                required:true
            },
            contact: {
                type: String,
                required:true
            },
            lead_source: {
                type: String,
                required:true
            },
            lead_title: {
                type: String,
                required:true
            },
            lead_type: {
                type: String,
                required:true
            },
            referral: {
                type: String
            },
            industry: {
                type: String,
                required:true
            },
            estimated_value: {
                type: String,
                required:true
            },
            lead_status_stage: {
                type: String,
                required:true
            },
            account_id: {
                type: String,
                required:true
            },
            contact_id:{
                type:String,
                required:true
            },
            remark:{
                type:String,
                required:true
            },
           
            product_services: {
                type: String
            },
            notes: {
                type: String
            },
            attachments: {
                type: String
            },
            created_by: {
                type: String,
                required:true
            },
            created_date_time: {
                type: Date,
                required:true
            },
            modified_by: {
                type: String
            },
            modified_date_time: {
                type: Date
            },
            edit_status: {
                type: Boolean,
                required:true
            }
        }
);

module.exports=LeadSchema