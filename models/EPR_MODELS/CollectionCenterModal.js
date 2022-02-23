const mongoose = require('mongoose')

const collectionCenterSchema=mongoose.Schema({
    collection_center_id:{
        type:String
    },
    user_id:{
        type:String
    },
    collection_center_name:{
        type:String
    },
    collection_type:{
        type:String
    },
    alias_name:{
        type:String
    },
    collection_state:{
        type:String
    },
    collection_district:{
        type:String
    },
    collection_city:{
        type:String
    },
    collection_ulb:{
        type:String
    },
    type_collection_center:{
        type:String
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    title:{
        type:String
    },
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    phone:{
        type:String
    },
    mobile:{
        type:String
    },
    email:{
        type:String
    },
    monthly_qty_mlp:{
        type:String
    },
    population:{
        type:String
    },
    remark:{
        type:String
    }


})
// model//
const CollectionCenterModal=mongoose.model('epr_collectioncenter',collectionCenterSchema)
module.exports=CollectionCenterModal