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
            alt="About Mentor WHIZ"
            className="w-full object-cover"
            onError={(e)=>{e.currentTarget.style.opacity='0.3';}}
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          We connect ambitious learners with industry mentors for practical, outcome‑driven guidance.
          From project reviews and career roadmaps to interview prep and portfolio polish, our goal is
          to turn curiosity into confidence and effort into results—faster and with fewer detours.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-md text-sm">
          <Link to="/about-us">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
