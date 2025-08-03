// Import your SVG files from the centralized index.js (constants - plural)
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

const CategoryCard = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          {/* Left Panel */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-blue-100 bg-opacity-70 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <img
                    src={allServicesIcon}
                    alt="All Services"
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  By Category
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Find service providers that suit a certain project category
              </p>
            </div>
          </div>

          {/* Right Panel - Categories Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6">
              {/* First Row */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[0].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[0].title}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[1].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[1].title}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[2].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[2].title}
                  </h3>
                </div>
              </div>

              {/* Second Row */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[3].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[3].title}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[4].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[4].title}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[5].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[5].title}
                  </h3>
                </div>
              </div>

              {/* Third Row */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[6].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[6].title}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">{categories[7].icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    {categories[7].title}
                  </h3>
                </div>
              </div>

              {/* All Services Card */}
              <div className="bg-cyan-200 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border-2 border-cyan-300">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                  <div className="mb-1 md:mb-2">
                    <img
                      src={allServicesIcon}
                      alt="All Services"
                      className="w-8 h-8 md:w-12 md:h-12"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-teal-600">
                    All Services
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
