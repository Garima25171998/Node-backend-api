const express= require('express')
const router = express.Router()
const {collectioncenter,collectioncenter_delete,collectioncenter_view,get_all,collection_update} = require('../../controllers/EPR_CONTROLLERS/CollectionCenterController')

router.post("/",collectioncenter)
router.delete("/delete/:id",collectioncenter_delete)
router.get("/getcollectioncenterbyid/:id",collectioncenter_view)
router.get('/getallcollectioncenter',get_all)
router.post('/updatetallcollectionbyid/:_id',collection_update)
module.exports=router


