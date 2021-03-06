const mongoose = require('mongoose')

const customerSchema=mongoose.Schema({
    customer_id:{
        type:String},
    user_id:{
            type:String
        },
        industry_type:{
            type:String
        },
    organization_name:{
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
    secondary_email:{
        type:String
    },
    reg_address1:{
        type:String
    },
    reg_address2:{
     type:String
    },
    reg_zipcode:{
        type:String
    },
    reg_state:{
        type:String
    },
    reg_city:{
        type:String
    },
    reg_country:{
        type:String
    },
    com_address1:{
        type:String
    },
    com_address2:{
        type:String
    },
    com_zipcode:{
        type:String
    },
    com_state:{
        type:String
    },
    com_city:{
        type:String
    },
    com_country:{
        type:String
    },
    com_phone:{
        type:String
    },
    com_mobile:{
        type:String
    },
    com_email:{
        type:String
    },
    com_secondary_email:{
        type:String
    },
    pan_no:{
        type:String
    },
    msme_no:{
        type:String
    },
    cin_no:{
        type:String
    },
    gst_no:{
        type:String
    },
    cpcb_registration:{
        type:String
    },
    cpcb_validity:{
        type:String
    },
    spcb_registration:{
        type:String
    },
    spcb_validity:{
        type:String
    },
    custom_1:{
        type:String
    },
    custom_2:{
        type:String
    },
    remark:{
        type:String
    }

})

// model//
const CoustomerModel=mongoose.model('epr_customer',customerSchema)
module.exports=CoustomerModel