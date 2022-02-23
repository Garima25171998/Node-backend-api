const ApiKeyModel=require("../models/ApikeyGenrate")
const uuidAPIKey=require('uuid-apikey')


const generateApiKey=(req,res)=>{
    const ApiKeygen= uuidAPIKey.create()
    const ApiKey= new ApiKeyModel({

        api_key:ApiKeygen.apiKey,
        uuid:ApiKeygen.uuid,
        date:new Date()
    })
     ApiKey.save()
    .then((result)=>{
            res.send(`Api Key : ${result.api_key}`)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports={generateApiKey}