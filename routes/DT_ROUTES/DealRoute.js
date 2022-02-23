const express = require('express');
const route = express.Router()

const {CreateDeal,getDeals,getDealByID,getDealLogs}=require('../../controllers/DT_CONTROLLERS/deal/DealController')

route.get('/create-deal',function(req,res){
    res.render('deal/form')
})
// route.get('/list',)
// route.get('/',)
route.post('/createdeal',CreateDeal)
route.get('/getdeals',getDeals)
route.get('/getdealbyid',getDealByID)
route.get('/getdeallogs',getDealLogs)

module.exports=route