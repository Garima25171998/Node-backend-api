const mongoose =require("mongoose")
const PomaterialSchema=mongoose.Schema({
    material_name: {
        type:String
    },
    po_id:{
      type:String
          },
      state: {
        type:String
    },
      collection_Qty: {
        type:Number
    },
      target_date: {
        type:String
    },
     
      net_unit_price: {
        type:Number
    },
      sub_total: {
        type:Number
    },
    created_at:{
      type:Date,default:new Date()
    },
    updated_at:{
        type:Date,default:new Date()
    },
    status:{
        type:Boolean,default:true
    }
})
const PoMaterialModel=mongoose.model('epr_pomaterial',PomaterialSchema)
module.exports=PoMaterialModel