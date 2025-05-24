import React, { useState } from "react";

const MentorSignup = () => { const [activeSection, setActiveSection] = useState("");

const toggleSection = (section) => { setActiveSection(activeSection === section ? "" : section); };

return ( <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-20"> <h2 className="text-2xl font-bold mb-2 text-#111927">Sign up your Account</h2> <p className="mb-4 text-sm text-gray-600">Register as a mentor on MentorWhiz</p>

{/* Basic Details */}
  <div>
    <button
      className="w-full text-left py-2 px-4 bg-black text-white rounded-md"
      onClick={() => toggleSection("basic")}
    >
      Basic Details
    </button>
    {activeSection === "basic" && (
      <div className="mt-4 space-y-4">
        <input type="text" placeholder="Enter full name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Enter Email" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Enter mobile no" className="w-full p-2 border rounded" />
        <select className="w-full p-2 border rounded">
          <option>Please Select Your Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <select className="w-full p-2 border rounded">
          <option>Please Select Your Mentor type</option>
          <option>Academic</option>
          <option>Professional</option>
        </select>
        <button className="w-full py-2 bg-black text-white rounded">Next</button>
      </div>
    )}
  </div>

  {/* Other Details */}
  <div className="mt-6">
    <button
      className="w-full text-left py-2 px-4 bg-black text-white rounded-md"
      onClick={() => toggleSection("other")}
    >
      Other Details
    </button>
    {activeSection === "other" && (
      <div className="mt-4 space-y-4">
        <input type="url" placeholder="Enter LinkedIn Profile url" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Enter Collage / Company name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Enter Year of Joining/ Admission" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Enter city name" className="w-full p-2 border rounded" />
        <select className="w-full p-2 border rounded">
          <option>Please Select Your language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Other</option>
        </select>
        <button className="w-full py-2 bg-black text-white rounded">Next</button>
      </div>
    )}
  </div>

  {/* Document Upload */}
  <div className="mt-6">
    <button
      className="w-full text-left py-2 px-4 bg-black text-white rounded-md"
      onClick={() => toggleSection("documents")}
    >
      Documents Upload
    </button>
    {activeSection === "documents" && (
      <div className="mt-4 space-y-4">
        <label className="block">
          <span className="block mb-1">Identity Proof</span>
          <input type="file" className="w-full p-2 border rounded" />
        </label>
        <label className="block">
          <span className="block mb-1">Collage/Company proof</span>
          <input type="file" className="w-full p-2 border rounded" />
        </label>
        <button className="w-full py-2 bg-black text-white rounded">Submit</button>
      </div>
    )}
  </div>
</div>

); };

export default MentorSignup;