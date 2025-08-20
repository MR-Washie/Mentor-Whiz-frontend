import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBell, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { IoMdSend } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-black text-white mt-25">
      {/* Top CTA Section */}
      <div className="bg-orange-500 text-white px-8 py-6 relative -top-10 max-w-4xl mx-auto rounded-md shadow-lg flex justify-between items-center">
        <div> 
          <h2 className="text-2xl font-bold">Looking for a Mentor?</h2> <p className="text-sm text-black-600"> Get personalized guidance from industry experts—clarify your goals, build projects with feedback, and prepare confidently for interviews and opportunities. </p> 
        </div>
        <button className="bg-white text-black px-4 py-2 font-medium rounded shadow hover:bg-gray-200">
          <Link to="/become-mentor">Explore Properties</Link>
        </button>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo and Contact */}
        <div>
          <img src="logoMN.png" alt="Logo" className="mb-4" />
          <p>Brooklyn, New York, United States</p>
          <p>+0123-456789</p>
          <p>example@example.com</p>
          <div className="flex space-x-3 mt-3">
            <a href="#"><i className="fab fa-facebook-f"><FaFacebookF /></i></a>
            <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>
            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
            <a href="#"><i className="fab fa-instagram"><FaDribbble /></i></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1 text-sm">
            <li> 
              <Link to="/about-us">About Us</Link>
            </li>
            <li>Meet the team</li>
            <li>Account Review</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>          
              <Link to="/our-services">Our Services</Link>
            </li>
            <li>1 on 1 Coaching</li>
            <li>Company Review</li>
            <li>Account Review</li>
            <li>HR Consulting</li>
            <li>SEO Optimisation</li>
          </ul>
        </div>

        {/* Helpful Link */}
        <div>
          <h4 className="font-semibold mb-3">Helpful Link</h4>
          <ul className="space-y-1 text-sm">
            <li>Contact</li>
            <li>Live Chat</li>
            <li>Wish List</li>
            <li>          
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>Return Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-3">Subscribe to our weekly Newsletter and receive updates via email.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-2 py-1 text-black bg-white"
            />
            <button className="bg-[#FF5A3C] px-4 py-1">
              <i className="fas fa-paper-plane text-white"><IoMdSend /></i>
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm mb-2">We Accept</p>
            <img src="payment-4.png.png" alt="Payment Options" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        All Rights Reserved © Mentor Whiz 2025
      </div>
    </footer>
  );
}