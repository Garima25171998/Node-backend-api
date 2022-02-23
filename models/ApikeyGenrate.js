const mongoose = require('mongoose');
const ApikeySchema=mongoose.Schema({
    api_key:{
        type:String,
        required:true
    },
    uuid:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})

const ApiKeyModel=mongoose.model('api_key',ApikeySchema)
module.exports=ApiKeyModel;