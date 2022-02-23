const RoleModal =require('../../models/DT_MODELS/RoleModel')

function role(req,res){
    let{
        role_name,
        description,
        leadview,
        leadcreate,
        leadedit,
        leaddelete,
        leadverifier,
        leadapprover,
        quoteview,
        quotecreate,
        quoteedit,
        quotedelete,
        quoteverifier,
        quoteapprover,
        dealview,
        dealcreate,
        dealedit,
        dealdelete,
        dealverifier,
        dealapprover,
        accountview,
        accountcreate,
        accountedit,
        accountdelete,
        contactview,
        contactcreate,
        contactedit,
        contactdelete,
        userview,
        usercreate,
        useredit,
        userdelete,
        roleview,
        rolecreate,
        roleedit,
        roledelete,
        convertleadtoquote,
        convertquotetodeal, 
    }=req.body
    const role = new RoleModal({

        role_name,
        description,
        leadview,
        leadcreate,
        leadedit,
        leaddelete,
        leadverifier,
        leadapprover,
        quoteview,
        quotecreate,
        quoteedit,
        quotedelete,
        quoteverifier,
        quoteapprover,
        dealview,
        dealcreate,
        dealedit,
        dealdelete,
        dealverifier,
        dealapprover,
        accountview,
        accountcreate,
        accountedit,
        accountdelete,
        contactview,
        contactcreate,
        contactedit,
        contactdelete,
        userview,
        usercreate,
        useredit,
        userdelete,
        roleview,
        rolecreate,
        roleedit,
        roledelete,
        convertleadtoquote,
        convertquotetodeal,  
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

