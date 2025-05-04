const jwt=require("jsonwebtoken")
//AUTHORIZE TOKEN
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // Expected format: Bearer <token>
    try {
        const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Access token missing' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
  
      // Save user info in request for use in next middleware or route
      req.user = decoded;
      next();
    });
    } catch (err) {
        res.status(500).json({error:err.message})
    }
    
  };
  
  //AUTHORIZE ROLE
function authorizeRole(...allowedRoles) {
    return (req, res, next) => {
      const userRole = req.user?.role;
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Access denied: insufficient role' });
      }
  
      next();
    };
  }
  
 
  module.exports = {
    authenticateToken,
    authorizeRole
  }
  