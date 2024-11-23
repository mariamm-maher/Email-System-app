import React, { useState } from "react";

export default function WelcomePage() {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-darkNavyBlue"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {/* Animated divs  */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-30 blur-3xl w-[400px] h-[400px] rounded-full top-10 left-10"></div>
        <div className="absolute bg-gradient-to-r from-darkNavyBlue to-neonMintGreen opacity-40 blur-3xl w-[500px] h-[500px] rounded-full top-1/2 right-10"></div>
        <div className="absolute bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-20 blur-3xl w-[450px] h-[450px] rounded-full bottom-10 left-1/3"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-pureWhite font-sans tracking-tight z-10">
        Welcome to <span className="text-neonMintGreen">Mailer World</span>
        <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neonMintGreen via-white to-darkNavyBlue">
          Let&apos;s Start our journey together!
        </div>
      </h2>

      {/* Buttons */}
      <div
        className={`mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 ${
          showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button className="bg-neonMintGreen text-darkNavyBlue font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 hover:bg-green-500">
          Sign Up
        </button>
        <button className="bg-darkNavyBlue text-pureWhite font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 hover:bg-gray-800">
          Sign In
        </button>
      </div>
    </div>
  );
}
