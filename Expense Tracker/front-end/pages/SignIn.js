import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Welcome Back</h2>
      <p className="text-gray-600">Welcome back, Please enter your details</p>
      <form
        //  onSubmit={handleSubmit}
        className="mt-6"
      >
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          Log in
        </button>
      </form>
      <p className="mt-6 text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
