// components/BackgroundAnimation.jsx
import React from "react";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 animate-pulse">
      <div className="absolute bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-30 blur-3xl w-[400px] h-[400px] rounded-full top-10 left-10"></div>
      <div className="absolute bg-gradient-to-r from-darkNavyBlue to-neonMintGreen opacity-40 blur-3xl w-[500px] h-[500px] rounded-full top-1/2 right-10"></div>
      <div className="absolute bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-20 blur-3xl w-[450px] h-[450px] rounded-full bottom-10 left-1/3"></div>
    </div>
  );
}
