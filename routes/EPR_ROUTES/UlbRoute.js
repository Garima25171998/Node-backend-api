const express= require('express')
const router = express.Router()
const {ulb,ulb_delete,ulb_view,check_email,get_all,ulb_update}= require('../../controllers/EPR_CONTROLLERS/UlbController')

router.post('/',ulb)
router.delete('/delete/:id',ulb_delete)
router.get('/getulbbyid/:id',ulb_view)
router.post('/email',check_email)
router.get('/getallulb',get_all)
router.post('/updateulbbyid/:_id',ulb_update)


module.exports=router

