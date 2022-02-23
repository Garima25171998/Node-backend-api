const UserModal =require('../../models/EPR_MODELS/UserModel')

var bcrypt = require('bcryptjs');

function user(req,res){
   let{
    username,
     email,
     phone,
     designation,
     password,
     role
   }=req.body

   let hashPassword=(password)=>{
    let salt = bcrypt.genSaltSync(10);
            // var hashedPassword = bcrypt.hashSync(password, salt);
            var hashedPassword =bcrypt.hashSync(password, salt)
            return hashedPassword
   }
           const user = new UserModal({
             username,
             email,
             phone,
             designation,
             password:hashPassword(password),
             role
           })
           user.save()
           .then(function(result){
               res.json({status:200,message:'User Created Successfully!!'})
           })
           .catch((err)=>{
               res.json({status:500,message:'something went wrong',err})
           })
       
   }
   module.exports={user}

