const mongoose = require('mongoose')
const quoteSchema= require('../Schema/QuotesSchema')

const quoteModel = mongoose.model('bl_quote_main',quoteSchema)

module.exports= quoteModel