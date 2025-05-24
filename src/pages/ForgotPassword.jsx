import React from "react";

const ForgotPassword = () => {
  return (
    <div className=" flex items-center justify-center mt-25 bg-white overflow-hidden">
      {/* Pink Color Ball */}
      <div className="absolute right-[350px] bottom-[250px] w-80 h-80 bg-[#FF0068] rounded-full z-0"></div>

      {/* Form Container */}
      <div className="relative z-10 bg-[#f8fefe] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>
        <p className="text-sm mb-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 font-semibold underline">
            SIGN UP
          </a>
        </p>
        <label className="block text-sm mb-1">Your User Name or email</label>
        <input
          type="text"
          placeholder="Enter User name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
          <a href="/login" className="flex items-center gap-1 hover:underline">
            Go Back →
          </a>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
          Get email
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;