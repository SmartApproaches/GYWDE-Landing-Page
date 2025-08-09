import { useState } from "react";
// Import SVG files from the centralized index.js
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
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      style={{
        width: "1418.98828125px",
        height: "721.8778076171875px",
        background: "#FFFFFF",
      }}
    >
      <div className="relative">
        <div className="flex">
          {/* Left Panel - By Category */}
          <div
            style={{
              width: "460.91448974609375px",
              height: "271.2327575683594px",
              top: "60.41px",
              left: "51.35px",
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
                <img
                  src={allServicesIcon}
                  alt="All Services"
                  className="w-6 h-6"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">By Category</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Find service providers that suit a certain project category
            </p>
          </div>

          {/* Right Panel - Categories Display */}
          <div
            style={{
              width: "882.5635986328125px",
              height: "726.7105102539062px",
              top: "0px",
              left: "537.63px",
              background: "#DBF7FF",
              position: "absolute",
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
                      src={allServicesIcon}
                      alt="All Services"
                      className="w-12 h-12"
                    />
                    <span className="text-xl font-semibold text-gray-800">
                      Select Category
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

              {/* Categories Grid */}
              <div
                style={{
                  width: "797.6835327148438px",
                  height: "614.955322265625px",
                  top: "60.41px",
                  left: "41.88px",
                  position: "absolute",
                  display: "grid",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  rowGap: "10.27px",
                  columnGap: "15.71px",
                  opacity: isOpen ? 1 : 0,
                  visibility: isOpen ? "visible" : "hidden",
                  transition: "opacity 0.3s ease, visibility 0.3s ease",
                }}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    <div className="mb-3">{category.icon}</div>
                    <h3 className="text-base font-semibold text-teal-600">
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
                  className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-cyan-100 hover:bg-cyan-200 transition-colors duration-200 shadow-sm hover:shadow-md border-2 border-cyan-200"
                >
                  <div className="mb-3">
                    <img
                      src={allServicesIcon}
                      alt="All Services"
                      className="w-8 h-8 md:w-12 md:h-12"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-teal-600">
                    All Services
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
