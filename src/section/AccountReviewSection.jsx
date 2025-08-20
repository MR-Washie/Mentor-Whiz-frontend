import React from 'react';

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
            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Account Review</h2>

          <p className="text-gray-600 mb-4">
            Get a mentor-led audit of your portfolio, LinkedIn, GitHub, or resume. We evaluate clarity,
            impact, and credibility—what recruiters notice first and what to fix right away.
          </p>

          <p className="text-gray-600 mb-6">
            Receive a prioritized checklist with copy tweaks, project positioning, keyword alignment,
            and visual polish. Optional follow-up includes mock recruiter screens and ATS checks.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Decoration */}
      <div className="hidden md:block absolute bottom-0 right-0 z-0">
        <div className="w-40 h-40 bg-[#A020F0] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
}
