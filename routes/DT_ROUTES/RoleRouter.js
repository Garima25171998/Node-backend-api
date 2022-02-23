const express = require('express')
const router = express.Router()

const {role}=require('../../controllers/DT_CONTROLLERS/RoleController')

router.post("/",role)


module.exports=router