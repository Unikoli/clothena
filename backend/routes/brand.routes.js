const express=require("express");
const { add, update, deleteBrand, index } = require("../controllers/brand.controller");

const router=express.Router();

router.post("/add",add);
router.put("/edit/:id",update);
router.delete("/:id",deleteBrand);
router.get("/",index);

const brandRoutes=router;
module.exports=brandRoutes;