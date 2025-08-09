import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="mt-25 flex items-center justify-center bg-[#f4fdfc]">
      <div className="absolute right-[400px] w-[250px] h-[250px] bg-[#ff006e] rounded-full z-0"></div>

      <div className="relative z-10 bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2 text-[#111927]">Log In your Account</h2>
        <p className="text-sm mb-5">
          Don’t have an account?{" "}
          <span className="font-semibold text-blue-600 cursor-pointer underline">
            <Link to="/signup">SIGN UP</Link>
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[#111927]">Enter your email or Username</label>
            <input
              type="text"
              name='identifier'
              placeholder="email or Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1 text-[#111927]">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-10"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 focus:outline-none"
            >
              {showPassword ? '🙈' : '👁'}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm mb-5">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 text-[#6D6D6D]" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-[#141414] font-medium hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 ml-2 animate-spin inline" />
                <span className="ml-2">Loading...</span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;