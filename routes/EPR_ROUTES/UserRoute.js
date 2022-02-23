const express = require('express')
const router = express.Router()

const {user}=require('../../controllers/EPR_CONTROLLERS/UserController')

router.post("/",user)


module.exports=router