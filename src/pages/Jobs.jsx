// JobPage.jsx
import React from "react";
import { Bookmark, Share2 } from "lucide-react";

const Jobs = () => {
  return (
    <div className=" max-w-5xl mx-auto mt-30 px-4 py-6 bg-white shadow rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-start gap-4">
          <img src="logo.jpg" alt="Company Logo" className="w-16 h-16 rounded" />
          <div>
            <h1 className="text-2xl font-semibold">Web Developer</h1>
            <p className="text-gray-600">Mindenious • Bengaluru</p>
            <p className="text-sm text-gray-500">Updated on: Jul 30, 2025</p>
          </div>
        </div>

        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Quick Apply
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <p className="font-medium">Applied</p>
          <p className="text-xl font-semibold">153</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <p className="font-medium">Application Deadline</p>
          <p className="text-xl font-semibold">10 days left</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <p className="font-medium">Salary</p>
          <p className="text-xl font-semibold">4 LPA - 6 LPA</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4 items-center text-gray-600">
        <button className="flex items-center gap-1 hover:text-gray-800">
          <Bookmark size={18} /> Save
        </button>
        <button className="flex items-center gap-1 hover:text-gray-800">
          <Share2 size={18} /> Share
        </button>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Engineering Students</span>
        {/* <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">MBA Students</span> */}
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">All Branches</span>
      </div>
    </div>
  );
};

export default Jobs;