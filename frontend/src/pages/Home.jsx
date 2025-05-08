import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { fetchproducts } from '../api/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function loadproducts() {
        setLoading(true);
        try {
            const data = await fetchproducts();
            setProducts(data);
        } catch (error) {
            setError('Failed to load products');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadproducts();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <div className="relative w-full h-full">
                    {/* Background Image */}
                    <img
                        src="/home_page.png" // Make sure it's placed in public/images
                        alt="Clothena Banner"
                        className="w-full h-full object-contain md:object-cover"
                    />

                    {/* Overlay Button */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <button className="px-8 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition shadow-lg">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    products.map((product, index) => (
                        <ProductCard
                            key={product.id || index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                )}
            </div>
        </>
    );
}
