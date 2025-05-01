const { hashPassword, generateToken } = require("../config/jwt");
const User = require("../models/user.model");


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

        const token = generateToken(user);

        res.status(201).json({
            message: "user created successfully!",
            _id: user.id,
            username: user.username,
            email: user.email,
            role: user.role || 'user',
            token,
        })

    } catch (err) {
        res.status(500).json({ message: "server error!", error: err.message })
    }
}
module.exports = {
    register
}