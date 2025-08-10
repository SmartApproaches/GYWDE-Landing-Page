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
    <div
      className="relative"
      style={{
        width: "1418.8104248046875px",
        height: "392px",
        background: "#FFFFFF",
      }}
    >
      <div className="relative">
        {/* Left Panel - User Manual */}
        <div
          style={{
            width: "460.856689453125px",
            height: "271.1987609863281px",
            top: "60.4px",
            left: "51.34px",
            borderRadius: "32.62px",
            background: "#E6F5F9",
            position: "absolute",
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
          className="flex flex-col justify-center items-start p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <img src={userManualIcon} alt="User Manual" className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">User Manual</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Want to know how the app would work? Learn more about it here
          </p>
        </div>

        {/* Right Panel - Manual Options */}
        <div
          style={{
            width: "882px",
            height: "392px",
            left: "538px",
            background: "#DBF7FF",
            position: "absolute",
            top: "0px",
          }}
        >
          <div className="relative h-full">
            {/* Dropdown Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-6 left-6 right-6 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-teal-200 hover:border-teal-300"
              style={{
                opacity: !isOpen ? 1 : 0,
                visibility: !isOpen ? "visible" : "hidden",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={userManualIcon}
                    alt="User Manual"
                    className="w-12 h-12"
                  />
                  <span className="text-xl font-semibold text-gray-800">
                    Choose Manual Type
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
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
            <div
              className="absolute bg-white rounded-3xl shadow-lg border-2 border-teal-200 z-10"
              style={{
                top: "120px",
                left: "24px",
                right: "24px",
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? "visible" : "hidden",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
              }}
            >
              <div className="p-6 space-y-3">
                {manualOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="w-full flex items-center gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-200 text-left bg-white shadow-sm hover:shadow-md"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGwydeWorks;
