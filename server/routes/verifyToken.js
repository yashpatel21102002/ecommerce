const jwt = require("jsonwebtoken");

const verifyToken = async (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(e,user)=>{
            if(e) res.status(403).json("Token is not valid!")
            req.user = user;
            next();
        })
    }else{

        return res.status(401).json("You are not authenticated")
    }
}

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin ){
            next();
        }else{
            res.status(403).json("You are not allowed to proceed further or malleceous actions noted!")
        }
    })
}


// verify token and admin
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("you are not allowed buddy")
        }

    })
}

module.exports = {verifyToken , verifyTokenAndAdmin,verifyTokenAndAuthorization}