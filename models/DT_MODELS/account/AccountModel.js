const mongoose = require('mongoose');
const AccountSchema = require('../Schema/AccountSchema');

const AccountModel = mongoose.model('bl_account',AccountSchema)

module.exports= AccountModel;