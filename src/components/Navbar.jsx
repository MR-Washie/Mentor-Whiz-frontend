import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { checkAuth, logout, authUser } = useAuthStore();

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to="/">
          <img src="logoMN.png" alt="MentorWhiz" className="h-12" /></Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-medium">
          <Link to="/" className="hover:text-black hover:font-semibold hover:underline">Home</Link>
          <Link to="/our-services" className="hover:text-black hover:font-semibold hover:underline">Our Services</Link>
          <Link to="/about-us" className="hover:text-black hover:font-semibold hover:underline">About Us</Link>
          <Link to="/become-mentor" className="hover:text-black hover:font-semibold hover:underline">Become Mentor</Link>
          <Link to="/plan" className="hover:text-black hover:font-semibold hover:underline">Plan</Link>
          <Link to="/faqs" className="hover:text-black hover:font-semibold hover:underline">FAQs</Link>
          <Link to="/contact-us" className="hover:text-black hover:font-semibold hover:underline">Contact Us</Link>
          

              {authUser?  (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  {/* <User className="size-5" /> */}
                  <span className="hidden sm:inline cursor-pointer">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5 cursor-pointer" />
                </button>
              </>
            ) : (
              <Link to="/login"> <button className="ml-4 border px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
                  <span className="hidden sm:inline">Login/Signup</span>
          </button> </Link>
            )
          }
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="cursor-pointer" /> : <Menu size={24} className="cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 pb-4 space-y-2 text-sm text-gray-700 font-medium">
            <Link to="/" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Home</Link>
            <Link to="/our-services" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Our Services</Link>
            <Link to="/about-us" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">About Us</Link>
            <Link to="/become-mentor" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Become Mentor</Link>
            <Link to="/plan" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Plan</Link>
            <Link to="/faqs" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">FAQs</Link>
            <Link to="/contact-us" className="font-bold hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Contact Us</Link>
            <button className="mt-2 border px-4 py-2 rounded-md font-bold hover:bg-gray-300 w-full cursor-pointer">
              
              {checkAuth? "profile" : <Link to="/login">Login/Signup</Link>}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;