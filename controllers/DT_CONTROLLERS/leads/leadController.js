const LeadModel = require("../../../models/DT_MODELS/LeadsModel");
const LeadsLogModel = require("../../../models/DT_MODELS/LeadsLogModel");

//comparing data saved in database with data coming from the api

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

const savelead = (req, res) => {
  
  let update;

//getting data passed from the request body
  let {
    lead_id,
    lead_owner,
    lead_source,
    lead_title,
    lead_type,
    referral,
    industry,
    estimated_value,
    account_id,
    requirement_summary,
    product_services,
    notes,
    attachments,
    lead_status_stage,
    created_by,
    created_date_time,
    modified_by,
  } = req.body;

  //checking if data does not have id then we are generating random id
  lead_id = lead_id ? lead_id : `lead_${Math.floor(Math.random() * 10000)}`;

  //counting documents on the basis of lead id
  LeadModel.countDocuments({ lead_id }, async function (err, count) {

    if(err) res.json(err)

    console.log("Number of leads:", count);
    //checking for document if their is not any data, lead insert a new document
    if (count === 0) {
      let date = new Date();
      let leadmodel = await new LeadModel({
        lead_id,
        lead_owner,
        lead_source,
        lead_title,
        lead_type,
        referral,
        industry,
        estimated_value,
        account_id,
        requirement_summary,
        product_services,
        notes,
        attachments,
        lead_status_stage,
        created_by,
        created_date_time: date,
        modified_by: null,
        modified_date_time: null,
        edit_status: true,
      });
      
      let leadsLogModel = await new LeadsLogModel({
        lead_id_main: lead_id,
        lead_owner,
        lead_source,
        lead_title,
        lead_type,
        referral,
        industry,
        estimated_value,
        account_id,
        requirement_summary,
        product_services,
        notes,
        attachments,
        lead_status_stage,
        created_by,
        created_date_time: date,
        modified_by: null,
        modified_date_time: null,
        edit_status: true,
      });

       leadmodel
        .save()
        .then(async (err, result) => {
          if (err) res.json(err);
          await leadsLogModel.save().then(() => {
            res.json(result);
            console.log(err);
          });
        })
        .catch((err) => {
          res.json(err);
          console.log(err);
        });
    } 
    //if their is already an document exist then update that document
    else {
      await LeadModel.find({ lead_id }).then((result) => {
        let resultData = {
          lead_owner: result[0].lead_owner,
          lead_source: result[0].lead_source,
          lead_title: result[0].lead_title,
          lead_type: result[0].lead_type,
          referral: result[0].referral,
          industry: result[0].industry,
          estimated_value: result[0].estimated_value,
          account_id: result[0].account_id,
          requirement_summary: result[0].requirement_summary,
          product_services: result[0].product_services,
          notes: result[0].notes,
          attachments: result[0].attachments,
          lead_status_stage: result[0].lead_status_stage,
          created_by: result[0].created_by,
        };
        //checking that their is any changes in coming data or it is same as previous saved
        //if same don't do anything else update the document
        if (
          compareData(resultData, {
            lead_owner,
            lead_source,
            lead_title,
            lead_type,
            referral,
            industry,
            estimated_value,
            account_id,
            requirement_summary,
            product_services,
            notes,
            attachments,
            lead_status_stage,
            created_by,
            created_date_time,
          })
        ) {
          update = false;
        } else {
          update = true;
        }
      });

      if (update) {
        let date = new Date();
        let leadsLogModel = await new LeadsLogModel({
          lead_id_main: lead_id,
          lead_owner,
          lead_source,
          lead_title,
          lead_type,
          referral,
          industry,
          estimated_value,
          account_id,
          requirement_summary,
          product_services,
          notes,
          attachments,
          lead_status_stage,
          created_by,
          created_date_time,
          modified_by,
          modified_date_time: date,
          edit_status: true,
        });

        await LeadModel.findOneAndUpdate(
          { lead_id },
          {
            lead_owner,
            lead_source,
            lead_title,
            lead_type,
            referral,
            industry,
            estimated_value,
            account_id,
            requirement_summary,
            product_services,
            notes,
            attachments,
            lead_status_stage,
            created_by,
            created_date_time,
            modified_by,
            modified_date_time: date,
            edit_status: true,
          }
        ).then(() => {
          leadsLogModel.save().then((result) => {
            res.json({ updated: true, result });
          });
        });
      } else {
        res.json({ update: false, msg: "no changes in data" });
      }
    }
  });

};


//get all leads
const getlead = (req, res) => {
  
        LeadModel.find().then((result) => {
          console.log(result);
          res.json(result);
        });
  
};

//get one lead by their id
const getleadbyid=(req,res)=>{
  let lead_id=req.query.lead_id
  
        if(lead_id){
          LeadModel.find({lead_id}).then((result)=>{
            res.json(result);
          }) 
        }else{
          res.json("please pass a lead_id in url")
        }
    
}

//get any lead log by the main lead id
const leadLogs=(req,res)=>{
  let lead_id_main=req.query.lead_id
  
      if(lead_id_main){

        LeadsLogModel.find({lead_id_main}).then((err,result)=>{
          if(err) res.json(err)
          res.json(result)
        })
      }else{
        res.json("Please pass a lead_id in url")
      }
 
}

module.exports = { savelead, getlead ,getleadbyid ,leadLogs};
