import React, { useEffect } from 'react'

export default function ProductCard({ name, price,image }) {
    useEffect(()=>{
        console.log(image)
    },[image])
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Product Image */}
      {/* <img src={`http://localhost:8000/${image}`} alt={name} className="w-full h-60 object-cover" /> */}
      <img src={image} alt={name} className="w-full h-60 object-cover" />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-md text-gray-600 mt-1">${price}</p>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
