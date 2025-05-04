const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");

const store = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id
    try {
        const product = await Product.findById(productId);

        // console.log(userId)
        if (!product) {
            return res.status(404).json({
                message: "product not found!"
            });
        }
        //if the product already exists then,increments the product qunatity!
        const existingCartItem = await Cart.findOne({
            user: userId,
            product: productId,
            // quantity
        });

        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await existingCartItem.save();

            return res.status(200).json({
                message: "cart updated with new quantity",
                cart: existingCartItem
            });
        }

        const cartItem = await Cart.create({
            user: userId,
            product: productId,
            quantity
        })
        res.status(201).json({
            message: "product added to cart!",
            cart: cartItem
        })
    } catch (err) {
        res.status(500).json({
            message: "error!",
            error: err.message
        })
    }
};
const getCartDetails = async (req, res) => {
    try {
        const carts = await Cart.find();
        if (carts.length === 0) {
            return res.status(404).json({
                message: "non items availabe "
            })
        };
        res.status(200).json({
            cartItems: carts
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


};
const clearCart = async (req, res) => {
    const userId = req.user.id;

    try {
        const cartItems = await Cart.find({ user: userId }).populate("product", "name");
        const deleteProductName = cartItems.map(item => item.product.name)
        const cart = await Cart.deleteMany({
            user: userId
        });
        if (cart.deletedCount === 0) {
            return res.status(400).json({
                message: "Cart is empty!"
            })
        }

        return res.status(400).json({
            message: "cart cleared!",
            productName: deleteProductName
        });


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}
const deleteProductById = async (req, res) => {
    const cartItemId = req.params.id; // This must be the _id of the Cart document

    try {
        const deletedCartItem = await Cart.findByIdAndDelete(cartItemId);

        if (!deletedCartItem) {
            return res.status(404).json({
                message: "Cart item not found!"
            });
        }

        res.status(200).json({
            message: "Product deleted from the cart!",
            deletedCartItem
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

// const deleteProductById=async (req,res)=>{
//     const userId=req.user.id;
//     const cartId=req.params.id;
//     const product=await Cart.findByIdAndDelete({cartId:req.params.id});
//     if(!product){
//         return res.status(400).json({
//             message:"cannot found product in the cart!"
//         });

//     }
//     res.status(200).json({
//         message:"product deleted from the cart!"
//     })
// try {
// const products=await Cart.findOneAndDelete({user:userId,product:productId}).populate("product","name")
// console.log(products)
// if(!products){
//     return res.status(404).json({
//         message:"no product found!"
//     })
// }

// res.status(400).json({
//     message:"deleted product",
//     deletedProduct:products.product.name
// })



// } catch (err) {
//     res.status(500).json({
//         error:err.message
//     })
// }
// }


module.exports = {
    store,
    getCartDetails,
    clearCart,
    deleteProductById
}