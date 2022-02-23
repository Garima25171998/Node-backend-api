const express = require('express')
const router = express.Router()

const {loginUser,CheckUserEmail,SendMail,VerifyOtp,getUser} = require('../../controllers/DT_CONTROLLERS/Login/LoginController.js')

router.post('/',loginUser)
router.post('/checkemail',CheckUserEmail)
router.post('/sendmail',SendMail)
router.post('/verify-otp',VerifyOtp)
router.post('/get-user',getUser)

module.exports=router