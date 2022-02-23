const AttachmentModal = require('../../models/EPR_MODELS/AttachmentModel')

function attachment(req,res){
    
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.json({status:400,message:'No files were uploaded.'});
      }
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      sampleFile = req.files.image;
      uploadPath = 'E://EPR/04-10-21 backend node/uploads/' + sampleFile.name;
    
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv(uploadPath, function(err) {
        if (err)
          return res.json({status:500,message:"Something Went Wrong",err}); 
          req.body.file=sampleFile.name;
          let{
            type,
            type_id,
            document_type,
            document_no,
            file,
            validity
    
        }=req.body ; 
            const attachment = new AttachmentModal({
                type,
                type_id,
                document_type,
                document_no,
                file,
                validity
            })
            attachment.save()
            .then(function(result){
                res.send(result)
            })
    // res.json({status:200,message:'File uploaded!',url:"http://localhost:3159/uploads/"+sampleFile.name});
      });
    }

module.exports={attachment}