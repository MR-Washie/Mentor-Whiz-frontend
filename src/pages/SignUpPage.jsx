import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    purpose: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const signup = useAuthStore((state) => state.signup);
  const isSigningUp = useAuthStore((state) => state.isSigningUp);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (form.password !== form.confirmPassword) {
      // alert("Passwords do not match.");
      toast.error("Password not same");
      // toast.error(error.response.data.message);

      return;
    }

    if (!form.agree) {
      // alert("Please agree to the Terms and Privacy Policy.");
      toast.error("Please agree to the Terms and Privacy Policy.")
      return;
    }

    signup(form);
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 mt-16 min-h-screen">
      <div className="absolute bottom-40 right-[390px] w-[250px] h-[250px] bg-[#ff006e] rounded-full z-0"></div>

      <div className="relative z-10 bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Sign up your Account</h2>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold underline">
              SIGN IN
            </Link>
          </p>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />

          <input
            type="text"
            name="username"
            placeholder="Enter a username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />

          {/* <input
            type="text"
            name="purpose"
            placeholder="Purpose of joining"
            value={form.purpose}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          /> */}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label className="text-sm text-gray-700">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-600 underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
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
        
          <div style={{textAlign: 'center'}}>or</div>

        <div className="flex items-center justify-center w-full">
          <button onClick={() => window.location.href = `${BASE_URL}/auth/google`}
            // href={`${BASE_URL}/auth/google`}
            className="flex items-center justify-center gap-3 px-5 py-2.5 w-full border border-gray-300 rounded-lg shadow-sm hover:shadow-md bg-white hover:bg-gray-50 transition-all duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button >
        </div>
        
      </div>
    </div>
  );
};

export default SignUpPage;