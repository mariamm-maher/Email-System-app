import React, { useState } from "react";
import InputField from "../components/global/input";
import BackgroundAnimation from "../components/global/background";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkNavyBlue">
      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Sign Up Form */}
      <div className="z-10 bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pureWhite">
          Create an Account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className=" flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1 ">
              <label htmlFor="name" className="text-pureWhite font-semibold">
                Name
              </label>
              <InputField
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
          </div>
          <div className=" flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1 ">
              <label htmlFor="email" className="text-pureWhite font-semibold">
                Email
              </label>
              <InputField
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
          </div>
          <div className=" flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="password"
                className="text-pureWhite font-semibold"
              >
                Password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
          </div>
          <div className=" flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1 ">
              <label
                htmlFor="confirmPassword"
                className="text-pureWhite font-semibold"
              >
                Confirm Password
              </label>
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-neonMintGreen text-darkNavyBlue font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-green-500"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-neonMintGreen hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
