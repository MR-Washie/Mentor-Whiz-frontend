import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBell, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col justify-between border-r">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-gray-700">
            <span className="text-pink-500">M</span>ENTOR
          </h1>
          <nav className="space-y-2">
            <button className="w-full flex items-center px-3 py-2 rounded-md text-left hover:bg-gray-100 text-[#141414] ">
              Dashboard
            </button>
            <button className="w-full flex items-center px-3 py-2 rounded-md text-left bg-black text-white">
              Profile
            </button>
            <button className="w-full flex items-center px-3 py-2 rounded-md text-left hover:bg-gray-100 text-gray-700">
              Order
            </button>
            <div>
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-left hover:bg-gray-100 text-gray-700">
                <span>Doubt</span>
                <FaChevronDown className="text-sm" />
              </button>
              {/* Add dropdown items here if needed */}
            </div>
          </nav>
        </div>
        <button className="flex items-center gap-2 text-red-500 hover:underline text-sm">
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl">
            <FiMenu className="md:hidden" />
          </div>
          <div className="flex items-center gap-3">
            <FaBell className="text-gray-600" />
            <img
              src="user icon.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm text-right">
              <p className="font-semibold text-[#38393C] ">Juhi Patel</p>
              <p className="text-[#ABAEB7] ">pateljuhi@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 bg-white p-6 border rounded-lg shadow-sm">
          {/* Left Panel */}
          <div className="w-full md:w-1/3 text-center border-r md:border-r border-gray-300">
            <img
              src="user icon.png"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h2 className="font-semibold text-lg text-[#242424]">Satyam Prakash</h2>
            <p className="text-gray-500 text-sm mb-4">IIT</p>
            <button className="bg-black text-white px-4 py-1 rounded mb-2 text-sm">
              Membership Expire
            </button>
            <p className="text-sm text-gray-600">25 May 2024</p>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-2/3">
            <div>
              <h3 className="font-semibold text-md border-b pb-2 mb-2">Personal Details</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <p><strong>Name:</strong></p><p className="text-gray-600">Satyam Prakash</p>
                <p><strong>WhatsApp Number:</strong></p><p className="text-gray-600">7488264211</p>
                <p><strong>Email:</strong></p><p className="text-gray-600">sprakashtv@gmail.com</p>
                <p><strong>City:</strong></p><p className="text-gray-600">Arrah</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-md border-b pb-2 mb-2">Academic Details</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <p><strong>Course:</strong></p><p className="text-gray-600">IIT</p>
                <p><strong>College:</strong></p><p className="text-gray-600">IIT Patna</p>
                <p><strong>Language:</strong></p><p className="text-gray-600">English</p>
                <p><strong>City:</strong></p><p className="text-gray-600">Arrah</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-md border-b pb-2 mb-2">Find Me On</h3>
              <div className="flex gap-4 text-lg text-gray-600">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaDribbble />
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-black text-white px-6 py-2 rounded-md text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;