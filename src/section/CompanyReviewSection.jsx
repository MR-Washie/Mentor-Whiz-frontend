import React from 'react';

export default function CompanyReviewSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Sample SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 3h18v18H3z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Company Review</h2>

          <p className="text-gray-600 mb-4">
            Get an objective, mentor‑led evaluation of a company before you apply or accept an offer.
            We break down culture, tech stack, growth, compensation bands, and interview patterns—so
            decisions are based on facts, not guesswork.
          </p>

          <p className="text-gray-600 mb-6">
            Expect a concise brief with pros, risks, and red flags tailored to your role and level,
            plus actionable next steps: how to position your resume, what projects to highlight, and
            which interview topics to prepare. Perfect for shortlisting targets or comparing offers.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="service.png"
            alt="Company Review"
            className="w-full rounded-md border-[5px] border-[#ff0080] object-cover"
            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
          />
        </div>
      </div>

      {/* Decorative Orange Circle */}
      <div className="hidden md:block absolute bottom-0 left-0 z-0">
        <div className="w-40 h-40 bg-[#FFA500] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
}
