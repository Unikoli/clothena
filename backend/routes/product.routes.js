const express=require("express");
const { add, index, update, deleteProduct } = require("../controllers/product.controller");
const upload = require("../middlewares/upload");
// const upload = require("../middlewares/upload"); // ← Add this

const router=express.Router();

router.get("/",index);
router.post("/add", upload.single("image"), add);
router.put("/edit/:id",update);
router.delete("/:id",deleteProduct);


const productRoutes=router;
module.exports=productRoutes;