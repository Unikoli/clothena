import config from "../config";

// Fetch categories
export async function fetchCategories() {
  try {
    const res = await fetch("http://localhost:8000/api/category");
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();
    console.log(data)
    // const arraydata=Array.isArray(data)
    // return Array.isArray(data) ? data : ["error"]; // Ensure it's an array
    // return arraydata;
    return data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array on error
  }
}

// Fetch brands
export async function fetchBrands() {
  try {
    const res = await fetch("http://localhost:8000/api/brand");
    if (!res.ok) throw new Error('Failed to fetch brands');
    const data = await res.json();
    console.log(data)
    // return Array.isArray(data) ? data : []; // Ensure it's an array
    return data.brands
  } catch (error) {
    console.error("Error fetching brands:", error);
    return []; // Return an empty array on error
  }
}


// Fetch products with optional filters (brandName, categoryName)
export async function fetchproducts(filters = {}) {
  try {
    const params = new URLSearchParams(filters).toString();
    const res = await fetch(`${config.backendURL}/api/product?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await res.json();
    if (res.ok) {
      return data.products;
    } else {
      console.error(data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products!", error);
    return [];
  }
}
