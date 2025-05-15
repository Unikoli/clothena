// src/components/AuthForm.jsx
import React from 'react';

const AuthForm = ({
  type = 'login',
  handlesubmit,
  email,
  password,
  setEmail,
  setPassword,
  username,
  setUsername,
  message
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-lg shadow-md overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src="/auth_image1.png" // place your uploaded image in /public
            alt="clothes"
            className="w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Hello again!
            
          </h2>
          <form onSubmit={handlesubmit}>
            <div className="mb-4">
              <label className="block text-purple-900 text-sm mb-1" >Username</label>
              <input
                type="username"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}

              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-900 text-sm mb-1" >Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                id='email'
                name='email'
                value={email}
                
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-900 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                id='password'
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"

            >
              {type === 'login' ? 'Login' : 'Register'}
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
            {type === 'login' ? (
              <>
                <p className="text-gray-600 mb-2">Forgot your password?</p>
                <p>
                  Don’t have an account?{' '}
                  <a href="/register" className="text-purple-600 font-medium">
                    Sign up
                  </a>
                </p>
              </>
            ) : (
              <p>
                Already have an account?{' '}
                <a href="/login" className="text-purple-600 font-medium">
                  Login
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
