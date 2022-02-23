const PoModel =require('../../models/EPR_MODELS/PoModel')
const PoMaterialModel=require('../../models/EPR_MODELS/PoMaterialModel')
function po(req,res){
    let {
    PO_id,
    attachments,
    remark,
    customer_id,
    materials,
    user_id,
    created_at,
    updated_at,
    status
}=req.body
const po = new PoModel({
    PO_id,
    attachments,
    remark,
    customer_id,
    materials,
    user_id,
    created_at:new Date(),
    updated_at,
    status
})
po.save()
.then(function(result){
    target_info.map((item,index)=>{
        const POmat= new PoMaterialModel({
            material_name: item.material_name,
            state: item.state,
            collection_Qty: item.collection_Qty,
            target_date: item.target_date,
            net_unit_price:item.net_unit_price,
            sub_total:item.sub_total,
            po_id:result._doc._id
        })
        POmat.save()
        .then((data)=>{
            
        })
        target_info[index].created_at=date
    })
    res.send(result)
}) 
.catch((err)=>{
    res.send({status:400,save:false,message:"error"})
})
}
function po_update(req,res){

    let _id=req.params._id
    console.log(req.body)
    let {
        PO_id,
        attachments,
        remark,
        customer_id,
        materials,
        user_id,
        created_at,
        updated_at,
        status
    }=req.body  
    PoModel.findOneAndUpdate({_id:_id},{
        PO_id,
        attachments,
        remark,
        customer_id,
        materials,
        user_id,
        created_at,
        updated_at:new Date(),
        status
    })
    .then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
    

    
}
function get_all(req,res){
    PoModel.find({}).then((result)=>{
        res.json({status:200,result})
    })
}
function po_view(req,res){
    
    let _id = req.params.id
   PoModel.find({_id})
    .exec(function(err,result){
        if(err)
        res.json(err)
        else
        res.json({result,msg:"view data"})

    })
}
module.exports={po,po_update,get_all,po_view}