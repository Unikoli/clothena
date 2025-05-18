import { toast } from "react-toastify";

export const handleAddToCart = async (product) => {
  const token = localStorage.getItem('login-token');

  if (!token) {
     toast.error("please login to continue..",{
        autoClose:500
      });
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  
      },
      body: JSON.stringify({
        productId: product.id ||product._id,
        quantity: 1
      })
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message || "Product added to cart",{
        autoClose:500
      });
      return { success: true, data };
    } else {
      toast.error(data.error || "Product cannot be added to cart");
      return { success: false, error: data.error };
    }

  } catch (error) {
    console.error("Error adding product to cart:", error);
    toast.error("Something went wrong!");
    return { success: false, error: error.message };
  }
};



export const getCartItems=async ()=>{
  try {
    const token=localStorage.getItem("login-token");
    if(!token){
      
      toast.error("please login to continue..",{
        autoClose:500
      });
      console.log("login required!")
      return [];
    }
    const res=await fetch(`${API_BASE_URL}/api/cart`,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    const data=await res.json();
    if(res.ok)
    {
      console.log("cart items success!");
      return data;
    }
    else{
      console.log(data.error)
      return [];
    }
      


  } catch (error) {
    return [];

  }
}

export const deleteProduct=async (id)=>{
  try {
    const token=localStorage.getItem("login-token");
    if(!token)
    {
      toast.error("please login to continue..",{
        autoClose:500
      });
    }
    const res=await fetch(`${API_BASE_URL}/api/cart/${id}`,{
      method:'DELETE',
      headers:{
        'Authorization':`Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    const data=await res.json();
    if(res.ok){
      console.log('product deleted!',data.message);
      return data;
    }
    else{
      console.log(data.error);
    }
  } catch (error) {
    console.log("something went wrong!")
    return [];
  }
}

export const clearCart=async ()=>{
  try {
    const token=localStorage.getItem("login-token");
    if(!token){
       toast.error("please login to continue..",{
        autoClose:500
      });
    }
    const res=await fetch(`${API_BASE_URL}/api/cart/clear`,{
      method:'DELETE',
      headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}` 
      }
    });
    const data=await res.json();
    if(res.json){
      console.log(data.message);
      return data
    }
    else{
     console.log(data.error);
      return []
    }

  } catch (error) {
    console.log('ERROR!',data.error)
    return []
  }
}