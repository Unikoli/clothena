// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';
// import Footer from '../components/Footer';
// import { fetchproducts, fetchCategories, fetchBrands } from '../api/products';

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     loadProducts();
//     loadCategories();
//     fetchBrands().then(setBrands);
//   }, []);

//   async function loadProducts(filters = {}) {
//     setLoading(true);
//     try {
//       const data = await fetchproducts(filters);
//       setProducts(data);
//     } catch (err) {
//       setError('Failed to load products');
//     } finally {
//       setLoading(false);
//     }
//   }

//   const loadCategories = async () => {
//     const data = await fetchCategories();
//     setCategories(data);
//     console.log("Fetched categories:", data);
//   };

//   const handleFilterChange = () => {
//     loadProducts({
//       brandName: selectedBrand,
//       categoryName: selectedCategory,
//     });
//   };

//   return (
//     <>
//       <div className="min-h-screen flex bg-white">
//         {/* Sidebar Filters */}
//         <aside className="w-full sm:w-64 bg-gray-100 p-4 shadow-lg animate-slide-in">
//           <h2 className="text-xl font-semibold mb-4">Filters</h2>

//           {/* Brand Filter */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Brand</h3>
//             {brands.map((brand) => (
//               <label key={brand._id} className="flex items-center space-x-2 mb-2">
//                 <input
//                   type="checkbox"
//                   value={brand.name}
//                   checked={selectedBrand === brand.name}
//                   onChange={() =>
//                     setSelectedBrand(
//                       selectedBrand === brand.name ? '' : brand.name
//                     )
//                   }
//                   className="accent-black"
//                 />
//                 <span>{brand.name}</span>
//               </label>
//             ))}
//           </div>

//           {/* Category Filter */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Category</h3>
//             {categories.map((category) => (
//               <label key={category._id} className="flex items-center space-x-2 mb-2">
//                 <input
//                   type="checkbox"
//                   value={category.name}
//                   checked={selectedCategory === category.name}
//                   onChange={() =>
//                     setSelectedCategory(
//                       selectedCategory === category.name ? '' : category.name
//                     )
//                   }
//                   className="accent-black"
//                 />
//                 <span>{category.name}</span>
//               </label>
//             ))}
//           </div>

//           {/* Apply Filter Button */}
//           <button
//             onClick={handleFilterChange}
//             className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//           >
//             Apply Filters
//           </button>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <Navbar />

//           {/* Hero Section */}
//           <div className="relative w-full h-64 mb-6">
//             <img
//               src="/home_page.png"
//               alt="Clothena Banner"
//               className="w-full h-full object-cover rounded shadow"
//             />
//             <div className="absolute inset-0 flex justify-center items-center">
//               <button className="px-8 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition shadow-lg">
//                 SHOP NOW
//               </button>
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {loading ? (
//               <p>Loading products...</p>
//             ) : error ? (
//               <p>{error}</p>
//             ) : (
//               products.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   id={product._id}
//                   name={product.name}
//                   price={product.price}
//                   image={product.image}
//                 />
//               ))
//             )}
//           </div>

//           <Footer />
//         </main>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
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
    console.log("Fetched categories:", data);
  };

  const handleFilterChange = () => {
    loadProducts({
      brandName: selectedBrand,
      categoryName: selectedCategory,
    });
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 bg-gray-100 p-4 shadow-lg animate-slide-in">
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
                <span className="text-sm sm:text-base">{brand.name}</span>
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
                <span className="text-sm sm:text-base">{category.name}</span>
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
        <main className="flex-1 p-4 sm:p-6">
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
