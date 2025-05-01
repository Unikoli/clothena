const mongoose=require("mongoose");

const dbconnect=()=>{
    mongoose
    .connect(process.env.CONNECTION_URI)
    .then(()=>console.log("✅ MongoDB connected"))
    .catch((err)=>{
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    })
}
module.exports=dbconnect