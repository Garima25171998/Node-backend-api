
const UploadFile=(req,res)=>{
    let sampleFile;
    let uploadPath;
    console.log(req.files)
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.json({status:400,message:'No files were uploaded.'});
    }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.image;
    uploadPath = __dirname + '/uploads/' + sampleFile.name;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
      if (err)
        return res.json({status:500,message:"Something Went Wrong",err});
  
      res.json({status:200,message:'File uploaded!',url:"http://localhost:3159/uploads/"+sampleFile.name});
    });
}
module.exports=UploadFile