import React from 'react';

export default function ProjectHub() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Left */}
        <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Project Hub</h2>

          <p className="text-gray-600 mb-4">
            A curated library of real‑world project briefs with mentor guidance. Build products that
            demonstrate skills employers value—architecture, collaboration, and delivery.
          </p>

          <p className="text-gray-600 mb-6">
            Choose a track, join a sprint, and get reviews at key milestones. Graduate with a
            portfolio case study, demo video, and a skills summary you can share.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2">
          <img
            src="service.png"
            alt="Project Hub"
            className="w-full rounded-md border-[5px] border-[#ff0080] object-cover"
            onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
          />
        </div>
      </div>

      {/* Decoration */}
      <div className="hidden md:block absolute bottom-0 left-0 z-0">
        <div className="w-40 h-40 bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
}
