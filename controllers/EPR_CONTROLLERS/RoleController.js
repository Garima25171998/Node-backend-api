const RoleModal =require('../../models/EPR_MODELS/RoleModel')

function role(req,res){
    let{
        role_name,
        description,
        customerview,
        customercreate,
        customeredit,
        customerdelete,
      ulbview,
      ulbcreate,
      ulbedit,
      ulbdelete,
      collectioncenterview,
      collectioncentercreate,
      collectioncenteredit,
      collectioncenterdelete,
      transporterview,
      transportercreate,
      transporteredit,
      transporterdelete,
      disposalview,
      disposalcreate,
      disposaledit,
      disposaldelete,
        userview,
        usercreate,
        useredit,
        userdelete,
        roleview,
        rolecreate,
        roleedit,
        roledelete,
        order_op,
        target,
        collection_disposal_execution, 
    }=req.body
    const role = new RoleModal({
        role_name,
        description,
        customerview,
        customercreate,
        customeredit,
        customerdelete,
      ulbview,
      ulbcreate,
      ulbedit,
      ulbdelete,
      collectioncenterview,
      collectioncentercreate,
      collectioncenteredit,
      collectioncenterdelete,
      transporterview,
      transportercreate,
      transporteredit,
      transporterdelete,
      disposalview,
      disposalcreate,
      disposaledit,
      disposaldelete,
        userview,
        usercreate,
        useredit,
        userdelete,
        roleview,
        rolecreate,
        roleedit,
        roledelete,
        order_op,
        target,
        collection_disposal_execution, 
      })
      role.save()
      .then(function(result){
          res.json({status:200,message:'Role Created Successfully!!'})
      })
      .catch((err)=>{
          res.json({status:500,message:'something went wrong',err})
      })
  
}
    module.exports={role}

