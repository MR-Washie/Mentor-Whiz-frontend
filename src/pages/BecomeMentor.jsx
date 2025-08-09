import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const MentorSignup = () => {
  const [activeSection, setActiveSection] = useState("basic");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    gender: "",
    mentorType: "",
    linkedinId: "",
    profession: "",
    joiningYear: "",
    city: "",
    language: "",
    identityProof: null,
    companyProof: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      console.log(form.fullName);
      for (let key in form) {
        formData.append(key, form[key]);
      }
  
      await axios.post("https://mentor-whiz-frontend.onrender.com/api/mentorRegister", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
        toast.success("Application submitted successfully!")
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };

    

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-2">Sign up your Account</h2>
      <p className="mb-4 text-sm text-gray-600">Register as a mentor on MentorWhiz</p>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Basic Details */}
        <div>
          <button
            type="button"
            className="w-full text-left py-2 px-4 bg-black text-white rounded-md"
            onClick={() => toggleSection("basic")}
          >
            Basic Details
          </button>
          {activeSection === "basic" && (
            <div className="mt-4 space-y-4">
              <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter full name" className="w-full p-2 border rounded" required />

              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter Email" className="w-full p-2 border rounded" required />

              <input name="mobileNo" value={form.mobileNo} onChange={handleChange} placeholder="Enter mobile no" className="w-full p-2 border rounded" required />
              
              <select name="gender" value={form.gender} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Please Select Your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select name="mentorType" value={form.mentorType} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Please Select Your Mentor Type</option>
                <option>Academic</option>
                <option>Professional</option>
              </select>
              <button
                type="button"
                className="w-full py-2 bg-black text-white rounded"
                onClick={() => setActiveSection("other")}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Other Details */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full text-left py-2 px-4 bg-black text-white rounded-md"
            onClick={() => toggleSection("other")}
          >
            Other Details
          </button>
          {activeSection === "other" && (
            <div className="mt-4 space-y-4">
              <input name="linkedinId" value={form.linkedinId} onChange={handleChange} placeholder="Enter LinkedIn Profile url" className="w-full p-2 border rounded" />
              <input name="profession" value={form.profession} onChange={handleChange} placeholder="Enter College / Company name" className="w-full p-2 border rounded" />
              <input name="joiningYear" value={form.joiningYear} onChange={handleChange} placeholder="Enter Year of Joining/ Admission" className="w-full p-2 border rounded" />
              <input name="city" value={form.city} onChange={handleChange} placeholder="Enter city name" className="w-full p-2 border rounded" />
              <select name="language" value={form.language} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Please Select Your Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Other</option>
              </select>
              <button
                type="button"
                className="w-full py-2 bg-black text-white rounded"
                onClick={() => setActiveSection("documents")}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Document Upload */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full text-left py-2 px-4 bg-black text-white rounded-md"
            onClick={() => toggleSection("documents")}
          >
            Documents Upload
          </button>
          {activeSection === "documents" && (
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="block mb-1">Identity Proof</span>
                <input type="file" name="identityProof" onChange={handleChange} className="w-full p-2 border rounded" />
              </label>
              <label className="block">
                <span className="block mb-1">College/Company Proof</span>
                <input type="file" name="companyProof" onChange={handleChange} className="w-full p-2 border rounded" />
              </label>
              <button type="submit" className="w-full py-2 bg-black text-white rounded">Submit</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MentorSignup;
