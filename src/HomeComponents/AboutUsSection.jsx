import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
      
      {/* Image */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="border-[6px] border-pink-600 rounded-md overflow-hidden w-full max-w-md mx-auto">
          <img
            src="about image.png"
            alt="About Us"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-md text-sm">
          <Link to="/about-us">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;