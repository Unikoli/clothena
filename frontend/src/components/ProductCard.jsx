import React from 'react';
import { Link } from 'react-router-dom';
import { handleAddToCart } from '../api/cart';

export default function ProductCard({ name, price, image, id }) {
  const product = { name, price, image, id };

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-60 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-md text-gray-600 mt-1">${price}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
