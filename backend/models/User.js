const mongoose=require('mongoose');

const userDetailsSchema=new mongoose.Schema({
    emailId:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
},
{timestamps:true,versionKey: false}
);

const User= mongoose.model('User',userDetailsSchema);

module.exports={User};