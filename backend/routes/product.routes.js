const express=require("express");
const { add, index, update, deleteProduct } = require("../controllers/product.controller");

const router=express.Router();

router.get("/",index);
router.post("/add",add);
router.put("/edit/:id",update);
router.delete("/:id",deleteProduct);


const productRoutes=router;
module.exports=productRoutes;