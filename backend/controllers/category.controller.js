const Category = require("../models/category.model");

// ADD CATEGORY
const add = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await Category.create({
            name
        });
        res.status(201).json({
            message: "category added successfully!",
            category
        })
    } catch (err) {
        res.status(500).json({
            message: "category cannot be added!",
            error: err.message
        })
    }
}
//FETCH ALL CATEGORIES
const index = async (req, res) => {
    try {
        const categories = await Category.find().select('name');

        if (categories.length === 0) {
            return res.status(404).json({
                message: "No categories found!"
            });
        }

        res.status(200).json({
            message: "Categories fetched successfully!",
            categories
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
//DELETE CATEGORIES
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found!"
            });
        }

        res.status(200).json({
            message: "Category deleted successfully!",
            category
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
//UPDATE CATEGORIES
const update=async(req,res)=>{
    const {name}=req.body;
    try {
        const category=await Category.findByIdAndUpdate(req.params.id,
            { name},
            {new:true}
        );
       if(!category){
       return res.status(404).json({
            message:"cannot found category!"
        });
       }
       res.status(200).json({
        message:"category updated successfully!",
        category
       })
    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports = {
    add,
    index,
    deleteCategory,
    update
}