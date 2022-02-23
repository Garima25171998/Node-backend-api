const mongoose = require('mongoose');
const CompanySchema=require('../Schema/CompanySchema')

const CompanyModel = mongoose.model('bl_company_main',CompanySchema)

module.exports=CompanyModel