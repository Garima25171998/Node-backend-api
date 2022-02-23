const DisposalExecutionModel =require('../../models/EPR_MODELS/DisposalExecutionModel')
function disposalexecution(req,res){
    let{
        material_name,
        state,
        city,
        ulb,
        collection_center,
        disposal_facility_pwpf,
        transporter_name,
        mobile_no,
        vehicle_no,
        driver_name,
        driver_mobile_no,
        bill_t_no,
        e_way_bill,
        invoice_no,
        payment,
        collection_date_time,
        collection_material_weight,
        collection_remark,
        disposal_date_time,
        disposal_material_weight,
        disposal_remark,
        attachments,
        created_at,
        updated_at,
        status
    }=req.body
    const disposalexecution = new DisposalExecutionModel({
        material_name,
        state,
        city,
        ulb,
        collection_center,
        disposal_facility_pwpf,
        transporter_name,
        mobile_no,
        vehicle_no,
        driver_name,
        driver_mobile_no,
        bill_t_no,
        e_way_bill,
        invoice_no,
        payment,
        collection_date_time,
        collection_material_weight,
        collection_remark,
        disposal_date_time,
        disposal_material_weight,
        disposal_remark,
        attachments,
        created_at:new Date(),
        updated_at,
        status
    })
    disposalexecution .save()
.then(function(result){
    res.send(result)
}) 
.catch((err)=>{
    res.send({status:400,save:false,message:"error"})
})

}
function get_all(req,res){
    DisposalExecutionModel.find({}).then((result)=>{
        res.json({status:200,result})
    })
}
function disposalexecution_view(req,res){
    
    let _id = req.params.id
    DisposalExecutionModel.find({_id})
    .exec(function(err,result){
        if(err)
        res.json(err)
        else
        res.json({result,msg:"view data"})

    })
}
function update_disposalexecution(req,res){
  let _id=req.params._id
    console.log(req.body)
    let{
        material_name,
        state,
        city,
        ulb,
        collection_center,
        disposal_facility_pwpf,
        transporter_name,
        mobile_no,
        vehicle_no,
        driver_name,
        driver_mobile_no,
        bill_t_no,
        e_way_bill,
        invoice_no,
        payment,
        collection_date_time,
        collection_material_weight,
        collection_remark,
        disposal_date_time,
        disposal_material_weight,
        disposal_remark,
        attachments,
        created_at,
        updated_at,
        status
    }=req.body
    DisposalExecutionModel.findOneAndUpdate({_id:_id},{
        material_name,
        state,
        city,
        ulb,
        collection_center,
        disposal_facility_pwpf,
        transporter_name,
        mobile_no,
        vehicle_no,
        driver_name,
        driver_mobile_no,
        bill_t_no,
        e_way_bill,
        invoice_no,
        payment,
        collection_date_time,
        collection_material_weight,
        collection_remark,
        disposal_date_time,
        disposal_material_weight,
        disposal_remark,
        attachments,
        created_at,
        updated_at:new Date(),
        status
    })
    .then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
    

    
}
module.exports={disposalexecution,get_all,disposalexecution_view,update_disposalexecution}