import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Community of <span className="text-orange-500">Mentors</span> & <br />
          <span className="text-purple-600">Toppers</span>
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Crack your preparations with guidance from the best. Rethwrit brings to you a community of All Stages toppers!
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-md text-sm">
            <Link to="/become-mentor">Become Mentor</Link>
          </button>
          <Link to = "/about-us"><button className="border border-gray-300 px-6 py-2 rounded-md text-sm hover:bg-gray-100">
            Learn More
          </button></Link>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative z-10">
          <img
            src="Abhishek sir.jpg"
            alt="Mentor"
            className="rounded-lg w-72 md:w-80"
          />
        </div>
        <div className="absolute right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 bg-purple-600 rounded-tl-full z-0"></div>
      </div>
    </div>
  );
};

export default HeroSection;