const { render } = require('ejs')
const CollectionCenterModal = require('../../models/EPR_MODELS/CollectionCenterModal')

function collectioncenter(req,res){
    let {
        collection_center_id,
            user_id,
            collection_center_name,
            collection_type,
            alias_name,
            collection_state,
            collection_district,
            collection_city,
            collection_ulb,
            type_collection_center,
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
            monthly_qty_mlp,
            population,
            remark ,
        saveclicked
    }=req.body
CollectionCenterModal.countDocuments({ collection_center_id},(err,count)=>{
    if(err)res.json(err)
    if(count===0){
        const collectioncenter = new CollectionCenterModal({
            collection_center_id,
            user_id,
            collection_center_name,
            collection_type,
            alias_name,
            collection_state,
            collection_district,
            collection_city,
            collection_ulb,
            type_collection_center,
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
            monthly_qty_mlp,
            population,
            remark 
        })
        collectioncenter.save()
        .then(function(result){
            res.send(result)
        })
    }else{
        if(saveclicked){
        CollectionCenterModal.findOneAndUpdate({collection_center_id},{
            user_id,
            collection_center_name,
            collection_type,
            alias_name,
            collection_state,
            collection_district,
            collection_city,
            collection_ulb,
            type_collection_center,
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
            monthly_qty_mlp,
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
function collectioncenter_delete(req,res){
let collection_center_id= req.params.id
CollectionCenterModal.findOneAndDelete({collection_center_id})
.exec(function(err,result){
    if(err)
        res.json(err)
    else
    res.json({result,msg:"detete data"})
})
}
function collectioncenter_view(req,res){
    let _id= req.params.id
    CollectionCenterModal.find({_id})
    .exec(function(err,result){
        if(err)
            res.json(err)
        else
        res.json({result,msg:"view collectioncenter data"})
    })

    }
function get_all(req,res){
        CollectionCenterModal.find({}).then((result)=>{
            res.json({status:200,result})
        })
    }
function collection_update(req,res){
    let _id=req.params._id
    console.log(req.body)
    let{
        collection_center_name,
        collection_type,
        alias_name,
        collection_state,
        collection_district,
        collection_city,
        collection_ulb,
        type_collection_center,
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
        monthly_qty_mlp,
        population,
        remark 
    }=req.body
    CollectionCenterModal.findByIdAndUpdate({_id:_id},{
        collection_center_name,
        collection_type,
        alias_name,
        collection_state,
        collection_district,
        collection_city,
        collection_ulb,
        type_collection_center,
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
        monthly_qty_mlp,
        population,
        remark 
    }).then(()=>{
        res.json("updated!!")
    }).catch((err)=>{res.json(err)})
}

module.exports= {collectioncenter,collectioncenter_delete,collectioncenter_view,get_all,collection_update}