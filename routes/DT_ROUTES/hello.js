const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("hiii !!!!!!!!!")
})
router.get('/get',(req,res)=>{
    res.send("hiii !!!!!!!!!")
})
module.exports=router