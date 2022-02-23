const mongoose = require('mongoose');
const AccountLogSchema = require('../Schema/AccountLogSchema');

const AccountLogModel = mongoose.model('bl_accountlog',AccountLogSchema)

module.exports= AccountLogModel;