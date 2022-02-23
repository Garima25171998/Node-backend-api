const CompanyModel=require("../../../models/DT_MODELS/company/CompanyModel")


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

const createCompany =(req,res)=>{   
   
            let update;
            let {
                  company_id,
                  company_owner,
                  company_name,
                  company_logo,
                  gstin,
                  pan,
                  phone_no,
                  mobile_no,
                  email,
                  secondary_email,
                  created_at
            }=req.body

               console.log(req.body)
                company_id=company_id?company_id:"cntc_"+Math.floor(Math.random()*1000000)
             CompanyModel.countDocuments({company_id},async(err,acccount)=>{
                if(err) res.send(err)
                console.log(acccount)
                if(acccount===0){
                    let date = new Date()
                    
                    const company = await new CompanyModel({
                     company_id,
                     company_owner,
                     company_name,
                     company_logo,
                     gstin,
                     pan,
                     phone_no,
                     mobile_no,
                     email,
                     secondary_email,
                     created_at:date,
                     modified_at:null
                    })
                   await company.save()
                    .then((resp)=>{
                            res.json({status:200,message:"Company Created sucessfully!!"})
                    }).catch((err)=>{
                        res.json({status:500,message:"Something Went Wrong!",err})
                    })
                }else{
                   await CompanyModel.find({company_id}).then((result)=>{
                        let resultData={
                            company_owner:result[0].company_owner,
                            company_name:result[0].company_name,
                            company_logo:result[0].company_logo,
                            gstin:result[0].gstin,
                            pan:result[0].pan,
                            phone_no:result[0].phone_no,
                            mobile_no:result[0].mobile_no,
                            email:result[0].email,
                            secondary_email:result[0].secondary_email
                        }
                        if( compareData(resultData,{company_owner,company_name,company_logo,gstin,
                            pan,phone_no,mobile_no,email,secondary_email})
                            ){
                                update=false
                        }else{
                            update=true
                        } 
                    })
                    if(update){
                        let date = new Date();
                        
                        await CompanyModel.findOneAndUpdate(
                            { company_id },{company_owner,company_name,company_logo,gstin,
                                pan,phone_no,mobile_no,email,secondary_email,created_at, modified_at:date}
                        ).then(()=>{
                                res.send({ status:200,updated: true,message:"Company Updated!!"  });
                        })
                    }else {
                        res.send({status:201, update: false, message:"Nothing to Change ! Already UpTo Date" });
                    }
                }
            })  
        }


const getCompanyDetails=(req,res)=>{
    let company_id=req.params.id
        CompanyModel.find({company_id})
        .then((results)=>{
            res.json(results)
        })
}


const getAllCompany=(req,res)=>{
    
            CompanyModel.find()
            .then((results)=>{
                res.send(results)
            })
}



module.exports={createCompany,getCompanyDetails,getAllCompany}