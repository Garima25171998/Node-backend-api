const express = require('express')
const router = express.Router()

const {loginUser,CheckUserEmail,SendMail,VerifyOtp,getUser,user} = require('../../controllers/EPR_CONTROLLERS/Login/LoginController')

router.post('/',loginUser)
router.post('/checkemail',CheckUserEmail)
router.post('/sendmail',SendMail)
router.post('/verify-otp',VerifyOtp)
router.post('/get-user',getUser)
router.get('/:email',user)

module.exports=router