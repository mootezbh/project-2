const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token){
        res.status(401).json({
            message: "no token",
            success: false
        })
    }
    jwt.verify(token, process.env.SECRET, (err,decoded) => {
    if(err){
        res.status(401).json({
            message:"unauthorized",
            success: false,
        })
    }
    req.user = decoded;
    return next();
   });
   
}
module.exports = auth;
