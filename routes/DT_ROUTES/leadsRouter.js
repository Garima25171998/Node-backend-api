const express = require('express');
const router = express.Router();
const {savelead,getlead,getleadbyid,leadLogs} = require('../../controllers/DT_CONTROLLERS/leads/leadController')

router.get('/createlead',function(req, res) {
    res.render('leads/form');
})
// router.get('/cratelead',function(req, res) {
//     res.render('leads/index',{data:null});
// })



router.post('/savelead',savelead)
router.get('/getleads',getlead)

router.get('/getleadbyid',getleadbyid)
router.get('/leadlogs',leadLogs)


module.exports=router