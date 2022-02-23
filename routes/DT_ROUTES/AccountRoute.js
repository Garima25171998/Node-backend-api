const express = require('express');
const router = express.Router()
const {createAccount,getAccountDetails,getAllAccount,getAccountLogs,deleteAccount}= require('../../controllers/DT_CONTROLLERS/accounts/AccountController')

router.post('/create-account',createAccount)
router.get('/getaccountdetails/:id',getAccountDetails)
router.get('/getallaccounts',getAllAccount)
router.get('/getaccountlogs',getAccountLogs)
router.delete('/deleteaccount/:id',deleteAccount)

router.get('/create-account',function(req, res) {
    res.render('account/form');
  })

module.exports=router