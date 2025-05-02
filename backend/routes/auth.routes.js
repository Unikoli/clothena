const express=require("express");
const { register, getUsers, login } = require("../controllers/auth.controller");
const router=express.Router();

router.post('/login',login);
router.post('/register',register);
router.get('/users',getUsers);

const authRoutes=router;
module.exports=authRoutes;