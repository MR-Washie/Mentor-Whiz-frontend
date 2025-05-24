import React from 'react';
// import accountImage from './your-image-path.jpg'; // Replace with actual image path

export default function AccountReviewSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="service.png"
            alt="Account Review"
            className="w-full rounded-md border-[5px] border-[#ff0080] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Example icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Account Review</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Purple Circle Decoration */}
      <div className="hidden md:block absolute bottom-0 right-0 z-0">
        <div className="w-40 h-40 bg-[#A020F0] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
}