import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// If you have a shared axios instance with baseURL+credentials, import it:
// import { axiosInstance } from "../lib/axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-md transition flex flex-col sm:flex-row gap-4">
      <img
        src={job.logo || "/default_logo.png"}
        alt={`${job.company} logo`}
        className="w-16 h-16 rounded object-cover border"
        onError={(e) =>{e.currentTarget.src = "/default_logo.png";}}
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#111927]">{job.title}</h3>
        <p className="text-gray-700">{job.company} • {job.location || "Remote"}</p>
        <p className="text-sm text-gray-500 mt-1">
          {job.type || "Full-time"} • Updated {new Date(job.updatedAt || job.createdAt).toLocaleDateString()}
        </p>
        {Array.isArray(job.tags) && job.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {job.tags.slice(0, 5).map((t, i) => (
              <span key={i} className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Link
          to={`/jobs/${job._id}`}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          View
        </Link>
        {job.applyUrl && (
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Apply
          </a>
        )}
      </div>
    </div>
  );
}

export default function JobsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(0); // total matching jobs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Query state (synced with URL)
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "All";
  const loc = searchParams.get("location") || "All";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const sort = searchParams.get("sort") || "new"; // new | old

  const types = ["All", "Full-time", "Part-time", "Internship", "Contract"];

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "" || value === "All" || value == null) params.delete(key);
    else params.set(key, String(value));
    // Reset to first page when filters change
    if (["q", "type", "location", "sort", "limit"].includes(key)) {
      params.set("page", "1");
    }
    setSearchParams(params);
  };

  const queryString = useMemo(() => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (type && type !== "All") p.set("type", type);
    if (loc && loc !== "All") p.set("location", loc);
    if (page > 1) p.set("page", String(page));
    if (limit !== 10) p.set("limit", String(limit));
    if (sort && sort !== "new") p.set("sort", sort);
    return p.toString();
  }, [q, type, loc, page, limit, sort]);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setLoading(true);
        setError("");
        // Replace with your axios instance if available:
        // const res = await axiosInstance.get(`/api/jobs?${queryString}`);
        const res = await fetch(`${BASE_URL}/api/jobs`, { credentials: "include" });
        if (!res.ok) throw new Error(`Failed to load jobs (${res.status})`);
        const data = await res.json();
        // Expected response shape: { items: Job[], total: number }
        if (!ignore) {
          setJobs(Array.isArray(data.items) ? data.items : data);
          setCount(typeof data.total === "number" ? data.total : (Array.isArray(data) ? data.length : 0));
        }
      } catch (e) {
        if (!ignore) setError(e.message || "Failed to load jobs");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, [queryString]);

  const totalPages = Math.max(1, Math.ceil(count / limit));

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Jobs</h1>
        <p className="text-gray-600">Browse opportunities posted by our admin team.</p>
      </header>

      {/* Filters */}
      <div className="bg-white border rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            value={q}
            onChange={(e) => updateParam("q", e.target.value)}
            placeholder="Search by title, company, skill..."
            className="w-full border rounded px-3 py-2"
          />
          {/* Type */}
          <select
            value={type}
            onChange={(e) => updateParam("type", e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {/* Location */}
          <input
            type="text"
            value={loc === "All" ? "" : loc}
            onChange={(e) => updateParam("location", e.target.value || "All")}
            placeholder="Location (e.g., Remote, Bengaluru)"
            className="w-full border rounded px-3 py-2"
          />
          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => updateParam("sort", e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="new">Newest first</option>
            <option value="old">Oldest first</option>
          </select>
        </div>

        {/* Page size */}
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span>Per page:</span>
          {[10, 20, 50].map((n) => (
            <button
              key={n}
              className={`px-2 py-1 border rounded ${limit === n ? "bg-black text-white" : "hover:bg-gray-50"}`}
              onClick={() => updateParam("limit", n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {loading && <div className="text-gray-600">Loading jobs...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between text-sm">
            <div className="text-gray-600">
              Showing {(count === 0) ? 0 : (limit * (page - 1) + 1)}–
              {Math.min(limit * page, count)} of {count}
            </div>
            <div className="flex gap-2">
              <button
                disabled={page <= 1}
                onClick={() => updateParam("page", Math.max(1, page - 1))}
                className={`px-3 py-1 border rounded ${page <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}`}
              >
                Prev
              </button>
              <span className="px-2 py-1">Page {page} of {totalPages}</span>
              <button
                disabled={page >= totalPages}
                onClick={() => updateParam("page", Math.min(totalPages, page + 1))}
                className={`px-3 py-1 border rounded ${page >= totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}`}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
