import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminJobEdit() {
  const { id } = useParams();
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    async function fetchJob() {
      try {
        setLoading(true);
        setError("");
        const res = await axiosInstance.get(`/api/admin/jobs/${id}`);
        if (!ignore && res.data) {
          const job = res.data;
          setForm({
            title: job.title || "",
            logo:job.logo || "0",
            company: job.company || "",
            location: job.location || "Remote",
            type: job.type || "Full-time",
            description: job.description || "",
            requirements: (job.requirements || []).join("\n"),
            applyUrl: job.applyUrl || "",
            isActive: job.isActive ?? true,
          });
        }
      } catch (e) {
        if (!ignore) setError("Failed to load job.");
        toast.error("Failed to load job.");
        navigate("/admin/jobs");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    fetchJob();
    return () => {
      ignore = true;
    };
  }, [id, navigate]);

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
      await axiosInstance.put(`/api/admin/jobs/${id}`, payload);
      toast.success("Job updated successfully");
      navigate("/admin/jobs");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to update job");
    }
  };

  if (loading) return <div className="p-6 text-gray-600">Loading job...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Job</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={onChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={onChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="logo"
          placeholder="Logo"
          value={form.logo}
          onChange={onChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={onChange}
        />
        <select
          className="w-full border p-2 rounded"
          name="type"
          value={form.type}
          onChange={onChange}
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
        <textarea
          className="w-full border p-2 rounded h-32"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={onChange}
          required
        />
        <textarea
          className="w-full border p-2 rounded h-24"
          name="requirements"
          placeholder="Requirements (one per line)"
          value={form.requirements}
          onChange={onChange}
        />
        <input
          className="w-full border p-2 rounded"
          name="applyUrl"
          placeholder="Apply URL"
          value={form.applyUrl}
          onChange={onChange}
          required
          type="url"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={onChange}
          />{" "}
          Active
        </label>
        <div className="flex gap-2">
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Save
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded"
            onClick={() => navigate("/admin/jobs")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
