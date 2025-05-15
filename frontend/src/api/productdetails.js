export default async function fetchProductDetails(id) {
    try {
      const res = await fetch(`http://localhost:8000/api/product/${id}`);
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
  