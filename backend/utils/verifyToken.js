const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
dotenv.config();
const secretKey=process.env.SECRET_KEY;
const verifyUser=(request,response,next)=>{
    try{
        const authHeader=request.headers.authorization;
        const accessToken=authHeader && authHeader.split(' ')[1];
        if(accessToken){
            jwt.verify(accessToken,secretKey,(error,userDetails)=>{
                if(error){
                    response.status(403).json({
                        "status":"forbidden",
                        "message":"access Denied"
                    })
                }
                else{
                    next();
                }
            })
        }
        else{
            response.status(401).json({
                "status":"failure",
                "message":"access denied"
            })  
        }
    }
    catch(error){
        response.status(500).json({
            "status":"Internal server error",
            "error":error

        })
    }
}
module.exports=verifyUser;