// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";


// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     purpose: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agree: false,
//   });
//   const {signup, isSigningUp} = useAuthStore();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Submit logic here
//     signup(formData);
//   };

//   return (
//     <div className="flex items-center justify-center bg-white px-4 mt-15">
//         <div className="absolute bottom-40 right-[390px] w-[250px] h-[250px] bg-[#ff006e] rounded-full z-0"></div>

//         <div className="relative z-10 bg-white p-5 rounded-xl shadow-md w-full max-w-md">
//         <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-gray-50 p-8 rounded-md shadow"
//       >
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign up your Account</h2>
//         <p className="mb-6 text-sm">
//           Already have an account?{" "}
//           <a href="#" className="text-blue-600 font-semibold underline hover:underline">
//           <Link to="/login">SIGN IN</Link>
//           </a>
//         </p>

//         <div className="space-y-4">

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Name</label>
//           <input
//             type="text"
//             placeholder="Enter name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">User Name</label>
//           <input
//             type="text"
//             placeholder="Enter User name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//             name="username"
//             value={form.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">For What?</label>
//           <select
//             name="purpose"
//             value={form.purpose}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//           >
//             <option value="">Please Select</option>
//             <option value="student">Student</option>
//             <option value="developer">Developer</option>
//             <option value="other">Other</option>
//           </select>
//           </div>
//           <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//           />
//         </div>
//           <div className="mb-4 relative">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter Password"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-10"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-9 text-gray-500 focus:outline-none"
//           >
//             {showPassword ? '🙈' : '👁'}
//           </button>
//         </div>
//         <div className="mb-4 relative">
//           <label className="block text-sm font-medium mb-1">Confirm Password</label>
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Enter confirm Password"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-10"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-3 top-9 text-gray-500 focus:outline-none"
//           >
//             {showConfirmPassword ? '🙈' : '👁'}
//           </button>
//         </div>
//         </div>

//         <label className="inline-flex items-center mt-4">
//           <input
//             type="checkbox"
//             name="agree"
//             checked={form.agree}
//             onChange={handleChange}
//             className="form-checkbox mr-2"
//           />
//           <span className="text-sm">
//             I agree with{" "}
//             <a href="#" className="font-semibold underline">
//               Privacy Policy
//             </a>{" "}
//             and{" "}
//             <a href="#" className="font-semibold underline">
//               Terms of Use
//             </a>
//           </span>
//         </label>

//         <button 
//         type='submit'
//          className="btn w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
//           disabled={isSigningUp} >
//             { isSigningUp? (
//               <>
//                 <Loader2 className="size-5 ml-43 animate-spin" />
//                 Loading....
//               </>
//             ) : (
//               "Signup"
//             )
//           }
//         </button>
//       </form>
//         </div>
//     </div>
//   );
// };

// export default SignUpPage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react"; // ✅ Make sure you have this icon package installed

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    username: "",
    purpose: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  // ✅ Proper Zustand usage
  const signup = useAuthStore((state) => state.signup);
  const isSigningUp = useAuthStore((state) => state.isSigningUp);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.agree) {
      alert("Please agree to the Terms and Privacy Policy.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    signup(form);
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 mt-15">
      <div className="absolute bottom-40 right-[390px] w-[250px] h-[250px] bg-[#ff006e] rounded-full z-0"></div>

      <div className="relative z-10 bg-white p-5 rounded-xl shadow-md w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-50 p-8 rounded-md shadow"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign up your Account</h2>
          <p className="mb-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold underline hover:underline">
              SIGN IN
            </Link>
          </p>

          <div className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">User Name</label>
              <input
                type="text"
                placeholder="Enter User name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">For What?</label>
              <select
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">Please Select</option>
                <option value="student">Student</option>
                <option value="developer">Developer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 focus:outline-none"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter Confirm Password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          <label className="inline-flex items-center mt-4">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="form-checkbox mr-2"
            />
            <span className="text-sm">
              I agree with{" "}
              <a href="#" className="font-semibold underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="font-semibold underline">
                Terms of Use
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="btn w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 mt-4"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <div className="flex justify-center items-center gap-2">
                <Loader2 className="size-5 animate-spin" />
                Loading...
              </div>
            ) : (
              "Signup"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;