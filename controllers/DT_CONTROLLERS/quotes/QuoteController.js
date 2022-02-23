const quotemodel= require('../../../models/DT_MODELS/quotes/QuotesModel')
const QuoteLogModel = require('../../../models/DT_MODELS/quotes/QuotesLogModel')

const compareData=(obj1,obj2)=>{
    const keys1 = Object.keys(obj1);

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        console.log(obj1[key], obj2[key]);
        return false;
      }
    }
    return true;
}

const saveQuote=(req,res)=>{
    
    let update
    let { 
        quote_id,
        quote_owner,
        quote_source,
        quotation_type,
        account_id,
        referral,
        quote_type,
        industry,
        quote_title,
        product_services,
        quote_status_stage,
        created_by,
        created_date_time,
        modified_by,
        notes,
        attachments,
        inco_terms_master,
        payment_terms_master
    }= req.body


    quote_id=quote_id?quote_id:`quote_${Math.floor(Math.random()*10000)}`

     quotemodel.countDocuments({ quote_id },async(err,count)=>{
        if(err) res.send(err)

        console.log("quote count : ",count)
        if(count===0){
            let date=new Date()
            let QuotesModel=await new quotemodel({
                quote_id,
                quote_owner,
                quote_source,
                quotation_type,
                account_id,
                referral,
                quote_type,
                industry,
                quote_title,
                product_services,
                quote_status_stage,
                created_by,
                created_date_time:date,
                modified_by:null,
                modified_date_time:null,
                notes,
                attachments,
                inco_terms_master,
                payment_terms_master,
                edit_status:true
            })
            const quotelogmodel=new QuoteLogModel({
                quote_id_main:quote_id,
                quote_owner,
                quote_source,
                quotation_type,
                account_id,
                referral,
                quote_type,
                industry,
                quote_title,
                product_services,
                quote_status_stage,
                created_by,
                created_date_time:date,
                modified_by:null,
                modified_date_time:null,
                notes,
                attachments,
                inco_terms_master,
                payment_terms_master,
                edit_status:true
            })
            await QuotesModel.save()
            .then((err,result)=>{
                if(err) res.send(err)
                quotelogmodel.save()
                .then((err)=>{
                    if(err) res.send(err)
                    res.send(result)
                }) .catch((err)=>{
                    res.send(err)
                })
            }).catch((err) => {
                res.send(err);
                console.log(err);
              });
        }else{
            await quotemodel.find({quote_id})
            .then((result)=>{
                let resultData={
                    quote_owner:result[0].quote_owner,
                    quote_source:result[0].quote_source,
                    quotation_type:result[0].quotation_type,
                    account_id:result[0].account_id,
                    referral:result[0].referral,
                    quote_type:result[0].quote_type,
                    industry:result[0].industry,
                    quote_title:result[0].quote_title,
                    product_services:result[0].product_services,
                    quote_status_stage:result[0].quote_status_stage,
                    created_by:result[0].created_by,
                    notes:result[0].notes,
                    attachments:result[0].attachments,
                    inco_terms_master:result[0].inco_terms_master,
                    payment_terms_master:result[0].payment_terms_master,
                }

                if(compareData(resultData,{
                    quote_owner,
                    quote_source,
                    quotation_type,
                    account_id,
                    referral,
                    quote_type,
                    industry,
                    quote_title,
                    product_services,
                    quote_status_stage,
                    created_by,
                    notes,
                    attachments,
                    inco_terms_master,
                    payment_terms_master
                })){
                    update=false
                }else{
                    update=true
                }
            })
            if(update){
                let date=new Date()
                const quoteLogModel=await new QuoteLogModel({
                    quote_id_main:quote_id,
                    quote_owner,
                    quote_source,
                    quotation_type,
                    account_id,
                    referral,
                    quote_type,
                    industry,
                    quote_title,
                    product_services,
                    quote_status_stage,
                    created_by,
                    created_date_time,
                    modified_by,
                    modified_date_time:date,
                    notes,
                    attachments,
                    inco_terms_master,
                    payment_terms_master,
                    edit_status:true
                })
               await quotemodel.findOneAndUpdate({quote_id},{
                quote_owner,
                quote_source,
                quotation_type,
                account_id,
                referral,
                quote_type,
                industry,
                quote_title,
                product_services,
                quote_status_stage,
                created_by,
                created_date_time,
                modified_by,
                modified_date_time:date,
                notes,
                attachments,
                inco_terms_master,
                payment_terms_master,
                edit_status:true
            }).then((result)=>{
                quoteLogModel.save()
                .then(()=>{
                    res.send({update:true,result})
                })
                .catch((err)=>{
                    res.send(err)
                })
            })
            .catch((err)=>{
                res.send(err)
            })
        }else{
            res.send({update:false,msg:"no changes in data"})
        }
        }
    })
    
}

const getQuotes=(req,res)=>{
    
            quotemodel.find()
            .then((err,result)=>{
                if(err ) res.send(err)
                res.send(result)
            })
}

const getQuoteById=(req,res)=>{
    let quote_id=req.query.quoteid
  
            if(quote_id){
                quotemodel.find({quote_id})
                .then((err,result)=>{
                    if(err) return res.send(err)
                    res.send(result)
                }).catch((err)=>{
                    res.send(err)
                })
            }else{
                res.send("please pass a quoteid with url")
            }
   
}

const getQuoteLog=(req,res)=>{
    let quote_id_main=req.query.quoteid
    
            if(quote_id_main){
                QuoteLogModel.find({quote_id_main}).then((err,result)=>{
                    if(err) res.send(err)
                    res.send(result)
                })
            }else{
                res.send("please pass a quoteid with url")
            }
   
}
module.exports={saveQuote,getQuotes,getQuoteById,getQuoteLog}