const userModel=require('../../../models/EPR_MODELS/LoginModel');
const OtpModel=require('../../../models/EPR_MODELS/OtpSendModel')
const crypto = require('crypto')
const config=require('./config.json')
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = config.api_key;


var md5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

var validatePassword = function (plainPass, hashedPass, callback) {
    var salt = hashedPass.substr(0, 10);
    var validHash = salt + md5(plainPass + salt);
    console.log(validHash)
    callback(null, hashedPass === validHash);
}

const loginUser=async(req,res)=>{
    let {email,password}=req.body
    // console.log(req.body)
    // let email="ashish.maurya@troology.com"
  await userModel.findOne({email:email}).exec((e,results)=>{
    // console.log(results)
    // console.log(results._doc.password)
    if(!results){
       return res.json({message:"User Not Found!",status:404})
    }else{

        validatePassword(password,results._doc.password,(e,match)=>{
            if(match)
            return res.json({results,message:'success',status:200})
            else 
            return res.json({message:"incorrect credentials",status:401})
        })
    }
        // res.send(results)
   })
}


const CheckUserEmail=(req,res)=>{
    let {email}=req.body
    userModel.findOne({email:email}).exec((e,results)=>{
        if(results){
            return res.json({message:"Valid Email! User Found",status:200})  
        }else{
            return res.json({message:"Invalid Email! User Not Found",status:404})
        }
    })
}

const SendMail=(req,res)=>{
    let {email}=req.body
    let Otp=Math.floor(Math.random()*100000)
    userModel.findOne({email:email}).exec((e,results)=>{
        if(results){
            var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

            var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

            sendSmtpEmail = {
                sender: {
                email: config.sender_mail,
                name: config.sender_name,
                },
                to: [
                {
                    email: email,
                    
                },
                ],
                subject: "BigLeap Email For Login Otp",
                htmlContent: `<html ><head></head><body><p>Email from BigLeap</p><p>Otp Email For Login</p><br/><br/><br/><center><p>Your Otp For Login Is ${Otp}</p><p>Enter This Otp TO Proceed to Login</p></center></body></html>`,
                headers: {
                "api-key":
                    "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",
                accept: "application/json",
                "content-type": "application/json",
                },
            };

            apiInstance.sendTransacEmail(sendSmtpEmail).then(
                function () {
                    OtpModel.countDocuments({email},(err,count)=>{
                        if(count===0){
                            let saveotp=new OtpModel({
                                email:email,
                                otp:Otp
                            })
                            saveotp.save()
                            .then(()=>{
                                res.json({message:"Email Sent Successfully",status:200})
                            })
                        }else{
                            OtpModel.findOneAndUpdate({email},{otp:Otp})
                            .then(()=>{
                                res.json({message:"Email Sent Successfully",status:200})
                            })
                        }
                    })
                    
                },
                function (error) {
                    res.json({message:"Something went Wrong ! Try Again",status:403})
                    console.error(error);
                }
            );
               
        }else{
             res.json({message:"Invalid Email! User Not Found",status:404})
        }
    })
}

const getUser=(req,res)=>{

    let {email}=req.body
    console.log(email)
    userModel.findOne({email}).exec((e,result)=>{
        if(e) throw e
        res.json({status:200,result})
    })
}

const VerifyOtp=(req,res)=>{
    let {otp,email}=req.body
    console.log(otp,email)
    OtpModel.find({email}).exec((e,results)=>{
        if(results){
            console.log(results[0]._doc.otp,otp)
            if(results[0]._doc.otp===otp){
                userModel.find({email}).exec((e,result)=>{
                    res.json({message:'Valid Otp',results:result,status:200})
                })
                
            }else{
                res.json({message:'InValid Otp',status:401})
                
            }
        }
    })
}

function user(req,res){
    let errors = [];
    userModel.find({email:req.params.email}).then(email=>{
        if(email){
            res.json("This Is Your Details") 
            // res.json(email) 
        }else{
            res.json("I have no details")
        }
    })
}

module.exports={loginUser,CheckUserEmail,SendMail,VerifyOtp,getUser,user}