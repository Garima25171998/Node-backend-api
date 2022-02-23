const mongoose = require('mongoose');
const ContactLogSchema=require('../Schema/ContactLogSchema')

const ContactLogModel = mongoose.model('bl_contact-log',ContactLogSchema)

module.exports=ContactLogModel