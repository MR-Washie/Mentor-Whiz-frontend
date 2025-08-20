import React, { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminJobCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "Remote",
    type: "Full-time",
    description: "",
    requirements: "",
    applyUrl: "",
    isActive: true,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        requirements: form.requirements
          ? form.requirements.split("\n").map((s) => s.trim()).filter(Boolean)
          : [],
      };
      await axiosInstance.post("/api/admin/jobs", payload);
      toast.success("Job created");
      navigate("/admin/jobs");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to create job");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Job</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="w-full border p-2 rounded" name="title" placeholder="Title" value={form.title} onChange={onChange} />
        <input className="w-full border p-2 rounded" name="company" placeholder="Company" value={form.company} onChange={onChange} />
        <input className="w-full border p-2 rounded" name="logo" placeholder="Company logo Url" value={form.logo} onChange={onChange} />
        <input className="w-full border p-2 rounded" name="location" placeholder="Location" value={form.location} onChange={onChange} />
        <select className="w-full border p-2 rounded" name="type" value={form.type} onChange={onChange}>
          <option>Full-time</option><option>Part-time</option><option>Internship</option><option>Contract</option>
        </select>
        <textarea className="w-full border p-2 rounded h-32" name="description" placeholder="Description" value={form.description} onChange={onChange} />
        <textarea className="w-full border p-2 rounded h-24" name="requirements" placeholder="Requirements (one per line)" value={form.requirements} onChange={onChange} />
        <input className="w-full border p-2 rounded" name="applyUrl" placeholder="Apply URL" value={form.applyUrl} onChange={onChange} />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={onChange} /> Active
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}
