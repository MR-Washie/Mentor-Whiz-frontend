import React, { useState } from 'react';
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { useAuthStore } from '../store/useAuthStore';
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  )
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };
=======

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
>>>>>>> c5bed2e9660a64c087691cc08f5893a11632dda8

  return (
    <div className="mt-25 flex items-center justify-center bg-[#f4fdfc]">
      <div className="absolute right-[400px] w-[250px] h-[250px] bg-[#ff006e] rounded-full z-0"></div>

      <div className="relative z-10 bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2 text-[#111927]">Log In your Account</h2>
        <p className="text-sm mb-5">
          Don’t have an account? <span className="font-semibold text-blue-600 cursor-pointer  underline"><Link to="/signup">SIGN UP</Link></span>
        </p>
<<<<<<< HEAD
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#111927]">Your email</label>
          <input
            type="text"
            placeholder="Enter User email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
=======

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#111927]">Your User Name or email</label>
          <input
            type="text"
            placeholder="Enter User name or email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
>>>>>>> c5bed2e9660a64c087691cc08f5893a11632dda8
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1 text-[#111927] ">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-10"
<<<<<<< HEAD
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
=======
>>>>>>> c5bed2e9660a64c087691cc08f5893a11632dda8
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
          <a href="#" className="text-[#141414] font-medium hover:underline">
            <Link to="/forgot-password" >Forgot password?</Link>
          </a>
        </div>

<<<<<<< HEAD
        <button 
        type='submit'
         className="btn w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          disabled={isLoggingIn} >
            { isLoggingIn? (
              <>
                <Loader2 className="size-5 ml-43 animate-spin" />
                Loading....
              </>
            ) : (
              "Login"
            )
          }
        </button>
        </form>

=======
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Login
        </button>
>>>>>>> c5bed2e9660a64c087691cc08f5893a11632dda8
      </div>
    </div>
  );
};

export default LoginPage;