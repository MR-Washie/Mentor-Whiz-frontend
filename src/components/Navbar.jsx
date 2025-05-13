import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // [verified, setVerified] = useState(false)
  
  return (
    <div className="relative">
      {/* Orange quarter-circle */}
      <div className="absolute left-[-3%] w-32 h-32 bg-orange-400 rounded-full"></div>

      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm py-4 px-8 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logoMN.png" 
            alt="Mentor Wise Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black"><Link to="/">Home</Link></a>
          <a href="#" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black"><Link to="about-us">About Us</Link></a>
          <a href="#" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black"><Link to="become-mentor">Become Mentor</Link></a>
          <a href="#" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black"><Link to="/plan">Plan</Link></a>
          <a href="#" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black"><Link to="/contact-us">Contact Us</Link></a>
          <a href="#" className="text-gray-700 hover:text-black font-medium border-b-2 border-transparent hover:border-black"><Link to="/faqs">FAQs</Link></a>

          {/* Login/Signup Button */}
          <button className="ml-4 px-4 py-2 border cursor-pointer border-gray-400 rounded-md text-gray-700 hover:bg-gray-100">
           
              <Link to="/login">Login/Signup</Link>
            
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;