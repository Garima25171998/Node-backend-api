const express = require('express')
const router = express.Router()
const {createCompany,getCompanyDetails,getAllCompany}=require('../../controllers/DT_CONTROLLERS/company/CompanyController')

const {SaveAddress,GetAddress,DeleteAddress} = require('../../controllers/DT_CONTROLLERS/company/BranchAddressController')


router.get('/create-company',(req,res)=>{
    res.render('company/form')
})

router.post('/create-company',createCompany)

router.get('/get-all-company',getAllCompany)
router.get('/getcompanybyid/:id',getCompanyDetails)


router.post('/saveaddress',SaveAddress)
router.get('/getaddress',GetAddress)
router.delete('/deleteaddress/:id',DeleteAddress)

module.exports=router