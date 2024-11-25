import React from "react";
import BackgroundAnimation from "../components/global/background";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue text-pureWhite flex">
      <BackgroundAnimation />
      {/* Sidebar */}
      {/* Main Content */}
      <div className="flex-1 ml-1/5 p-8 space-y-6">
        {/* Nav */}
        <nav className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <button className="bg-darkNavyBlue p-2 rounded-full hover:bg-neonMintGreen transition-all">
              Settings
            </button>
            <button className="bg-darkNavyBlue p-2 rounded-full hover:bg-neonMintGreen transition-all">
              Notifications
            </button>
            <button className="bg-darkNavyBlue p-2 rounded-full hover:bg-neonMintGreen transition-all">
              Sign In
            </button>
          </div>
        </nav>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-darkNavyBlue p-6 rounded-lg flex flex-col items-center">
            Section 1
          </div>
          <div className="bg-darkNavyBlue p-6 rounded-lg flex flex-col items-center">
            Section 2
          </div>
          <div className="bg-darkNavyBlue p-6 rounded-lg flex flex-col items-center">
            Section 3
          </div>
          <div className="bg-darkNavyBlue p-6 rounded-lg flex flex-col items-center">
            Section 4
          </div>
        </div>

        {/* Additional Section */}
        <div className="bg-darkNavyBlue p-6 rounded-lg">Additional Section</div>
      </div>
    </div>
  );
}
