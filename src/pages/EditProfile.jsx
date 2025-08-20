import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initial = {
  fullName: "",
  mobileNo: "",
  city: "",
  country: "India",
  language: "English",
  college: "",
  profilePic: "",
};

export default function EditProfile() {
  const navigate = useNavigate();
  const {
    profile,
    fetchMyProfile,
    updateMyProfile,
    isLoadingProfile,
    isUpdatingProfile,
  } = useAuthStore();

  const [form, setForm] = useState(initial);

  useEffect(() => {
    if (!profile) fetchMyProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setForm({
        fullName: profile.fullName || "",
        mobileNo: profile.mobileNo || "",
        city: profile.city || "",
        country: profile.country || "India",
        language: profile.language || "English",
        college: profile.college || "",
        profilePic: profile.profilePic || "",
      });
    }
  }, [profile]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await updateMyProfile(form);
    if (ok) navigate("/profile");
  };

  if (isLoadingProfile && !profile) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600">
        <Loader2 className="size-5 animate-spin mr-2" /> Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-20">
      <h2 className="text-xl font-semibold mb-4 text-[#111927]">Edit Profile</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Your full name"
          />
        </div>


        <div>
          <label className="block text-sm font-medium mb-1">Mobile Number</label>
          <input
            name="mobileNo"
            value={form.mobileNo}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="10-digit mobile"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              name="city"
              value={form.city}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              name="country"
              value={form.country}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Country"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <input
              name="language"
              value={form.language}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Language"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">College</label>
            <input
              name="college"
              value={form.college}
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="College"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Profile Picture URL</label>
          <input
            name="profilePic"
            value={form.profilePic}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="https://..."
          />
          {form.profilePic ? (
            <img
              src={form.profilePic}
              alt="Preview"
              className="h-16 w-16 rounded-full mt-2 object-cover border"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : null}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isUpdatingProfile}
            className="btn bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-60"
          >
            {isUpdatingProfile ? (
              <>
                <Loader2 className="size-5 mr-2 animate-spin inline" />
                Saving...
              </>
            ) : (
              "Save"
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
