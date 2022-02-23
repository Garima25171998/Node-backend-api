const express = require('express')
const router = express.Router()

const {target,target_view,get_all,update_target,target_delete}=require('../../controllers/EPR_CONTROLLERS/TargetController')

router.post("/",target)

router.get('/gettargetbyid/:id',target_view)
router.get('/getalltarget',get_all)
router.post('/targetupdatebyid/:_id',update_target)
router.delete("/deletetarget/:id",target_delete)
module.exports=router