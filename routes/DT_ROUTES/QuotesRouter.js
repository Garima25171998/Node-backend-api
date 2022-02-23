const express = require('express');
const router = express.Router();
const {saveQuote,getQuotes,getQuoteById,getQuoteLog} = require('../../controllers/DT_CONTROLLERS/quotes/QuoteController')

router.get('/create-quote',function(req, res) {
    res.render('quote/form');
  })

router.post('/create-quote',saveQuote)
router.get('/getquote',getQuotes)
router.get('/getquotebyid',getQuoteById)
router.get('/getquotelogs',getQuoteLog)
module.exports=router