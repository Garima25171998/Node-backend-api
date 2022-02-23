const express = require('express')
const router = express.Router()
const {attachment}=require('../../controllers/EPR_CONTROLLERS/AttachmentController')
router.post('/',attachment)

module.exports=router