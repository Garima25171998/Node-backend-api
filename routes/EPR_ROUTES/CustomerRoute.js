const express = require('express')
const router = express.Router()

const {customer,customer_delete,customer_view,check_email,get_all,customer_update}=require('../../controllers/EPR_CONTROLLERS/CustomerController')

router.post("/",customer)
router.delete("/delete/:id",customer_delete)
router.get("/getbycustomer_id/:id",customer_view)
router.post("/email",check_email)
router.get("/getallcustomer",get_all)
router.post("/updatecustomerbyid/:_id",customer_update)

module.exports=router