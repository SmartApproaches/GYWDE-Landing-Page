import { useState } from "react";
// Import SVG files from the centralized index.js
import { userManualIcon, pdfIcon, youtubeIcon } from "../constants/images";

const HowGwydeWorks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const manualOptions = [
    {
      id: "videos",
      title: "Manual Videos",
      icon: (
        <img
          src={youtubeIcon}
          alt="Manual Videos"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      ),
      action: () => {
        console.log("Opening manual videos");
        // Add video opening logic here
      },
    },
    {
      id: "pdf",
      title: "Read PDF",
      icon: (
        <img src={pdfIcon} alt="Read PDF" className="w-6 h-6 md:w-8 md:h-8" />
      ),
      action: () => {
        console.log("Opening PDF manual");
        // Add PDF opening logic here
      },
    },
  ];

  const handleOptionClick = (option) => {
    option.action();
    setIsOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pb-4 md:pb-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {isOpen && (
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="bg-blue-100 bg-opacity-70 rounded-3xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <img
                    src={userManualIcon}
                    alt="User Manual"
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  User Manual
                </h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Want to know how the app would work? Learn more about it here
              </p>
            </div>
          </div>
        )}

        {/* Right Panel - Manual Dropdown */}
        <div className="flex-1">
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-teal-200 hover:border-teal-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={userManualIcon}
                    alt="User Manual"
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                  <span className="text-lg md:text-xl font-semibold text-gray-800">
                    Choose Manual Type
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl md:rounded-3xl shadow-lg border-2 border-teal-200 z-10">
                <div className="p-4 space-y-2">
                  {manualOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionClick(option)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left"
                    >
                      <div className="flex-shrink-0">{option.icon}</div>
                      <span className="text-lg font-semibold text-gray-800">
                        {option.title}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 ml-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGwydeWorks;
