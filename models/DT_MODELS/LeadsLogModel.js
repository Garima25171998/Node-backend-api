const mongoose = require('mongoose')
const LeadLogSchema = require('./Schema/LeadsLogSchema.js')

const LeadsLogModel=mongoose.model('bl_leads_log',LeadLogSchema)

module.exports= LeadsLogModel 