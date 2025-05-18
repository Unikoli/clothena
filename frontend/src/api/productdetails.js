import API_BASE_URL from "../config";

export default async function fetchProductDetails(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/product/${id}`);
      const data = await res.json();
  
      if (res.ok) {
        console.log("products!",data)
        return data;
      } else {
        console.error(data.message);
        return null;
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  }
  