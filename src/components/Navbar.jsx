import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { checkAuth, logout, authUser } = useAuthStore();

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/"><img src="logoMN.png" alt="MentorWhiz" className="h-12" /></Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/our-services">Our Services</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/become-mentor">Become Mentor</Link>
          <Link to="/plan">Plan</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact-us">Contact Us</Link>
          {authUser ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={logout}><LogOut className="size-5" /></button>
            </>
          ) : (
            <Link to="/login"><button>Login/Signup</button></Link>
          )}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 pb-4 space-y-2 text-sm font-medium">
            <Link to="/">Home</Link>
            <Link to="/our-services">Our Services</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/become-mentor">Become Mentor</Link>
            <Link to="/plan">Plan</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact-us">Contact Us</Link>
            {authUser ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Link to="/login"><button>Login/Signup</button></Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;