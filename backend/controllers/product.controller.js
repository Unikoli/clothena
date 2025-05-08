const Product = require("../models/product.model")

const index=async (req,res)=>{
    try {
        const products=await Product.find()
        .populate("brand","name")
        .populate("category","name")
        ;
        res.status(201).json({
            message:"all products displayed!",
            products
        })
    } catch (err) {
        res.status(201).json({
            message:"cannot display the products!",
            error:err.message
        })
    }
}

const add=async (req,res)=>{
    const {name,price,description,category,brand}=req.body
    const image = req.file
    ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    : null;
  
    try {
        const product=await Product.create({
            name,price,description,
            category,brand,
            image
        })
        res.status(201).json({
            message:"product added successfully!",
            product
        })

    } catch (err) {
        res.status(500).json({
            message:"cannot add product!",
            error:err.message
        })
    }
}

const update=async(req,res)=>{
    const {name,price,description,category_id,brand_id}=req.body
    try {
        const updateProducts=await Product.findByIdAndUpdate(req.params.id,{
            name,price,description,
            category:category_id,
            brand:brand_id
        },
        {new:true}
    );
    res.status(201).json({
        message:"product updated successfully!",
        updateProducts
    })
    } catch (err) {
         res.status(500).json({ 
            error: err.message 
        });
    }
}
const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
  
      if (!product) {
        return res.status(404).json({
          message: "Product not found"
        });
      }
  
      res.status(200).json({
        message: "Product deleted successfully!",
        product
      });
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  };
  
const productDetail=async (req,res)=>{
    
    try {
        const product=await Product.findById(req.params.id)
        .populate("category",'name')
        .populate("brand",'name')
        ;
        if(!product){
           return res.status(404).json({
                message:"product not found!"
            });
        }
        res.status(200).json({
            message:"product found successfully!",
            product,
        })
    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports={
    add,
    index,
    update,
    deleteProduct,
    productDetail
}