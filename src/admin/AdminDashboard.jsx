import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({
    jobs: null,
    mentors: null,
    users: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchCounts() {
      try {
        setLoading(true);
        // Adjust endpoints as per your backend API design
        const [jobsRes, mentorsRes, usersRes] = await Promise.all([
          axiosInstance.get("/api/admin/jobs/count"),
          axiosInstance.get("/api/admin/mentors/count"),
          axiosInstance.get("/api/admin/users/count"),
        ]);

        if (!ignore) {
          setCounts({
            jobs: jobsRes.data.count,
            mentors: mentorsRes.data.count,
            users: usersRes.data.count,
          });
        }
      } catch (error) {
        if (!ignore) {
          toast.error("Failed to load dashboard counts");
          setCounts({ jobs: 0, mentors: 0, users: 0 });
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchCounts();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to the admin panel. Use the sidebar to manage jobs and other site content.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <DashboardCard title="Jobs" count={counts.jobs} loading={loading} />
        <DashboardCard title="Mentors" count={counts.mentors} loading={loading} />
        <DashboardCard title="Users" count={counts.users} loading={loading} />
      </div>
    </div>
  );
}

function DashboardCard({ title, count, loading }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm flex flex-col items-center">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-4xl font-extrabold text-gray-900 min-h-[48px] flex items-center justify-center">
        {loading ? <LoadingSpinner /> : count !== null ? count : "—"}
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-6 w-6 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
