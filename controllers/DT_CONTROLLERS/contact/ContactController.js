const ContactModel = require('../../../models/DT_MODELS/contact/ContactModel');
const ContactLogModel = require('../../../models/DT_MODELS/contact/ContactLogModel')

const compareData = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        console.log(typeof(obj1[key]), typeof(obj2[key]));
        return false;
      }
    }
    return true;
  };

const createContact =(req,res)=>{   
            console.log(req.body,'contact')
            let update;
            let {
                contact_id,
                account_id,
                contact_owner,
                company_name,
                industry,
                country,
                state,
                city,
                location,
                department,
                role,
                first_name,
                last_name,
                contact_name,
                country_code,
                phone_no,
                mobile_no,
                email,
                secondary_email,
                remark,
                created_at
                    }=req.body

                mobile_no=String(mobile_no)
                phone_no=String(phone_no)

                // contact_id,
                // contact_owner,
                // organization,
                // contact_name,
                // industry,
                // first_name,
                // last_name,
                // mobile_no,
                // phone_no,
                // email,
                // company,
                // secondary_email,
                // address1,
                // address2,
                // zip_code,
                // state,
                // city,
                // country,
                // created_at
            
               
                 contact_id=contact_id?contact_id:"cntc_"+Math.floor(Math.random()*1000000)
                ContactModel.countDocuments({contact_id},async(err,acccount)=>{
                if(err) res.json(err)
                if(acccount===0){
                    let created_at_date = new Date()
                    
                    const contact = await new ContactModel({
                        contact_id,
                        account_id,
                        contact_owner,
                        company_name,
                        industry,
                        country,
                        state,
                        city,
                        location,
                        department,
                        role,
                        first_name,
                        last_name,
                        contact_name,
                        country_code,
                        phone_no,
                        mobile_no,
                        email,
                        secondary_email,
                        remark,
                        created_at:created_at_date,
                        modified_at:null
                    })
                     // .catch(err){
                     //    if(err)
                     //        res.json({status:401,message:"something went wrong!"})
                     // }
                    const contactLog = await new ContactLogModel({
                        contact_id,
                        account_id,
                        contact_owner,
                        company_name,
                        industry,
                        country,
                        state,
                        city,
                        location,
                        department,
                        role,
                        first_name,
                        last_name,
                        contact_name,
                        country_code,
                        phone_no,
                        mobile_no,
                        email,
                        secondary_email,
                        remark,
                        created_at:created_at_date,
                        modified_at:null
                       })
                   await contact.save()
                    .then((resp)=>{
                        contactLog.save()
                        .then(()=>{
                            res.json({status:200,message:'Contact Craeted Sucessfully!!'})
                        })
                        // .catch(err){
                        //     res.json({status:401,message:'Something Went Wrong!'})
                        // }
                    })
                    // .catch(err){
                    //     res.json({status:401,message:'Something Went Wrong!'})
                    // }
                }else{
                   await ContactModel.find({contact_id}).then((result)=>{
                        let resultData={
                            contact_owner:result[0].contact_owner,
                            company_name:result[0].company_name,
                            industry:result[0].industry,
                            country:result[0].country,
                            state:result[0].state,
                            city:result[0].city,
                            location:result[0].location,
                            department:result[0].department,
                            role:result[0].role,
                            first_name:result[0].first_name,
                            last_name:result[0].last_name,
                            contact_name:result[0].contact_name,
                            country_code:result[0].country_code,
                            phone_no:result[0].phone_no,
                            mobile_no:result[0].mobile_no,
                            email:result[0].email,
                            secondary_email:result[0].secondary_email,
                            remark:result[0].remark,



                            // contact_owner:result[0].contact_owner,
                            // organization:result[0].organization,
                            // contact_name:result[0].contact_name,
                            // industry:result[0].industry,
                            // first_name:result[0].first_name,
                            // last_name:result[0].last_name,
                            // mobile_no:result[0].mobile_no,
                            // phone_no:result[0].phone_no,
                            // email:result[0].email,
                            // company:result[0].company,
                            // secondary_email:result[0].secondary_email,
                            // address1:result[0].address1,
                            // address2:result[0].address2,
                            // zip_code:result[0].zip_code,
                            // state:result[0].state,
                            // city:result[0].city,
                            // country:result[0].country
                        }
                        if( compareData(resultData,{
                            contact_owner,
                            company_name,
                            industry,
                            country,
                            state,
                            city,
                            location,
                            department,
                            role,
                            first_name,
                            last_name,
                            contact_name,
                            country_code,
                            phone_no,
                            mobile_no,
                            email,
                            secondary_email,
                            remark})
                            ){
                                update=false
                        }else{
                            update=true
                        } 
                    })
                    if(update){
                        let update_date = new Date();
                        const ContactLog = await new ContactLogModel({
                            contact_id,
                            contact_owner,
                            company_name,
                            industry,
                            country,
                            state,
                            city,
                            location,
                            department,
                            role,
                            first_name,
                            last_name,
                            contact_name,
                            country_code,
                            phone_no,
                            mobile_no,
                            email,
                            secondary_email,
                            remark,
                            created_at,
                            modified_at:update_date
                           })
                        await ContactModel.findOneAndUpdate(
                            { contact_id },{
                                contact_owner,
                                company_name,
                                industry,
                                country,
                                state,
                                city,
                                location,
                                department,
                                role,
                                first_name,
                                last_name,
                                contact_name,
                                country_code,
                                phone_no,
                                mobile_no,
                                email,
                                secondary_email,
                                remark,
                                created_at,
                            modified_at:update_date}
                        ).then(()=>{
                            ContactLog.save().then(()=>{
                                // res.json({ updated: true,msg: "updated!!"  });
                                res.json({status:200,message:'updated Sucessfully!!'})
                            })
                        })

                    }else {
                        // res.json({ update: false, msg: "no changes in data" });
                         res.json({status:201,message:'UpToDate ! No Changes In Data!!'})
                    }
                }
            })  
}



const getContactDetails=(req,res)=>{
    let contact_id=req.params.id
    console.log(contact_id,typeof(contact_id))
    ContactModel.find({contact_id})
    .then((results)=>{
        res.json(results)
    })
}

const getCompanyContact=(req,res)=>{
    let account_id=req.params.id
    ContactModel.find({account_id})
    .then((results)=>{
        res.json({status:200,results})
    })
    .catch(()=>{
        res.json({status:500,message:"something went wrong!"})
    })
}

const getAllContact=(req,res)=>{
            ContactModel.find()
            .exec((err,results)=>{
                if(err)
                    res.json({status:500,message:"somrthing went wrong!"})
                res.send(results)
            }) 
        }




const deleteContact=(req,res)=>{
    let contact_id=req.params.id
    console.log(contact_id,typeof(contact_id))
    ContactModel.findOneAndDelete({contact_id})
    .exec((err,results)=>{
        if(err)
            res.json({status:500,message:"Something Went Wrong!"})
        res.json({status:200,message:"Contact Deleted Sucessfully!!"})
    })
}


module.exports={createContact,getContactDetails ,getAllContact,deleteContact,getCompanyContact}