const DisposalModel =require('../../models/EPR_MODELS/DisposalModel')
function disposal(req,res){
    let {
        disposal_id,
        company_type,
        user_id,
        disposal_company_name,
        disposal_state,
        disposal_city,
        plant_name,
        alias_name,
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        town,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        monthly_qty_mlp,
        population,
        attachments,
        created_at,
        updated_at,
        saveclicked   
    }=req.body
DisposalModel.countDocuments({ disposal_id},(err,count)=>{
    if(err) res.json(err)
    if(count===0){
        const disposal = new DisposalModel({
        disposal_id,
        user_id,
        company_type,
        disposal_company_name,
        disposal_state,
        disposal_city,
        plant_name,
        alias_name,
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        town,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        monthly_qty_mlp,
        population,
        attachments,
        created_at:new Date(),
        updated_at
        })
       disposal .save()
        .then(function(result){
            res.send(result)
        })
    }else{
        if(saveclicked){
        DisposalModel.findOneAndUpdate({disposal_id},{
            company_type,
            disposal_company_name,
            user_id,
            disposal_state,
            disposal_city,
            plant_name,
            alias_name,
            gstin,
            address,
            state,
            city,
            latitude,
            longitude,
            town,
            title,
            first_name,
            last_name,
            phone,
            mobile,
            email,
            monthly_qty_mlp,
            population,
            attachments,
            created_at,
        updated_at:new Date()
        }).then(()=>{
            res.json("updated!!")
        })
    }else{
        res.json("click save to update")
    }
    }
})
}
function disposal_delete(req,res){
    
    let disposal_id = req.params.id
    DisposalModel.findOneAndDelete({disposal_id})
    .exec(function(err,result){
        if(err)
        res.json(err)
        else
        res.json({result,msg:"deleted data"})

    })
}
function disposal_view(req,res){
    
    let _id = req.params.id
    DisposalModel.find({_id})
    .exec(function(err,result){
        if(err)
        res.json(err)
        else
        res.json({result,msg:"view data"})

    })
}
function get_all(req,res){
    DisposalModel.find({}).then((result)=>{
        res.json({status:200,result})
    })
}

function update_disposal(req,res){
    let _id=req.params._id
    let{

        company_type,
        user_id,
        disposal_company_name,
        disposal_state,
        disposal_city,
        plant_name,
        alias_name,
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        town,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        monthly_qty_mlp,
        population,
        created_at,
        attachments,
        updated_at
    }=req.body
  
    DisposalModel.findByIdAndUpdate({_id:_id},{
        company_type,
        user_id,
        disposal_company_name,
        disposal_state,
        disposal_city,
        plant_name,
        alias_name,
        gstin,
        address,
        state,
        city,
        latitude,
        longitude,
        town,
        title,
        first_name,
        last_name,
        phone,
        mobile,
        email,
        monthly_qty_mlp,
        population,
        attachments,
        created_at,
        updated_at:new Date()
    }).then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
}
         
            
        
    

module.exports={disposal,disposal_delete,disposal_view,get_all,update_disposal}