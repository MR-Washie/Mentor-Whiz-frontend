import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminJobsList() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const load = async () => {
    const res = await axiosInstance.get("/api/admin/jobs");
    setJobs(res.data);
  };

  useEffect(() => { load(); }, []);

  const del = async (id) => {
    if (!confirm("Delete this job?")) return;
    try {
      await axiosInstance.delete(`/api/admin/jobs/${id}`);
      toast.success("Job deleted");
      load();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Jobs</h2>
        <button className="bg-black text-white px-4 py-2 rounded" onClick={() => navigate("/admin/jobs/new")}>New Job</button>
      </div>
      <div className="bg-white rounded-xl shadow divide-y">
        {jobs.map(j => (
          <div key={j._id} className="p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{j.title} • {j.company}</div>
              <div className="text-sm text-gray-600">{j.location} • {j.type} • {j.isActive ? "Active" : "Inactive"}</div>
            </div>
            <div className="flex gap-2">
              <Link to={`/admin/jobs/${j._id}/edit`} className="px-3 py-1 border rounded">Edit</Link>
              <button onClick={() => del(j._id)} className="px-3 py-1 border rounded text-red-600">Delete</button>
            </div>
          </div>
        ))}
        {jobs.length === 0 && <div className="p-6 text-gray-600">No jobs yet.</div>}
      </div>
    </div>
  );
}
