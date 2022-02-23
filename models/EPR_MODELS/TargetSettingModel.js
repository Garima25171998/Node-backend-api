const mongoose =require('mongoose')
const TargetSettingSchema=mongoose.Schema({
    material_name:{
        type:String
    },
    state:{
        type:String
    },
    city: {
        type:String
    },
    ulb:{
        type:String
    },
    collection_center:{
        type:String
    },
    collection_target:{
        type:String
    },
    target_date:{
		type:Date
	},
    created_at:{
		type:Date
	},
    updated_at:{
        type:Date
    },
    status:{
        type:Boolean,default:true
    },
    id:{
        type:String
    }
})
const TargetSettingModel=mongoose.model('epr_tagetsetting',TargetSettingSchema)
module.exports=TargetSettingModel
