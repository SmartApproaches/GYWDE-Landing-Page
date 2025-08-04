import { useState } from "react";
// Import your SVG files from the centralized index.js
import {
  fashionIcon,
  itDigitalIcon,
  agricultureIcon,
  eventsIcon,
  beautyIcon,
  transportIcon,
  repairIcon,
  creativeIcon,
  allServicesIcon,
} from "../constants/images";

const ServicesCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      id: "fashion",
      title: "Fashion",
      icon: (
        <img
          src={fashionIcon}
          alt="Fashion"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "it-digital",
      title: "IT and Digital Services",
      icon: (
        <img
          src={itDigitalIcon}
          alt="IT and Digital Services"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "agriculture",
      title: "Agriculture",
      icon: (
        <img
          src={agricultureIcon}
          alt="Agriculture"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "events",
      title: "Events and Entertainment",
      icon: (
        <img
          src={eventsIcon}
          alt="Events and Entertainment"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "beauty",
      title: "Beauty services",
      icon: (
        <img
          src={beautyIcon}
          alt="Beauty services"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "transport",
      title: "Transport and logistics",
      icon: (
        <img
          src={transportIcon}
          alt="Transport and logistics"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "repair",
      title: "Repair and Maintenance",
      icon: (
        <img
          src={repairIcon}
          alt="Repair and Maintenance"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
    {
      id: "creative",
      title: "Creative and Design",
      icon: (
        <img
          src={creativeIcon}
          alt="Creative and Design"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      ),
    },
  ];

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
    // Handle category selection here
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className={`${isOpen ? "min-h-screen" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-4 md:pt-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Panel - Only show when dropdown is open */}
          {isOpen && (
            <div className="w-full lg:w-80 lg:flex-shrink-0">
              <div className="bg-blue-100 bg-opacity-70 rounded-3xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                    <img
                      src={allServicesIcon}
                      alt="All Services"
                      className="w-4 h-4 md:w-6 md:h-6"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    By Category
                  </h2>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Find service providers that suit a certain project category
                </p>
              </div>
            </div>
          )}

          {/* Right Panel - Category Dropdown */}
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
                      src={allServicesIcon}
                      alt="All Services"
                      className="w-8 h-8 md:w-12 md:h-12"
                    />
                    <span className="text-lg md:text-xl font-semibold text-gray-800">
                      Select Category
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
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl md:rounded-3xl shadow-lg border-2 border-teal-200 z-10 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="mb-2">{category.icon}</div>
                        <h3 className="text-sm md:text-base font-semibold text-teal-600">
                          {category.title}
                        </h3>
                      </button>
                    ))}

                    {/* All Services Option */}
                    <button
                      onClick={() =>
                        handleCategoryClick({
                          id: "all",
                          title: "All Services",
                        })
                      }
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-cyan-100 hover:bg-cyan-200 transition-colors duration-200"
                    >
                      <div className="mb-2">
                        <img
                          src={allServicesIcon}
                          alt="All Services"
                          className="w-8 h-8 md:w-12 md:h-12"
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-teal-600">
                        All Services
                      </h3>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
