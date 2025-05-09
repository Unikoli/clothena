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
        'Authorization': `Bearer ${token}`  
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


export const getCartItems=async ()=>{
  try {
    const token=localStorage.getItem("login-token");
    if(!token){
      toast.error("please login to continue..");
      console.log("login required!")
    }
    const res=await fetch(`http://localhost:8000/api/cart`,{
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
      toast.error("please login to continue!");
    }
    const res=await fetch(`http://localhost:8000/api/cart/${id}`,{
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
      toast.error("please login to continue!");
    }
    const res=await fetch(`http://localhost:8000/api/cart/clear`,{
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