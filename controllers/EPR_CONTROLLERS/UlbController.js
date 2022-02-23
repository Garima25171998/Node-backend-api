const UlbModel = require('../../models/EPR_MODELS/UlbModel')
function ulb(req,res){
    let {
        ulb_id,
        ulb_name,
        ulb_state,
        ulb_district,
        ulb_city,
        user_id,
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        monthly_oty_mlp,
        population,
        remark,
        saveclicked
    }=req.body
UlbModel.countDocuments({ulb_id},(err,count)=>{
    if(err) res.json(err)
    if(count===0){
        const ulb = new UlbModel({
            ulb_id,
                ulb_name,
                ulb_state,
                ulb_district,
                ulb_city,
                user_id,
                gstin,
                address,
                state,
                city,
                latitude,
                longitude,
                title,
                first_name,
                last_name,
                phone,
                mobile,
                email,
                secondary_email,
                monthly_oty_mlp,
                population,
                remark
        })
        ulb.save()
        .then(function(result){
            res.send({msg:"data insert"})
        })
    }else{
        if(saveclicked){
        UlbModel.findOneAndUpdate({ulb_id},{
                ulb_name,
                ulb_state,
                ulb_district,
                ulb_city,
                user_id,
                gstin,
                address,
                state,
                city,
                latitude,
                longitude,
                title,
                first_name,
                last_name,
                phone,
                mobile,
                email,
                secondary_email,
                monthly_oty_mlp,
                population,
                remark 
        }).then(()=>{
            res.json("updated!!")
        })
    }else{
        res.json("click save to update")
    }
    }
})
}
function ulb_delete(req,res){
    let  ulb_id=req.params.id
    UlbModel.findOneAndDelete({ulb_id})
    .exec(function(err,result){
        if(err)
            res.json(err)
        else
        res.json({msg:"detete data"})
    })

}
function ulb_view(req,res){
    let  _id=req.params.id
    UlbModel.find({_id})
    .exec(function(err,result){
        if(err)
            res.json(err)
        else
        res.json({result,msg:"view data"})
    })


}
function check_email(req,res){
    let errors = [];
    UlbModel.findOne({email:req.body.email}).then(email=>{
        if(email){
            res.json("Email Already Exits") 
        }else{
            res.json("error")
        }
    })
}
function get_all(req,res){
    UlbModel.find({}).then((result)=>{
        res.json({status:200,result})
    })
}

function ulb_update(req,res){
    let _id=req.params._id
    let {
        ulb_name,
        ulb_state,
        ulb_district,
        ulb_city,
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        monthly_oty_mlp,
        population,
        remark
        
    }=req.body
    UlbModel.findByIdAndUpdate({_id:_id},{
        ulb_name,
        ulb_state,
        ulb_district,
        ulb_city,
       
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        secondary_email,
        monthly_oty_mlp,
        population,
        remark
    }).then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
    
}



module.exports={ulb,ulb_delete,ulb_view,check_email,get_all,ulb_update}