const Brand = require("../models/brand.model");

// ADD BRAND
const add = async (req, res) => {
    const { name } = req.body;
    try {
        const brand = await Brand.create({ name });
        res.status(201).json({
            message: "Brand added successfully!",
            brand
        });
    } catch (err) {
        res.status(500).json({
            message: "Brand cannot be added!",
            error: err.message
        });
    }
};

// FETCH ALL BRANDS
const index = async (req, res) => {
    try {
        const brands = await Brand.find().select('name');
        if (brands.length === 0) {
            return res.status(404).json({
                message: "No brands found!"
            });
        }
        res.status(200).json({
            message: "Brands fetched successfully!",
            brands
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE BRAND
const deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        if (!brand) {
            return res.status(404).json({
                message: "Brand not found!"
            });
        }
        res.status(200).json({
            message: "Brand deleted successfully!",
            brand
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE BRAND
const update = async (req, res) => {
    const { name } = req.body;
    try {
        const brand = await Brand.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );
        if (!brand) {
            return res.status(404).json({
                message: "Brand not found!"
            });
        }
        res.status(200).json({
            message: "Brand updated successfully!",
            brand
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    add,
    index,
    deleteBrand,
    update
};
