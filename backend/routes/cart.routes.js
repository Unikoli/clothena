const express=require("express");
const { store, getCartDetails, clearCart, deleteProductById } = require("../controllers/cart.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");

const router=express.Router();

router.post("/",authenticateToken,store);
router.get("/",authenticateToken,getCartDetails);
router.delete("/clear",authenticateToken,clearCart);
router.delete("/:id",authenticateToken,deleteProductById);

const cartRoutes=router;
module.exports=cartRoutes