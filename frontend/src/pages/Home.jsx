import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // for the menu icon
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { fetchproducts, fetchCategories, fetchBrands } from '../api/products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false); // 👈 sidebar toggle state

  useEffect(() => {
    loadProducts();
    loadCategories();
    fetchBrands().then(setBrands);
  }, []);

  async function loadProducts(filters = {}) {
    setLoading(true);
    try {
      const data = await fetchproducts(filters);
      setProducts(data);
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  }

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  const handleFilterChange = () => {
    loadProducts({
      brandName: selectedBrand,
      categoryName: selectedCategory,
    });
    setShowSidebar(false); // hide sidebar after applying filters (optional)
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col lg:flex-row relative">
        {/* Mobile Menu Icon */}
        <div className="p-4 lg:hidden flex justify-between items-center">
          <h1 className="text-xl font-bold">Clothena</h1>
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`
            bg-gray-100 shadow-lg p-4
            ${showSidebar ? 'block' : 'hidden'}
            lg:block
            w-full lg:w-64
            absolute lg:static top-16 left-0 z-20 lg:z-auto
            transition-all duration-300
          `}
        >
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Brand</h3>
            {brands.map((brand) => (
              <label key={brand._id} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  value={brand.name}
                  checked={selectedBrand === brand.name}
                  onChange={() =>
                    setSelectedBrand(
                      selectedBrand === brand.name ? '' : brand.name
                    )
                  }
                  className="accent-black"
                />
                <span>{brand.name}</span>
              </label>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            {categories.map((category) => (
              <label key={category._id} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  value={category.name}
                  checked={selectedCategory === category.name}
                  onChange={() =>
                    setSelectedCategory(
                      selectedCategory === category.name ? '' : category.name
                    )
                  }
                  className="accent-black"
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>

          {/* Apply Filter Button */}
          <button
            onClick={handleFilterChange}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Apply Filters
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 mt-0 lg:mt-0">
          <Navbar />

          {/* Hero Section */}
          <div className="relative w-full h-48 sm:h-64 mb-6">
            <img
              src="/home_page.png"
              alt="Clothena Banner"
              className="w-full h-full object-cover rounded shadow"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black text-sm sm:text-lg font-semibold rounded-full hover:bg-gray-200 transition shadow-lg">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))
            )}
          </div>

          <div className="mt-8">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
