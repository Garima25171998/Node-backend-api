const mongoose = require("mongoose")

const attachmentSchema=mongoose.Schema({
    type:{
        type:String
    },
    type_id:{
        type:String
    },
    document_type:{
        type:String
    },
    document_no:{
        type:String
    },
    file:{
        type:String
    },
    validity:{
        type:String
    }
})
const AttachmentModal=mongoose.model('epr_attachment',attachmentSchema)
module.exports=AttachmentModal