const mongoose = require('mongoose');
const DealLogSchema = require('../Schema/DealLogSchema')


const DealLogModel = mongoose.model('bl_deal_log',DealLogSchema)

module.exports= DealLogModel