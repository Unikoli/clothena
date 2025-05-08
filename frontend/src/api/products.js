export async function fetchproducts() {
    try {
      const res = await fetch("http://localhost:8000/api/product", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      const data = await res.json();
      console.log('Full API response:', data); // 🔍 Log response structure
  
      if (res.ok) {
        // If the response is { products: [...] }, return data.products
        // console.log(data.product.image)
        return Array.isArray(data) ? data : data.products;
        
      } else {
        console.error(data.message);
        return [];
      }
    } catch (error) {
      console.error("Error fetching products!", error);
      return [];
    }
  }
  