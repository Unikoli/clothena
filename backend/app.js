const express=require("express");
const dotenv=require("dotenv");
const dbconnect = require("./config/db");
const authRoutes = require("./routes/auth.routes");
dotenv.config();
const app=express();

//database connection
dbconnect();

app.use(express.json());

//ROUTES
app.use('/api/auth',authRoutes);

module.exports=app;