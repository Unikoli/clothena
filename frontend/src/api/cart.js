import { toast } from "react-toastify";

export const handleAddToCart = async (product) => {
  const token = localStorage.getItem('login-token');

  if (!token) {
    toast.error("Please login to continue");
    return;
  }

  try {
    const res = await fetch(`http://localhost:8000/api/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // ✅ Capital "B" and proper spacing
      },
      body: JSON.stringify({
        productId: product.id,
        quantity: 1
      })
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message || "Product added to cart");
    } else {
      toast.error(data.message || "Product cannot be added to cart");
    }

  } catch (error) {
    console.error("Error adding product to cart:", error);
    toast.error("Something went wrong!");
  }
};
