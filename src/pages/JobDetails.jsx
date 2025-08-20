import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch(`http://localhost:3000/api/jobs/${id}`, { credentials: "include" });
        if (!res.ok) throw new Error(`Failed to load job (${res.status})`);
        const data = await res.json();
        if (!ignore) setJob(data);
      } catch (e) {
        if (!ignore) setErr(e.message || "Failed to load job");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, [id]);

  if (loading) return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
  if (err) return <div className="max-w-4xl mx-auto p-6 text-red-600">{err}</div>;
  if (!job) return null;

  return (
    <section className="mt-20 max-w-4xl mx-auto p-6 bg-white rounded-lg border">
      <header className="flex items-start gap-4">
        <img
          src={job.logo || "/default_logo.png"}
          alt={`${job.company} logo`}
          className="w-16 h-16 rounded object-cover border"
          onError={(e) => (e.currentTarget.style.opacity = "0.3")}
        />
        <div>
          <h1 className="text-2xl font-semibold">{job.title}</h1>
          <p className="text-gray-700">{job.company} • {job.location || "Remote"}</p>
          <p className="text-sm text-gray-500">Updated {new Date(job.updatedAt || job.createdAt).toLocaleDateString()}</p>
        </div>
      </header>

      {job.salaryLabel && (
        <div className="mt-4 text-sm">
          <span className="font-medium">Salary:</span> {job.salaryLabel}
        </div>
      )}

      {Array.isArray(job.tags) && job.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {job.tags.map((t, i) => (
            <span key={i} className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
              {t}
            </span>
          ))}
        </div>
      )}

      {job.description && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-1">Description</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
        </div>
      )}

      {Array.isArray(job.requirements) && job.requirements.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}

      <div className="mt-6 flex gap-3">
        {job.applyUrl && (
          <a href={job.applyUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Apply
          </a>
        )}
        <a href="/jobs" className="px-4 py-2 border rounded">Back to jobs</a>
      </div>
    </section>
  );
}
