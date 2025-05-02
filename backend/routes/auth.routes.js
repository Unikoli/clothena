const express=require("express");
const { register, getUsers, login } = require("../controllers/auth.controller");
const authenticateToken = require("../middlewares/auth.middleware");
const router=express.Router();

router.post('/login',login);
router.post('/register',register);
router.get('/users',getUsers);

const authRoutes=router;
module.exports=authRoutes;