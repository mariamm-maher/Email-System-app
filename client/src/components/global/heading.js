// components/Heading.jsx
import React from "react";

export default function Heading({ mainText, subText }) {
  return (
    <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-pureWhite font-sans tracking-tight z-10">
      {mainText} <span className="text-neonMintGreen">Mailer World</span>
      <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neonMintGreen via-white to-darkNavyBlue">
        {subText}
      </div>
    </h2>
  );
}
