import React, { useState } from 'react';

export default function Sidebar({ filters, onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      product: selectedProduct,
      brand: selectedBrand,
      price: priceRange,
    });
  };

  const handlePriceChange = (e, index) => {
    const newPrice = [...priceRange];
    newPrice[index] = parseInt(e.target.value, 10);
    setPriceRange(newPrice);
    handleFilterChange();
  };

  return (
    <aside className="w-full md:w-64 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block font-medium">Category</label>
        <select
          className="w-full mt-1 p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All</option>
          {filters.categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Product Filter */}
      <div className="mb-4">
        <label className="block font-medium">Product</label>
        <select
          className="w-full mt-1 p-2 border rounded"
          value={selectedProduct}
          onChange={(e) => {
            setSelectedProduct(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All</option>
          {filters.products.map((product) => (
            <option key={product} value={product}>{product}</option>
          ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block font-medium">Brand</label>
        <select
          className="w-full mt-1 p-2 border rounded"
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All</option>
          {filters.brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-full p-2 border rounded"
            placeholder="Min"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-full p-2 border rounded"
            placeholder="Max"
          />
        </div>
      </div>
    </aside>
  );
}
