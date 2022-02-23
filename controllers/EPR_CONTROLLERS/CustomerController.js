const CustomerModel =require('../../models/EPR_MODELS/CustomerModel')
function customer(req,res){
    let {
        customer_id,
        industry_type,
        user_id,
        organization_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        reg_address1,
        reg_address2,
        reg_zipcode,
        reg_state,
        reg_city,
        reg_country,
        com_address1,
        com_address2,
        com_zipcode,
        com_state,
        com_city,
        com_country,
        com_phone,
        com_mobile,
        com_email,
        com_secondary_email,
        pan_no,
        msme_no,
        cin_no,
        gst_no,
        cpcb_registration,
        cpcb_validity,
        spcb_registration,
        spcb_validity,
        custom_1,
        custom_2,
        remark
    }=req.body
    const customer = new CustomerModel({
        customer_id,
        user_id,
        industry_type,
        organization_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        reg_address1,
        reg_address2,
        reg_zipcode,
        reg_state,
        reg_city,
        reg_country,
        com_address1,
        com_address2,
        com_zipcode,
        com_state,
        com_city,
        com_country,
        com_phone,
        com_mobile,
        com_email,
        com_secondary_email,
        pan_no,
        msme_no,
        cin_no,
        gst_no,
        cpcb_registration,
        cpcb_validity,
        spcb_registration,
        spcb_validity,
        custom_1,
        custom_2,
        remark
    })
    customer.save()
    .then(function(result){
        res.send({status:200,save:true,message:"Customer Data Save"})
    }) 
    .catch((err)=>{
        res.send({status:400,save:false,message:"error"})
    })
    }
    
function customer_delete(req,res){
    let customer_id=req.params.id
    console.log(customer_id,typeof(customer_id))
    CustomerModel.findOneAndDelete({customer_id})
    .exec(function(err,result){
        if(err)
            res.json(err)
        else
        res.json({status:200,delete:true,message:"Data Delete Susuccessfully"})
    })

}

function customer_view(req,res){
    let _id=req.params.id
    CustomerModel.find({_id})
    .exec(function(err,result){
        if(err)
        res.json("error")
        else
        res.json({result,msg:"view data"})
    })
}

function customer_update(req,res){
    let _id=req.params._id
    console.log(req.body)
    let {
        industry_type,
        organization_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        reg_address1,
        reg_address2,
        reg_zipcode,
        reg_state,
        reg_city,
        reg_country,
        com_address1,
        com_address2,
        com_zipcode,
        com_state,
        com_city,
        com_country,
        com_phone,
        com_mobile,
        com_email,
        com_secondary_email,
        pan_no,
        msme_no,
        cin_no,
        gst_no,
        cpcb_registration,
        cpcb_validity,
        spcb_registration,
        spcb_validity,
        custom_1,
        custom_2,
        remark
    }=req.body
    CustomerModel.findOneAndUpdate({_id:_id},{
        industry_type,
        organization_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        reg_address1,
        reg_address2,
        reg_zipcode,
        reg_state,
        reg_city,
        reg_country,
        com_address1,
        com_address2,
        com_zipcode,
        com_state,
        com_city,
        com_country,
        com_phone,
        com_mobile,
        com_email,
        com_secondary_email,
        pan_no,
        msme_no,
        cin_no,
        gst_no,
        cpcb_registration,
        cpcb_validity,
        spcb_registration,
        spcb_validity,
        custom_1,
        custom_2,
        remark
    })
    .then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
    
}
function check_email(req,res){
    let errors = [];
    CustomerModel.findOne({email:req.body.email}).then(email=>{
        if(email){
            res.json("Email Already Exits") 
        }else{
            res.json("error")
        }
    })
}


function get_all(req,res){
    CustomerModel.find({}).then((result)=>{
        res.json({status:200,result})
    })
    }

module.exports={customer,customer_delete,customer_view,check_email,get_all,customer_update}