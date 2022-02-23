const express =require('express')
const router = express.Router()

const {targetsetting}=require('../../controllers/EPR_CONTROLLERS/TargetSettingController')

router.post("/",targetsetting)

// router.get('/gettargetbyid/:id',targetsetting)
// router.get('/getalltarget',get_all)
// router.post('/targetupdatebyid/:_id',update_target)
// router.delete("/deletetarget/:id",target_delete)
module.exports=router