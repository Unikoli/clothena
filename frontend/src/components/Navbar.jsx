import { ShoppingCart, User, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        CLOTHENA
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-black">
          <Heart size={24} />
        </button>
        <button onClick={()=>navigate('/cart')} className="text-gray-600 hover:text-black">
          
          <ShoppingCart  size={24} />
        </button>
        <button className="text-gray-600 hover:text-black">
          <User size={24} />
        </button>
      </div>
    </nav>
  );
}
