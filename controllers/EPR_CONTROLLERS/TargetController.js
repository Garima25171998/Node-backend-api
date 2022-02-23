const TargetModel =require('../../models/EPR_MODELS/TargetModel')
const TargetSettingModel = require('../../models/EPR_MODELS/TargetSettingModel')

function target(req,res){
    let date=new Date()
let{
    target_id,
    user_id,
    target_info,
    created_at,
    updated_at,
    status
}=req.body

target_info.map((item,index)=>{

    target_info[index].created_at=date
})
const target = new TargetModel({
    target_id,
    user_id,
    target_info,
    created_at:date,
    updated_at,
    status
})
target.save()
.then(function(result){
    target_info.map((item,index)=>{
        const TargetSetting= new TargetSettingModel({
            material_name:item.material_name,
            state:item.state,
            city:item.city,
            ulb:item.ulb,
            id:result._doc._id,
            collection_center:item.collection_center,
            collection_target:item.collection_target,
            target_date:item.target_date,
            created_at:date,
            updated_at:item.updated_at,
            status:item.status
        })
        TargetSetting.save()
        .then((data)=>{
            result.target_info[index]._id=data._doc._id
        })
        target_info[index].created_at=date
    })
    res.send(result)
}) 
.catch((err)=>{
    res.send({status:400,save:false,message:"error"})
})

}

function target_view(req,res){
    let _id = req.params.id
TargetModel.find({_id})
.exec(function(err,result){
    if(err){
        res.json(err)
    }else{
        res.json({result,msg:"view data"}) 
    }
})
}

function get_all(req,res){
 
    TargetModel.find({}).then((result)=>{
        
        res.json({status:200,result})
    })
}

function update_target(req,res){
    let date=new Date()
    let _id=req.params._id
      console.log(req.body)
      let{
        target_id,
        user_id,
        target_info,
        created_at,
        updated_at,
        status
    }=req.body
    target_info.map((item,index)=>{

        target_info[index].updated_at=date
        TargetSettingModel.findOneAndDelete({id:_id})


          const TargetSetting= new TargetSettingModel({
            material_name:item.material_name,
            state:item.state,
            city:item.city,
            ulb:item.ulb,
            id:_id,
            collection_center:item.collection_center,
            collection_target:item.collection_target,
            target_date:item.target_date,
            created_at:date,
            updated_at:item.updated_at,
            status:item.status
        })
        TargetSetting.save()
        .then((data)=>{
            result.target_info[index]._id=data._doc._id
        })
    })
    
     TargetModel.findOneAndUpdate({_id:_id},{
        target_id,
        user_id,
        target_info,
        created_at,
        updated_at:new Date(),
        status
      })
      .then(()=>{
          res.json("updated!!")
      }).catch((err)=>{res.json(err)})
      
  
      
  }
  function target_delete(req,res){
    let _id=req.params.id
    
console.log(_id,typeof(_id))
TargetModel.findOneAndDelete({_id})
.exec(function(err,result){
    if(err)
            res.json(err)
        else
        res.json({status:200,delete:true,message:"Data Delete Susuccessfully"})
})
}
module.exports={target,target_view,get_all,update_target,target_delete}