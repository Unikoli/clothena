const express=require("express");
const dotenv=require("dotenv");
const dbconnect = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const brandRoutes = require("./routes/brand.routes");
const categoryRoutes = require("./routes/category.routes");
dotenv.config();
const app=express();

//database connection
dbconnect();

app.use(express.json());

//ROUTES
app.use('/api/auth',authRoutes);
app.use('/api/product',productRoutes);
app.use('/api/brand',brandRoutes);
app.use('/api/category',categoryRoutes);

module.exports=app;