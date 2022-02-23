const AddressModel = require('../../../models/DT_MODELS/company/AddressModel')

const SaveAddress=(req,res)=>{

    const {
        branch_id,
        branch_name,
        branch_gst,
        branch_logo,
        address1,
        address2,
        address3,
        country,
        state,
        city,
        zipcode,
        full_address
    }=req.body

    console.log(req.body)


    const address=new AddressModel({
        branch_id,
        branch_name,
        branch_gst,
        branch_logo,
        address1,
        address2,
        address3,
        country,
        state,
        city,
        zipcode,
        full_address,
        created_at:new Date()
    })
    address.save()
    .then(() => {
        res.json({status:200,message:"Address Saved!!"})
    }).catch((err) => {
        res.json({status:500,message:"Something Went Wrong!"})
    });

}



const GetAddress=(req,res)=>{
    AddressModel.find({}).exec((err,result)=>{
        if (err)
            return res.json({status:500,message:"Something Went Wrong!!"})
        res.json({status:200,result})   
    })
}

const DeleteAddress=(req,res)=>{
    let branch_id = req.params.id
    console.log(branch_id,typeof(branch_id))
    AddressModel.findOneAndDelete({branch_id})
    .then(()=>{
        res.json({status:200,message:"Deleted Successfully!!"})
    }).catch(()=>{
        res.json({status:500,message:"Something Went Wrong!!"})
    })

}

module.exports={SaveAddress,GetAddress,DeleteAddress}

