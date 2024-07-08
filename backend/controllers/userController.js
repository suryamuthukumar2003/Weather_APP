const {User}=require('../models/User.js');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const bcrypt=require('bcrypt');
const saltRounds=10;

dotenv.config();
const secretKey=process.env.SECRET_KEY;
const generateToken=(userDetails)=>{
    return jwt.sign(userDetails,secretKey);
}

const createUser=async(request,response)=>{
    try{
        const user=await User.find({"emailId":request.body.emailId});
        if(user.length===0){
            bcrypt.genSalt(saltRounds, async(err,salt)=>{
                bcrypt.hash(request.body.password,salt,async(err,hash)=>{
                    if(err){
                        response.status(500).json({
                            status:"failure",
                            message:"error hashing password",
                            error:err,
                        });
                    }
                    const newUser=await User.create({
                        "emailId":request.body.emailId,
                        "username":request.body.username,
                        "password":hash,
                    })
                const userDetails={
                    "username":newUser.username,
                    "emailId":newUser.emailId,
                    "userId":newUser._id.toString()
                }

                 accessToken=generateToken(userDetails)
                response.status(201).json({
                    "status":"success",
                    "message":"User is created",
                    "accessToken":accessToken,
                    "userDetails":userDetails
                })
            })
        })
        }
        else{
            response.status(409).json({
                "status":"failure",
                "message":"User is already exists"
            })
        }
    }
    catch(error){
        response.status(500).json({
            "status":"error",
            "message":"User is not created",
            "error":error
        })
    }
}
const validateUser=async(req,res)=>{
    try {
        const user = await User.findOne({ emailId: req.body.emailId });
        if (!user) {
          return res.status(401).json({
            status: "failure",
            message: "User does not exist",
          });
        }
    
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) {
            console.log(err);
            return res.status(500).json({
              status: "error",
              message: "Authentication failed",
              error: err,
            });
          }
    
          if (!result) {
            return res.status(401).json({
              status: "failure",
              message: "Invalid password",
            });
          }
    
          const userDetails = {
            username: user.username,
            emailId: user.emailId,
            userId: user._id.toString(),
          };
          const accessToken = generateToken(userDetails);
          return res.status(200).json({
            status: "success",
            message: "User valid",
            accessToken: accessToken,
            userDetails: userDetails,
          });
        });
      } catch (error) {
        return res.status(500).json({
          status: "error",
          message: "Authentication failed",
          error: error,
        });
      }
}
module.exports={createUser,validateUser};