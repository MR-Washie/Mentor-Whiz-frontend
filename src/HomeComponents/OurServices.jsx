import React from "react";
import { FaUserTie, FaBuilding, FaStar, FaUserGraduate, FaUsers, FaSearchDollar, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { icon: <FaUserTie size={40} />, title: "1on1 Coaching", desc: "Personalized mentoring with action plans, reviews, and measurable outcomes." },
  { icon: <FaBuilding size={40} />, title: "Company Review", desc: "Objective breakdowns of culture, tech, growth, and interview patterns." },
  { icon: <FaStar size={40} />, title: "Accounts Reviews", desc: "Resume, LinkedIn, and GitHub audits with practical, prioritized fixes." },
  { icon: <FaUserGraduate size={40} />, title: "Be an Intern", desc: "Mentored, real‑world projects with weekly reviews and certificates." },
  { icon: <FaUsers size={40} />, title: "HR Consulting", desc: "Role design, hiring loops, onboarding, and performance systems that scale." },
  { icon: <FaSearchDollar size={40} />, title: "SEO Optimization", desc: "Technical cleanup, keyword maps, and content briefs for steady growth." },
  { icon: <FaBriefcase size={40} />, title: "Job Hiring", desc: "Curated pipelines for teams; targeted prep and negotiation for candidates." },
  { icon: <FaProjectDiagram size={40} />, title: "Project Hub", desc: "Curated project briefs, mentor feedback, and portfolio‑ready case studies." },
];

export default function OurServices() {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-black">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/our-services">
        <button className="cursor-pointer mt-10 px-6 py-2 bg-black text-white rounded-md">
          See All
        </button>
      </Link>
    </section>
  );
}
