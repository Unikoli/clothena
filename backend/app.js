const express=require("express");
const cors=require("cors")
const dotenv=require("dotenv");
const dbconnect = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const brandRoutes = require("./routes/brand.routes");
const categoryRoutes = require("./routes/category.routes");
const cartRoutes = require("./routes/cart.routes");
dotenv.config();
const app=express();

const path = require("path");


//database connection
dbconnect();

app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "*", // Allow your frontend
  credentials: true
}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


//ROUTES
app.use('/api/auth',authRoutes);
app.use('/api/product',productRoutes);
app.use('/api/brand',brandRoutes);
app.use('/api/category',categoryRoutes);
app.use('/api/cart',cartRoutes);

module.exports=app;