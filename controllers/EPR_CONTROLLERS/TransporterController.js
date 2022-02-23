const TransporterModel = require('../../models/EPR_MODELS/TransporterModel')

function transporter(req,res){
    let {
        transporter_id,
        transporter_name,
        gstin,
        user_id,
        pan,
        transporter_district,
        transporter_state,
        address,
        state,
        city,
        latitude,
        longitude,
        town_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        bank_name,
        account_no,
        ifsc_code,
        branch,
        remark,
        attachments,
        created_at,
        updated_at,
        saveclicked
    }=req.body
TransporterModel.countDocuments({ transporter_id},(err,count)=>{
   if(err) res.json(err)
   if(count===0){
    const transporter = new TransporterModel({
        transporter_id,
        transporter_name,
        gstin,
        user_id,
        pan,
        transporter_district,
        transporter_state,
        address,
        state,
        city,
        latitude,
        longitude,
        town_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        bank_name,
        account_no,
        ifsc_code,
        branch,
        remark,
        attachments,
        created_at:new Date(),
        updated_at
    })
    transporter.save()
.then(function(result){
    res.send(result)
})
}else{
    if(saveclicked){
    TransporterModel.findOneAndUpdate({ transporter_id},{
        transporter_name,
        gstin,
        user_id,
        pan,
        transporter_district,
        transporter_state,
        address,
        state,
        city,
        latitude,
        longitude,
        town_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        bank_name,
        account_no,
        ifsc_code,
        branch,
        remark,
        attachments,
        created_at,
        updated_at:new Date()
    }).then(()=>{
        res.send("updated")
    })
}else{
    res.json("click save to update")
}
}
})
}

function transporter_delete(req,res){
    let transporter_id=req.params.id
    TransporterModel.findOneAndDelete({transporter_id})
    .exec(function(err,result){
        if(err)
            res.json(err)
        else
        res.json({result,msg:"detete data"})
    })
}

function transporter_view(req,res){
    let _id=req.params.id
    TransporterModel.find({_id})
    .exec(function(err,result){
        if(err)
            res.json(err)
        else
        res.json({result,msg:"View data"})
    })
}

function get_all(req,res){
    TransporterModel.find({}).then((result)=>{
        res.json({status:200,result})
    })
}

function update_transporter(req,res){
    let _id=req.params._id
    let{
       
        transporter_name,
        gstin,
        user_id,
        pan,
        transporter_district,
        transporter_state,
        address,
        state,
        city,
        latitude,
        longitude,
        town_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        bank_name,
        account_no,
        ifsc_code,
        branch,
        remark,
        attachments,
        created_at
    }=req.body 
    let date=new Date()
    TransporterModel.findByIdAndUpdate({_id:_id},{
        transporter_name,
        gstin,
        user_id,
        pan,
        transporter_district,
        transporter_state,
        address,
        state,
        city,
        latitude,
        longitude,
        town_name,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        bank_name,
        account_no,
        ifsc_code,
        branch,
        remark,
        attachments,
        created_at,
        updated_at:date
    }).then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
}

module.exports={transporter,transporter_view,transporter_delete,get_all,update_transporter}