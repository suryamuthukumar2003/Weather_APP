const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();
const dotenv=require('dotenv');
const { default: mongoose } = require('mongoose');
const userRoutes=require('./routes/userRoutes');
const userHistoryRoutes=require('./routes/userHistoryRoutes');

dotenv.config();
app.use(cors());
app.use(bodyparser.json());



const connectDb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        const port =process.env.PORT || 8002
        app.listen(port,()=>{
            console.log(`Listening on port ${port}...`)
        })
    }
    catch(error){
        console.log("Couldn't establish DB connection");
    }
}
connectDb();

app.use('/user',userRoutes);
app.use('/weather',userHistoryRoutes);