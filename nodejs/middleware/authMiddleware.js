const jwt = require('jsonwebtoken')
const SECRET_KEY ="authentication"
const authMiddleware = (req, res, next) => {
  // const token = req.header("Authorization");
  let token
  if (!token) return res.status(403).json({ message: "Access Denied" });

  try {
     let token = req.headers.authorization
     console.log(token)
            if (token) {
                token = token.split(" ")[1]
                let user = jwt.verify(token, SECRET_KEY)
                req.user = user
                next()
            }
   
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
module.exports= authMiddleware;
 
