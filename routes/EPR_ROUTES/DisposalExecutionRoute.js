const express = require('express')
const router = express.Router()

const {disposalexecution,get_all,disposalexecution_view,update_disposalexecution}=require('../../controllers/EPR_CONTROLLERS/DisposalExecutionController')


router.post("/",disposalexecution)
router.get("/getalldisposalexecution",get_all)
router.get('/getdisposalexecutionbyid/:id',disposalexecution_view)
router.post('/updatedisposalexecution/:_id',update_disposalexecution)
module.exports=router