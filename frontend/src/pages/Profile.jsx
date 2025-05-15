import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userProfile from "../api/user";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  
  useEffect(() => {
    loadProfile();
   
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login-token");
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const loadProfile=async ()=>{
    const data=await userProfile();
     setUserData(data.user);
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      {/* Profile Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={userData?.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{userData?.username}</h2>
          <p className="text-gray-500">{userData?.role}</p>
        </div>

        {/* Profile Information */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">{userData?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Role:</span>
            <span className="text-gray-600">{userData?.role}</span>
          </div>
        </div>

        {/* Edit and Logout Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleEditProfile}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
