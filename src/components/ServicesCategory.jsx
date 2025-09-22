import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const categories = [
    {
      id: "fashion",
      title: "Fashion",
      icon: <img src={fashionIcon} alt="Fashion" className="w-10 h-10" />,
    },
    {
      id: "it-digital",
      title: "IT & Digital",
      icon: (
        <img src={itDigitalIcon} alt="IT & Digital" className="w-10 h-10" />
      ),
    },
    {
      id: "agriculture",
      title: "Agriculture",
      icon: (
        <img src={agricultureIcon} alt="Agriculture" className="w-10 h-10" />
      ),
    },
    {
      id: "events",
      title: "Events",
      icon: <img src={eventsIcon} alt="Events" className="w-10 h-10" />,
    },
    {
      id: "beauty",
      title: "Beauty",
      icon: <img src={beautyIcon} alt="Beauty" className="w-10 h-10" />,
    },
    {
      id: "transport",
      title: "Transport",
      icon: <img src={transportIcon} alt="Transport" className="w-10 h-10" />,
    },
    {
      id: "repair",
      title: "Repair",
      icon: <img src={repairIcon} alt="Repair" className="w-10 h-10" />,
    },
    {
      id: "creative",
      title: "Creative",
      icon: <img src={creativeIcon} alt="Creative" className="w-10 h-10" />,
    },
  ];

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <div className="relative w-[710px] h-[360px] sm:w-full sm:h-auto bg-white opacity-100 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-full flex flex-col sm:flex-row">
        {/* Left Panel */}
        <div className="bg-[#E6F5F9] rounded-lg flex flex-col justify-center p-4 w-full sm:w-[230px] sm:h-[140px] m-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
              <img
                src={allServicesIcon}
                alt="All Services"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <h2 className="text-sm font-bold text-gray-800">By Category</h2>
          </div>
          <p className="text-gray-700 text-sm leading-tight">
            Find providers by category
          </p>
        </div>
        {/* Right Panel - Categories Grid */}
        <div className="bg-[#DBF7FF] rounded-lg flex-1 relative w-full sm:w-[450px] h-[200px] sm:h-[360px] m-4">
          <div className="absolute inset-4 grid grid-rows-3 grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="flex flex-col items-center justify-center text-center p-2 rounded bg-white hover:bg-gray-50 shadow-sm transition-colors duration-200 text-sm sm:text-base"
              >
                <div className="mb-2">{category.icon}</div>
                <h3 className="text-teal-600 font-semibold leading-tight">
                  {category.title}
                </h3>
              </button>
            ))}
            {/* All Services */}
            <button
              onClick={() => navigate("/services-category")}
              className="flex flex-col items-center justify-center text-center p-2 rounded bg-cyan-100 hover:bg-cyan-200 transition-colors duration-200 shadow-sm border border-cyan-200 text-sm sm:text-base"
            >
              <div className="mb-2">
                <img
                  src={allServicesIcon}
                  alt="All Services"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-teal-600 font-semibold leading-tight">
                All Services
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
