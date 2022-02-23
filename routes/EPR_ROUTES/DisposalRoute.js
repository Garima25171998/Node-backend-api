const express= require('express')
const router = express.Router()
const {disposal,disposal_delete,disposal_view,get_all,update_disposal}= require('../../controllers/EPR_CONTROLLERS/DisposalController')

router.post("/",disposal)
router.delete("/delete/:id",disposal_delete)
router.get("/getdisposalbyid/:id",disposal_view)
router.get('/getalldisposal',get_all)
router.post('/updatedisposalbyid/:_id',update_disposal)

module.exports=router