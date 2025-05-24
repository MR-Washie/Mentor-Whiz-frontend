import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const navLinks = [
  //   'Home',
  //   'Our Services',
  //   'About Us',
  //   'Become Mentor',
  //   'Plan',
  //   'Contact Us',
  //   'FAQs',
  // ];

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
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/our-services" className="hover:text-black">Our Services</Link>
          <Link to="/about-us" className="hover:text-black">About Us</Link>
          <Link to="/become-mentor" className="hover:text-black">Become Mentor</Link>
          <Link to="/plan" className="hover:text-black">Plan</Link>
          <Link to="/faqs" className="hover:text-black">FAQs</Link>
          <Link to="/contact-us" className="hover:text-black">Contact Us</Link>
          <button className="ml-4 border px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
            <Link to="/login">Login/Signup</Link>
          </button>
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
            <Link to="/" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Home</Link>
            <Link to="/our-services" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Our Services</Link>
            <Link to="/about-us" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">About Us</Link>
            <Link to="/become-mentor" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Become Mentor</Link>
            <Link to="/plan" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Plan</Link>
            <Link to="/faqs" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">FAQs</Link>
            <Link to="/contact-us" className="hover:text-black hover:bg-gray-300 px-5 py-3 rounded-md">Contact Us</Link>
            <button className="mt-2 border px-4 py-2 rounded-md font-semibold hover:bg-gray-300 w-full cursor-pointer">
              <Link to="/login">Login/Signup</Link>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;