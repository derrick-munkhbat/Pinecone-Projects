import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
        Create Geld Account
      </h2>
      <form
        //  onSubmit={handleSubmit}
        className="mt-6"
      >
        <div className="mb-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
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
        <div className="mb-6">
          <input
            type="password"
            placeholder="Re-enter Password"
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
