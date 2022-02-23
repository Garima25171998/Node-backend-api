const mongoose = require('mongoose');
const LeadSchema= require('./Schema/LeadsSchema.js')

const leadModel=mongoose.model('bl_lead_main', LeadSchema)
module.exports=leadModel