
const mongoose = require("mongoose")
const PoSchema=mongoose.Schema({
PO_id:{
        type:String
    },
attachments:{
    type:Array
},
remark:{
    type:String
},
customer_id:{
    type:String
},
materials:{
    type:Array
},
user_id:{
    type:String
},
created_at:{
    type:Date
},
updated_at:{
    type:Date
},
status:{
    type:Boolean,default:true
}
})

const PoModel=mongoose.model('epr_orderpo',PoSchema)
module.exports=PoModel













