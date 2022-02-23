const express = require('express')
const router = express.Router()

const {po,po_update,get_all,po_view}=require('../../controllers/EPR_CONTROLLERS/PoController')

router.post("/",po)
router.post('/updatepobyid/:_id',po_update)
router.get('/getallpo',get_all)
router.get('/getpobyid/:id',po_view)

module.exports=router