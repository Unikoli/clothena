const express=require("express");
const { add, update, deleteCategory, index } = require("../controllers/category.controller");

const router=express.Router();

router.post("/add",add);
router.put("/edit/:id",update);
router.delete("/:id",deleteCategory);
router.get("/",index);

const categoryRoutes=router;
module.exports=categoryRoutes;