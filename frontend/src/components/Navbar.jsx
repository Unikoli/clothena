import { ShoppingCart, User, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [tokens, setTokens] = useState();




  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      const token = localStorage.getItem("login-token")
      setTokens(token);

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        CLOTHENA
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 relative" ref={dropdownRef}>
        <button className="text-gray-600 hover:text-black">
          <Heart size={24} />
        </button>
        <button onClick={() => navigate("/cart")} className="text-gray-600 hover:text-black">
          <ShoppingCart size={24} />
        </button>


        <button
          className="text-gray-600 hover:text-black"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <User size={24} />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 mt-2 w-40 bg-white border rounded shadow-lg z-10">

            {tokens ?
              (
                <>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/profile");
                    }}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      localStorage.removeItem("login-token");
                      navigate("/login");
                    }}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/login");
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                >
                  Login
                </button>
              )
            }

          </div>
        )}
      </div>
    </nav>
  );
}
