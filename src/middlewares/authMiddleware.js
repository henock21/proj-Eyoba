const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    if (authHeader && authHeader.startsWith("Bearer")) {
       token = authHeader.split(" ")[1]
       if (!token) {
       return res.status(401).json({message: 'you dont have token'})
       } 
      //  decode z token now
      try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        console.log('the decoded user is:', req.user); 
        next();
      } catch (error) {
         res.status(404).json({message: 'token is not valid'})
      }

    }
    else {
     return res.status(404).json({message: 'you dont have token so not authorized'}) 
    }
}

 
module.exports = verifyToken;