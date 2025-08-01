import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react";

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

  const signup = useAuthStore((state) => state.signup);
  const isSigningUp = useAuthStore((state) => state.isSigningUp);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-50 p-8 rounded-md shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign up your Account</h2>
          <p className="mb-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold underline hover:underline">
              SIGN IN
            </Link>
          </p>

          {/* -- Inputs for Name, Username, Purpose, Email, Password, Confirm Password -- */}

          {/* ...Keep all the form fields as you’ve already written them... */}

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