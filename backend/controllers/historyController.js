const { request, response } = require('express');
const History =require('../models/History');


const addHistory=async(request,response)=>{
    const{userId,location}=request.body;
    if(!userId || !location){
        response.status(400).json({
            "status":"failure",
            "message":"User ID and location are required",
        })
    }
    try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=Metric`);
        const weatherData=await res.json();
        if(res.ok){
            const weatherInfo={
                "city":weatherData.name,
                "country":weatherData.sys.country,
                "temp":weatherData.main.temp,
                "humidity":weatherData.main.humidity,
                "wind":weatherData.wind.speed,
                "icons":weatherData.weather[0].icon
            }
            await History.create({
                "userId":userId,
                "weather":weatherInfo
            })
            response.status(201).json({
                "status":"success",
                "weather":weatherInfo
            })
        }
        else{
            response.status(parseInt(weatherData.cod)).json({
                "status":"failure",
                "message":weatherData.message
            })
        }
    }
    catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"Internal server Error",
            "error":error.toString()
        })
    }
}

// app.post('/getWeather/:location',async (req,res)=>{
//     const {userId,location}=req.params;

//     if(!location){
//         res.status(400).json({status:"failure",message:"Location is required"})
//     }
//     try{
//         const getWeather= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=Metric`).then((resp)=>resp.json());
//         res.status(200).json(getWeather);

//     }catch(err){
//         res.status(500).json({status:"failure",message:"Error in fetching data",error:err});
//     }
// })

const deleteHistory=async(request,response)=>{
    try{
        await History.findByIdAndDelete(request.params.id)
        response.status(200).json({
            "status":"success",
            "message":"History Deleted"
        })
    }
    catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"Couldn't delete history",
            "error":error
        })
    }
}

const deleteAllHistory=async(request,response)=>{
    try{
        await History.deleteMany({"userId":request.params.userId});
        response.status(200).json({
            "status":"success",
            "message":"All user history are deleted"
        })
    }
    catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"Couldn't delete all history",
            "error":error
        })
    }
}

const getHistory=async(request,response)=>{
    try{
        const historyDetails= await History.find({"userId":request.params.userId}).sort({date:-1})
        response.status(200).json(historyDetails)
    }
    catch(error){
        response.status(500).json({
            "status":"Failure",
            "message":"could not fetch data",
            "error":error
        })
    }
}

module.exports={addHistory,deleteAllHistory,deleteHistory,getHistory}