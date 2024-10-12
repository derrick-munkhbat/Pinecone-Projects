import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);

    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then(() => {
        alert("Success");
        localStorage.setItem("login", `${email}:${password}`);
        window.location.href = "/records";
      })
      .catch((e) => {
        if (e.response.status === 401) {
          alert("Wrong Email or Password!");
        }
      });
  }

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Welcome Back</h2>
      <p className="text-gray-600">Welcome back, Please enter your details</p>
      <div className="mt-6">
        {/* EMAIL */}
        <div className="mb-6">
          <input
            // type="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          Log in
        </button>
      </div>
      <p className="mt-6 text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
