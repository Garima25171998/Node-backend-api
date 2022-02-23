const mongoose = require('mongoose');
const ContactSchema=require('../Schema/ContactSchema')

const ContactModel = mongoose.model('bl_contact-main',ContactSchema)

module.exports=ContactModel