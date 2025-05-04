const mongoose=require("mongoose");
const User = require("./user.model");
const Product = require("./product.model");

const cartSchema=new mongoose.Schema({
    quantity:{
        required:true,
        type:Number,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true

    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Product,
        required:true

    },
},{
    timestamps:true
});

const Cart=mongoose.model("Cart",cartSchema);
module.exports=Cart;