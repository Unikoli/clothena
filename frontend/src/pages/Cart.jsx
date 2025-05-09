import React, { useEffect, useState } from 'react';
import { clearCart, deleteProduct, getCartItems } from '../api/cart';
import { Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Cart() {
  const [products, setProducts] = useState([]);

  const loadCart = async () => {
    const data = await getCartItems();
    setProducts(data.cartItems || []);
  };

  useEffect(() => {
    loadCart();
  }, []);
//  INCREMENT QUANTITY
  const incrementQty = (index) => {
    const updated = [...products];
    updated[index].quantity += 1;
    setProducts(updated);
  };

  //DECREMENT QUANTITY
  const decrementQty = (index) => {
    const updated = [...products];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setProducts(updated);
    }
  };
  //DELETE PRODUCT
  const handleDeleteProduct= async(id)=>{
   await deleteProduct(id);
    loadCart();
  }
  //clear cart
  const handleClearCart=async ()=>{
    await clearCart();
    loadCart();
  }

  const subtotal = products.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  return (
    <>
    <Navbar/>
        <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 font-semibold border-b pb-3">
        <div>Image</div>
        <div className="col-span-2">Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>

      {/* Cart Items */}
      {products.length === 0 ? (
  <div className="text-center text-gray-600 py-10 text-xl col-span-6">
    Your cart is empty 🛒
  </div>
) : (
  products.map((cart, index) => (
    <div key={index} className="grid grid-cols-6 gap-4 items-center py-4 border-b">
      <img src={cart.product.image} alt={cart.product.name} className="w-16 h-16 object-contain" />
      <div className="col-span-2">{cart.product.name}</div>
      <div>Rs{cart.product.price}</div>
      <div className="flex items-center border px-2 py-1 rounded w-max">
        <button onClick={() => decrementQty(index)} className="px-2">-</button>
        <span className="px-3">{cart.quantity}</span>
        <button onClick={() => incrementQty(index)} className="px-2">+</button>
      </div>
      <div className="flex items-center justify-between gap-2">
        Rs{cart.product.price * cart.quantity}
        <button onClick={() => handleDeleteProduct(cart._id)} className="text-red-600 hover:text-red-800">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  ))
)}


      {/* Coupon and Update Button */}
      <div className="flex items-center gap-4 mt-6">
        <button onClick={()=>handleClearCart()} className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">clear cart</button>
        <button className="ml-auto bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">UPDATE CART</button>
      </div>

      {/* Cart Totals */}
      <div className="mt-10 max-w-md ml-auto bg-gray-50 p-6 rounded border">
        <h3 className="text-xl font-bold mb-4">Cart totals</h3>
        <div className="flex justify-between border-b pb-2 mb-2">
          <span>Subtotal</span>
          <span>Rs{subtotal}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>Rs{subtotal}</span>
        </div>
        <button className="mt-6 bg-red-700 text-white w-full py-3 rounded hover:bg-red-800">
          PROCEED TO CHECKOUT →
        </button>
      </div>
    </div>
    </>
  );
}
