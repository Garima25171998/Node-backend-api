const mongoose = require('mongoose');
const quotesLogSchema = require('../Schema/QuotesLogSchema')

const QuoteLogModel = mongoose.model('bl_quote_log',quotesLogSchema)

module.exports=QuoteLogModel