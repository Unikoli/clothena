
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchProductDetails from '../api/productdetails';
import { handleAddToCart } from '../api/cart';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

 const  HANDLEADDTOCART =async (product)=>{
  const data=await handleAddToCart(product);
  console.log("helllo",data)
 }
  useEffect(() => {
    async function loadProduct() {
      const data = await fetchProductDetails(id);
      setProduct(data.product);
    }
    loadProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-white p-6 flex justify-center items-start">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 shadow-xl rounded-xl p-6 border border-gray-200 bg-white">
        
        {/* Product Image */}
        <div className="flex justify-center items-start p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-xs object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl text-red-700 font-bold mb-4">Rs{product.price}</p>
            <p className="text-gray-800 mb-4">{product.description}</p>
          </div>

          {/* Product Table */}
          <table className="w-full table-auto text-left border-t border-b border-gray-200">
            <tbody className="divide-y divide-gray-100">
              <tr>
                <th className="py-2 pr-4 font-semibold text-gray-600">Category</th>
                <td className="py-2">{product.category.name}</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-semibold text-gray-600">Brand</th>
                <td className="py-2">{product.brand?.name}</td>
              </tr>
              
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button onClick={()=>HANDLEADDTOCART(product)} className="flex-1 bg-red-700 text-white font-semibold py-3 rounded hover:bg-red-800 transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-red-800 text-white font-semibold py-3 rounded hover:bg-red-900 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
