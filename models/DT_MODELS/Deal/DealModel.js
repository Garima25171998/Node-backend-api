const mongoose = require('mongoose');
const DealSchema = require('../Schema/DealSchema')


const DealModel = mongoose.model('bl_deal_main',DealSchema)

module.exports= DealModel