const express = require('express')
const router = express.Router()
const {generateApiKey} = require('../../controllers/ApiKeyGenrate')

router.get('/',generateApiKey)

module.exports=router