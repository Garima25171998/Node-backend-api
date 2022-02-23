
const ApiKeyModel= require('./models/ApikeyGenrate')

const AuthMiddleware=(req,res,next)=>{
    console.log("middleware")
    let api_key= req.headers['apikey']
    ApiKeyModel.countDocuments({api_key},async(err,count)=>{
        if(err) res.json(err)
        console.log(count,api_key)
        if(count){
            next()
        }else{
            res.json({message:'UnAuthorized! Invalid Api Key',status:401})
        }
    })

}
module.exports=AuthMiddleware