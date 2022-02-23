const mongoose = require('mongoose');

const quoteSchema=mongoose.Schema({
    quote_id : {
        type:String,
        required:true
    },
    quote_owner: {
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
    quote_source: {
        type:String,
        required:true
    },
    quote_title: {
        type:String,
        required:true
    },
    quote_type: {
        type:String,
        required:true
    },
    referral: {
        type:String,
        required:true
    },
    industry: {
        type:String,
        required:true
    },
    estimated_value:{
        type:String,
        required:true
    },
    quote_status: {
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
    requirement_text:{
        type:String,
        required:true
    },
    product_services: {
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    attachment:{
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
    taxes:{
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
    warrenty:{
        type:String,
        required:true
    },
    quote_validity:{
        type:String,
        required:true
    },
    remark:{
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
    edit_status: {
        type:Boolean,
        required:true
    }
})

module.exports=quoteSchema