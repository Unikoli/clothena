const { hashPassword, generateToken } = require("../config/jwt");
const User = require("../models/user.model");
const bcrypt=require("bcrypt")

//REGISTER USER
const register = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const emailExits = await User.findOne({ email });
        if (emailExits) {
            return res.status(400).json({ message: "user already exists!" });
        }
        const hashed = await hashPassword(password);
        const user = await User.create({
            username,
            email,
            password: hashed,
            role
        })

        // const token = generateToken(user);

        res.status(201).json({
            message: "user created successfully!",
            _id: user.id,
            username: user.username,
            email: user.email,
            role: user.role || 'user',
            
        })

    } catch (err) {
        res.status(500).json({ message: "server error!", error: err.message })
    }
}

//ALL REGISTERED USERS
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users);
    } catch (err) {
        res.status(500).json({message:"server error",error:err.message})
    }

}
//LOGIN
const login=async (req,res)=>{
    const {email,password}=req.body;
    try {
        //find the user by email
        const user=await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({message:"invalid credentials!"});
        }
        //compare hash password
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch)
        {
            return res.status(400).json({message:"invalid email or password"})
        }

        const token = generateToken(user);

        res.status(201).json({
            message:"login success!",
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            token
        })
        
    } catch (err) {
        res.status(500).json({message:"server error",error:err.message})
    }
}

module.exports = {
    register,
    getUsers,
    login
}