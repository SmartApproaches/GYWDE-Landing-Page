// Import your SVG files from the centralized index.js
import { userManualIcon, pdfIcon, youtubeIcon } from "../constants/images";

const UserManual = () => {
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
    },
    {
      id: "pdf",
      title: "Read PDF",
      icon: (
        <img src={pdfIcon} alt="Read PDF" className="w-6 h-6 md:w-8 md:h-8" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Panel */}
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

          {/* Right Panel - Manual Options */}
          <div className="flex-1">
            <div className="flex flex-col gap-4 md:gap-6">
              {manualOptions.map((option) => (
                <div
                  key={option.id}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border-2 border-teal-200 hover:border-teal-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="flex-shrink-0">{option.icon}</div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {option.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManual;
