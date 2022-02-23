const mongoose = require('mongoose')

const TargetSchema=mongoose.Schema({
    target_id:{
        type:String
    },
    user_id:{
        type:String
    },
    target_info:{
        type:Array
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
const TargetModel=mongoose.model('epr_taget',TargetSchema)
module.exports=TargetModel