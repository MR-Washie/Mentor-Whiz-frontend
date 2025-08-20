import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

export default function ProfilePage() {
  const navigate = useNavigate();

  // From auth store; prefer this as the primary source of truth
  const { authUser } = useAuthStore();

  // Local fallback state if you also want to fetch a fresh copy
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(!authUser); // if authUser is present, we can render immediately
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");
        // Prefer a “me” endpoint that returns the authenticated user
        const res = await axiosInstance.get("/api/users/me");
        if (!ignore) setProfile(res.data);
      } catch (err) {
        console.error("Failed to load user:", err);
        if (!ignore) setError("Failed to load profile");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    // If no authUser available (e.g., page refresh before auth store rehydrates), fetch one
    if (!authUser) fetchUser();
    return () => {
      ignore = true;
    };
  }, [authUser]);

  // Decide what to display: prefer authUser, otherwise profile fetched from API
  const user = authUser || profile;

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-600 flex items-center justify-center gap-2">
        <Loader2 className="size-5 animate-spin" />
        <span>Loading profile...</span>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="p-8 text-center text-red-500">User data not found.</div>;
  }

  return (
    <div className="pt-25 bg-white flex flex-col md:flex-row p-4">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 flex flex-col items-center border-r border-gray-200 py-6 bg-white justify-center">
        <img
          src={user.profilePic || "/userIcon.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/userIcon.png";
          }}
        />
        <h2 className="mt-4 text-lg font-semibold">{user.fullName || "-"}</h2>
        <p className="text-gray-500 text-sm">{user.college || ""}</p>

        {user.role ? (
          <span className="bg-black text-white px-4 py-2 mt-4 rounded-md">
            {user.role}
          </span>
        ) : null}
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 mt-6 md:mt-0 md:pl-6">
        {/* Personal Details */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2">Personal Details</h3>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <span className="w-40 font-medium">Name:</span>
              <span className="text-gray-700">{user.fullName || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">User Name:</span>
              <span className="text-gray-700">{user.userName || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Mobile Number:</span>
              <span className="text-gray-700">{user.mobileNo || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Email:</span>
              <span className="text-gray-700">{user.email || "-"}</span>
            </div>
          </div>
        </div>

        {/* Academic and Other Details */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold border-b pb-2">Academic and Other Details</h3>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <span className="w-40 font-medium">College:</span>
              <span className="text-gray-700">{user.college || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Language:</span>
              <span className="text-gray-700">{user.language || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">City:</span>
              <span className="text-gray-700">{user.city || "-"}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Country:</span>
              <span className="text-gray-700">{user.country || "-"}</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/profile/edit")}
            className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
