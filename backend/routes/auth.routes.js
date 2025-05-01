const express=require("express");
const { register } = require("../controllers/auth.controller");
const router=express.Router();

// router.post('/login',login);
router.post('/register',register);

const authRoutes=router;
module.exports=authRoutes;