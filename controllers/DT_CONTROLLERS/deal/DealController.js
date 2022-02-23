const DealModel = require('../../../models/DT_MODELS/Deal/DealModel')
const DealLogModel = require('../../../models/DT_MODELS/Deal/DealLogModel')

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


const CreateDeal=(req,res)=>{
    
          
            let { 
                deal_id,
                deal_owner,
                deal_source,
                deal_type,
                account_id,
                referral,
                deal_title,
                product_servises,
                billing_address,
                shipping_address,
                deal_status_stage,
                created_by,
                created_date_time,
                modified_by,
                notes,
                attachments,
                terms_condition
        }=req.body

        deal_id=deal_id?deal_id:Math.floor(Math.random()*1000000)
        DealModel.countDocuments({deal_id},async(err,count)=>{
           
            if(count===0){
                let date=new Date()
                const deal=await new DealModel({
                    deal_id,
                    deal_owner,
                    deal_source,
                    deal_type,
                    account_id,
                    referral,
                    pre_deal_type,
                    deal_title,
                    product_servises,
                    billing_address,
                    shipping_address,
                    deal_status_stage,
                    created_by,
                    created_date_time:date,
                    modified_by:null,
                    modified_date_time:null,
                    notes,
                    attachments,
                    terms_condition,
                    edit_status:true
                })
                let dealLog=await new DealLogModel({
                    deal_id,
                    deal_owner,
                    deal_source,
                    deal_type,
                    account_id,
                    referral,
                    pre_deal_type,
                    deal_title,
                    product_servises,
                    billing_address,
                    shipping_address,
                    deal_status_stage,
                    created_by,
                    created_date_time:date,
                    modified_by:null,
                    modified_date_time:null,
                    notes,
                    attachments,
                    terms_condition,
                    edit_status:true
                })
                await deal.save()
                .then((resp)=>{
                    dealLog.save().then(()=>{
                        res.send(resp)
                    })
                })
            }else{
                let update
                let date = new Date()
                await DealModel.find({deal_id})
                .then((result)=>{
                    let data={
                        deal_owner:result[0].deal_owner,
                        deal_source:result[0].deal_source,
                        deal_type:result[0].deal_type,
                        account_id:result[0].account_id,
                        referral:result[0].referral,
                        pre_deal_type:result[0].pre_deal_type,
                        deal_title:result[0].deal_title,
                        product_servises:result[0].product_servises,
                        billing_address:result[0].billing_address,
                        shipping_address:result[0].shipping_address,
                        deal_status_stage:result[0].deal_status_stage,
                        notes:result[0].notes,
                        attachments:result[0].attachments,
                        terms_condition:result[0].terms_condition,
                    }
                    if(compareData(data,{
                        deal_owner,
                        deal_source,
                        deal_type,
                        account_id,
                        referral,
                        pre_deal_type,
                        deal_title,
                        product_servises,
                        billing_address,
                        shipping_address,
                        deal_status_stage,
                        notes,
                        attachments,
                        terms_condition
                    })){
                        update=false
                    }else{
                        update=true
                    }
                })
                if(update){
                    let dealLog= await new DealLogModel({
                        deal_id,
                        deal_owner,
                        deal_source,
                        deal_type,
                        account_id,
                        referral,
                        pre_deal_type,
                        deal_title,
                        product_servises,
                        billing_address,
                        shipping_address,
                        deal_status_stage,
                        created_by,
                        created_date_time,
                        modified_by,
                        modified_date_time:date,
                        notes,
                        attachments,
                        terms_condition,
                        edit_status:true
                    })
                    await DealModel.findOneAndUpdate({deal_id},{
                        deal_owner,
                        deal_source,
                        deal_type,
                        account_id,
                        referral,
                        pre_deal_type,
                        deal_title,
                        product_servises,
                        billing_address,
                        shipping_address,
                        deal_status_stage,
                        created_by,
                        created_date_time,
                        modified_by,
                        modified_date_time:date,
                        notes,
                        attachments,
                        terms_condition,
                        edit_status:true
                    }).then(()=>{
                        dealLog.save()
                        .then(()=>{
                            res.send({msg:"record updated",update:true})
                        })
                    })
                }else{
                    res.send({msg:"no changes in data",update:false})
                }
            }
        })
        

}

const getDeals=(req,res)=>{
   
                DealModel.find()
                .then((results)=>{
                    res.send(results)
                })
}
const getDealByID=(req,res)=>{
    let deal_id=req.query.dealid
    
            if(deal_id){

                DealModel.find({deal_id})
                .then((results)=>{
                    res.send(results)
                })
            }else{
                res.send("Plaese pass deal id with request url")
            }
           
}
const getDealLogs=(req,res)=>{
    let deal_id=req.query.dealid
    
            if(deal_id){

                DealLogModel.find({deal_id})
                .then((results)=>{
                    res.send(results)
                })
            }else{
                res.send("Plaese pass deal id with request url")
            }
            
}


module.exports={CreateDeal,getDeals,getDealByID,getDealLogs}