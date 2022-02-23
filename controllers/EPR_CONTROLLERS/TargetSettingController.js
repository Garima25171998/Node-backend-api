const TargetSettingModel =require('../../models/EPR_MODELS/TargetSettingModel') 
function targetsetting(req,res){
    let{

        material_name,
        state,
        city,
        ulb,
        collection_center,
        collection_target,
        target_date,
        created_at,
        updated_at,
        status
    }=req.body
    const targetsetting = new TargetSettingModel({
        material_name,
        state,
        city,
        ulb,
        collection_center,
        collection_target,
        target_date,
        created_at:new Date(),
        updated_at,
        status
    })
    targetsetting.save()
    .then(function(result){
        res.send(result)
    }) 
    .catch((err)=>{
        res.send({status:400,save:false,message:"error"})
    })
}
module.exports={targetsetting}