import React, { useState } from "react";
import Button from "../components/global/Button";
import Heading from "../components/global/heading";
import BackgroundAnimation from "../components/global/background";

export default function WelcomePage() {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-darkNavyBlue"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <BackgroundAnimation />
      <Heading
        mainText="Welcome to"
        subText="Let's Start our journey together!"
      />
      <div
        className={`mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 ${
          showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button text="Sign Up" to="/signup" styleType="primary" />
        <Button text="Sign In" to="/login" styleType="secondary" />
      </div>
    </div>
  );
}
