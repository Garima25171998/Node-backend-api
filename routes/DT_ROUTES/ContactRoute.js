const express = require('express');
const router = express.Router()
const {createContact,getContactDetails,getAllContact,deleteContact,getCompanyContact}=require('../../controllers/DT_CONTROLLERS/contact/ContactController')

router.get('/create-contact',(req,res)=>{
    res.render('contact/form')
})

router.post('/create-contact',createContact)
router.get('/get-contact/:id',getContactDetails)
router.get('/getallcontact',getAllContact)
router.get('/getcompanycontact',getCompanyContact)
router.delete('/deletecontact/:id',deleteContact)

module.exports= router