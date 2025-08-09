import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaDribbble,
  FaBell, FaChevronDown, FaSignOutAlt
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { useAuthStore } from '../store/useAuthStore';

// const ProfilePage = () => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const { authUser } = useAuthStore();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get('/api/user/profile');
  //       setUser(res.data);
  //     } catch (err) {
  //       console.error('Failed to load user:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  // if (loading) return <div className="p-8 text-center text-gray-600">Loading profile...</div>;
  // if (!user) return <div className="p-8 text-center text-red-500">User data not found.</div>;

//   return (
//     <div className="pt-20 flex min-h-screen bg-gray-200">
//       {/* Sidebar */}
//       <aside className="w-full lg:w-1/4 flex flex-col items-center border-r border-gray-200 py-6 bg-white">
//          {/* <div className="w-full md:w-1/3 text-center border-r md:border-r border-gray-300"> */}
//             <img
//               src={user.profilePic || 'user icon.png'}
//               alt="Profile"
//               className="w-24 h-24 rounded-full mx-auto mb-1"
//             />
//             <h2 className="font-bold text-md text-[#242424]">{authUser?.fullName}</h2>
//             <button className="bg-black text-white p-4 rounded text-md">
//               Membership Status
//             </button>
//             {/* <p className="text-sm text-gray-600">Feature not available</p> */}
//           {/* </div> */}
//         {/* <div>
//           <h1 className="text-2xl font-bold mb-6 text-gray-700">
//             <span className="text-pink-500">M</span>ENTOR
//           </h1>
//           <nav className="space-y-2">
//             <button className="w-full px-3 py-2 text-left hover:bg-gray-100">Dashboard</button>
//             <button className="w-full px-3 py-2 bg-black text-white text-left rounded-md">Profile</button>
//             <button className="w-full px-3 py-2 text-left hover:bg-gray-100">Order</button>
//             <div>
//               <button className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-100">
//                 <span>Doubt</span>
//                 <FaChevronDown className="text-sm" />
//               </button>
//             </div>
//           </nav>
//         </div> */}
//         {/* <button className="flex items-center gap-2 text-red-500 hover:underline text-sm">
//           <FaSignOutAlt />
//           Logout
//         </button> */}
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-white">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between mb-6">
//           <FiMenu className="text-xl md:hidden" />
//           <div className="flex items-center gap-3">
//             <FaBell className="text-gray-600" />
//             <img
//               src={user.profilePic || '/default-user.png'}
//               alt="User"
//               className="w-8 h-8 rounded-full"
//             />
//             <div className="text-sm text-right">
//               <p className="font-semibold text-[#38393C]">{authUser?.fullName}</p>
//               <p className="text-[#ABAEB7]">{authUser?.email}</p>
//             </div>
//           </div>
//         </div>

//         {/* Profile Section */}
//         <div className="flex flex-col md:flex-row gap-6 bg-white p-6 border rounded-lg shadow-sm">
//           {/* Left Panel */}
//           {/* <div className="w-full md:w-1/3 text-center border-r md:border-r border-gray-300">
//             <img
//               src={user.profilePic || '/default-user.png'}
//               alt="Profile"
//               className="w-24 h-24 rounded-full mx-auto mb-2"
//             />
//             <h2 className="font-semibold text-lg text-[#242424]">{authUser?.fullName}</h2>
//             <p className="text-gray-500 text-sm mb-4">{authUser?.userName}</p>
//             <button className="bg-black text-white px-4 py-1 rounded mb-2 text-sm">
//               Membership Status
//             </button>
//             <p className="text-sm text-gray-600">Feature not available</p>
//           </div> */}

//           {/* Right Panel */}
//           <div className="w-full md:w-2/3">
//             <div>
//               <h3 className="font-bold text-lg border-b pb-2 mb-2">Personal Details</h3>
//               <div className="grid grid-cols-2 gap-y-2 text-sm">
//                 <p><strong>Full Name:</strong></p><p className="text-gray-600">{authUser?.fullName}</p>
//                 <p><strong>Username:</strong></p><p className="text-gray-600">{authUser?.userName}</p>
//                 <p><strong>Email:</strong></p><p className="text-gray-600">{authUser?.email}</p>
//                 <p><strong>Profile Created:</strong></p><p className="text-gray-600">{authUser?.createdAt?.split("T")[0]}</p>
//               </div>
//             </div>

//             <div className="mt-4">
//               <h3 className="font-semibold text-md border-b pb-2 mb-2">Social Links</h3>
//               <div className="flex gap-4 text-lg text-gray-600">
//                 <FaFacebookF />
//                 <FaTwitter />
//                 <FaInstagram />
//                 <FaDribbble />
//               </div>
//             </div>

//             <div className="mt-6">
//               <button className="bg-black text-white px-6 py-2 rounded-md text-sm">
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProfilePage;



// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaDribbble
// } from "react-icons";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/user/profile');
        setUser(res.data);
      } catch (err) {
        console.error('Failed to load user:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="p-8 text-center text-gray-600">Loading profile...</div>;
  if (!user) return <div className="p-8 text-center text-red-500">User data not found.</div>;
  return (
    <div className="pt-25 bg-white flex flex-col md:flex-row p-4">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 flex flex-col items-center border-r border-gray-200 py-6 bg-white">
        <img
          src={user.profilePic || 'user icon.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover justify-content"
        />
        <h2 className="mt-4 text-lg font-semibold">{authUser?.fullName}</h2>
        <p className="text-gray-500 text-sm">IIT Student</p>
        <button className="bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800">
          Membership Expire
        </button>
        <p className="mt-2 text-gray-600 text-sm">25 May 2024</p>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 mt-6 md:mt-0 md:pl-6">
        {/* Personal Details */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2">Personal Details</h3>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <span className="w-40 font-medium">Name:</span>
              <span className="text-gray-700">{authUser?.fullName}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Mobile Number:</span>
              <span className="text-gray-700">{authUser?.mobileNo}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Email:</span>
              <span className="text-gray-500">{authUser?.email}</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">City:</span>
              <span className="text-gray-700">Arrah</span>
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold border-b pb-2">Academic Details</h3>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <span className="w-40 font-medium">Course:</span>
              <span className="text-gray-700">IIT</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">College:</span>
              <span className="text-gray-700">NIT Patna</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">Language:</span>
              <span className="text-gray-700">English</span>
            </div>
            <div className="flex">
              <span className="w-40 font-medium">City:</span>
              <span className="text-gray-700">Arrah</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold border-b pb-2">Find Me On</h3>
          {/* <div className="flex gap-4 mt-4 text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaDribbble className="cursor-pointer hover:text-black" />
          </div> */}
        </div>

        {/* Edit Button */}
        <div className="mt-8">
          <button className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}



