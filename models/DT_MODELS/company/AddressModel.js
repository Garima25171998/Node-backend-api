const mongoose = require("mongoose")

const AddressSchema = require('../Schema/CompanyAddressSchema')

const AddressModel=mongoose.model('bl_branchAddress',AddressSchema)

module.exports=AddressModel