const mongoose=require('mongoose');

const weatherSchema=new mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    temp:{
        type:Number,
        required:true
    },
    humidity:{
        type:Number,
        required:true
    },
    wind:{
        type:Number,
        required:true
    },
    icons:{
        type:String,
        required:true
    }
},{_id:false});

const historySchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    weather:{
        type:weatherSchema,
        required:true 
    }
},{versionKey: false});

 const History=mongoose.model('UserHistory',historySchema);

 module.exports=History;