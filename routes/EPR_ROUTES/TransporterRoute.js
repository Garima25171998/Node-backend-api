const express=require('express')
const router=express.Router()

const {transporter,transporter_delete,transporter_view,get_all,update_transporter} = require('../../controllers/EPR_CONTROLLERS/TransporterController')

router.post('/',transporter)
router.delete('/delete/:id',transporter_delete)
router.get('/gettransporterbyid/:id',transporter_view)
router.get('/getalltransporter',get_all)
router.post('/updatetransporterbyid/:_id',update_transporter)

module.exports=router