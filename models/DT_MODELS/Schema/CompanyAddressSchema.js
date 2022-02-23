const mongoose = require('mongoose')

const AddressSchema= mongoose.Schema({
	branch_id:{
		type:String,
		required:true
	},
      branch_name:{
		type:String,
		required:true
	},
      branch_gst:{
		type:String,
		required:true
	},
      branch_logo:{
		type:String
	},
      address1:{
		type:String,
		required:true
	},
      address2:{
		type:String,
		required:true
	},
      address3:{
		type:String
	},
      country:{
		type:String,
		required:true
	},
      state:{
		type:String,
		required:true
	},
      city:{
		type:String,
		required:true
	},
      zipcode:{
		type:String,
		required:true
	},
      full_address:{
		type:String,
		required:true
	},
	created_at:{
		type:Date
	}
})


module.exports=AddressSchema