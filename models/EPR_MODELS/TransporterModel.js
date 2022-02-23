const  Mongoose  = require("mongoose")

const TransporterSchema=Mongoose.Schema({
    transporter_id:{
        type:String
    },
    transporter_name:{
        type:String
    },
    user_id:{
        type:String
    },
    gstin:{
        type:String
    },
    pan:{
        type:String
    },
    transporter_district:{
        type:String
    },
    transporter_state:{
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
    town_name:{
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
    bank_name:{
        type:String
    },
    account_no:{
        type:String
    },
    ifsc_code:{
        type:String
    },
    branch:{
        type:String
    },
    remark:{
        type:String
    },
    attachments:{
        type:Array
    },
    created_at:{
		type:Date
	},
    updated_at:{
        type:Date
    }

})
const TransporterModel=Mongoose.model('epr_transporter',TransporterSchema)
module.exports=TransporterModel