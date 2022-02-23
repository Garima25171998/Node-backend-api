const AccountModel = require('../../../models/DT_MODELS/account/AccountModel');
const AccountLogModel = require('../../../models/DT_MODELS/account/AccountLogModel')

const compareData = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        console.log(obj1[key], obj2[key]);
        return false;
      }
    }
    return true;
  };

const createAccount =(req,res)=>{   
   
            let update;
            let {
                account_id,
                account_owner,
                company_name,
                industry,
                company_country,
                company_state,
                company_city,
                company_location,
                gst,
                pan,
                tan,
                cin,
                country_code,
                phone_no,
                mobile_no,
                email,
                secondary_email,
                address1,
                address2,
                address3,
                country,
                state,
                city,
                zip_code,
                remark,
                created_at
            }=req.body

                 account_id=account_id?account_id:"acc_"+Math.floor(Math.random()*1000000)
             AccountModel.countDocuments({account_id},async(err,acccount)=>{
                if(err) res.json(err)
                if(acccount===0){
                    let date = new Date()
                    
                    const Account = await new AccountModel({
                        account_id,
                        account_owner,
                        company_name,
                        industry,
                        company_country,
                        company_state,
                        company_city,
                        company_location,
                        gst,
                        pan,
                        tan,
                        cin,
                        country_code,
                        phone_no,
                        mobile_no,
                        email,
                        secondary_email,
                        address1,
                        address2,
                        address3,
                        country,
                        state,
                        city,
                        zip_code,
                        remark,
                        created_at:date,
                        modified_at:null
                    })
                    const AccountLog = await new AccountLogModel({
                        account_id,
                        account_owner,
                        company_name,
                        industry,
                        company_country,
                        company_state,
                        company_city,
                        company_location,
                        gst,
                        pan,
                        tan,
                        cin,
                        country_code,
                        phone_no,
                        mobile_no,
                        email,
                        secondary_email,
                        address1,
                        address2,
                        address3,
                        country,
                        state,
                        city,
                        zip_code,
                        remark,
                        created_at:date,
                        modified_at:null
                       })
                   await Account.save()
                    .then((resp)=>{
                        AccountLog.save().then(()=>{
                            res.json({status:200,message:'Account Craeted Sucessfully!!'})
                        })
                    })
                }else{
                   await AccountModel.find({account_id}).then((result)=>{
                        let resultData={
                            account_owner:result[0].account_owner,
                            company_name:result[0].company_name,
                            industry:result[0].industry,
                            company_country:result[0].company_country,
                            company_state:result[0].company_state,
                            company_city:result[0].company_city,
                            company_location:result[0].company_location,
                            gst:result[0].gst,
                            pan:result[0].pan,
                            tan:result[0].tan,
                            cin:result[0].cin,
                            country_code:result[0].country_code,
                            phone_no:result[0].phone_no,
                            mobile_no:result[0].mobile_no,
                            email:result[0].email,
                            secondary_email:result[0].secondary_email,
                            address1:result[0].address1,
                            address2:result[0].address2,
                            address3:result[0].address3,
                            country:result[0].country,
                            state:result[0].state,
                            city:result[0].city,
                            zip_code:result[0].zip_code,
                            remark:result[0].remark
                        }
                        if( compareData(resultData,{
                            account_owner,
                            company_name,
                            industry,
                            company_country,
                            company_state,
                            company_city,
                            company_location,
                            gst,
                            pan,
                            tan,
                            cin,
                            country_code,
                            phone_no,
                            mobile_no,
                            email,
                            secondary_email,
                            address1,
                            address2,
                            address3,
                            country,
                            state,
                            city,
                            zip_code,
                            remark})
                            ){
                                update=false
                        }else{
                            update=true
                        } 
                    })
                    if(update){
                        let update_date = new Date();
                        const AccountLog = await new AccountLogModel({
                            account_id,
                            account_owner,
                            company_name,
                            industry,
                            company_country,
                            company_state,
                            company_city,
                            company_location,
                            gst,
                            pan,
                            tan,
                            cin,
                            country_code,
                            phone_no,
                            mobile_no,
                            email,
                            secondary_email,
                            address1,
                            address2,
                            address3,
                            country,
                            state,
                            city,
                            zip_code,
                            remark,
                            created_at,
                            modified_at:update_date
                           })
                        await AccountModel.findOneAndUpdate(
                            { account_id },{account_id,
                            account_owner,
                            company_name,
                            industry,
                            company_country,
                            company_state,
                            company_city,
                            company_location,
                            gst,
                            pan,
                            tan,
                            cin,
                            country_code,
                            phone_no,
                            mobile_no,
                            email,
                            secondary_email,
                            address1,
                            address2,
                            address3,
                            country,
                            state,
                            city,
                            zip_code,
                            remark,
                            created_at,
                            modified_at:update_date
                        }
                            ).then(()=>{
                                AccountLog.save().then(()=>{
                                    res.json({status:200,message:'updated Sucessfully!!'})
                                })
                            })

                    }else {
                        res.json({status:201,message:'UpToDate ! No Changes In Data!!'})
                    }
                }
            })  
}



const getAccountDetails=(req,res)=>{
    let account_id=req.params.id
    console.log(account_id)
            AccountModel.find({account_id})
            .then((results)=>{
                console.log(results)
                res.json(results)
            })
}

const getAllAccount=(req,res)=>{
    
            AccountModel.find()
            .then((results)=>{
                res.send(results)
            })
       
}

const deleteAccount=(req,res)=>{
    let account_id=req.params.id
    AccountModel.findOneAndDelete({account_id}).exec((err,result)=>{
        if(err)
            res.json({status:500,message:"Something Went Wrong!"})
        console.log(result)
        res.json({status:200,message:"User Deleted Sucessfully!!"})
    })
}

const getAccountLogs=(req,res)=>{
    let account_id=req.query.account_id
   
            AccountLogModel.find({account_id})
            .then((results)=>{
                res.send(results)
            })
}

module.exports={createAccount,getAccountDetails,getAllAccount,getAccountLogs,deleteAccount}