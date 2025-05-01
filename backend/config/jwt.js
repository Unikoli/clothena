const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")

const hashPassword=async(password)=>{

    const salt=await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};
const generateToken=(user)=>{
    return jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    )
}

module.exports={
    hashPassword,
    generateToken
}