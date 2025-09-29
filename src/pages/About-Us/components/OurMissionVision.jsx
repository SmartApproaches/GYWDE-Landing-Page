import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const OurMissionVision = () => {
  return (
    <section
      className="w-full px-4 py-10 relative 
      top-[0px] sm:top-[0px] md:top-[0px] 
      rounded-2xl md:rounded-3xl max-w-[1192px] mx-auto h-full 
      mb-10 mt-10 md:mt-16 md:mb-12 lg:p-0.5"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="bg-[#E6F5F8] rounded-2xl shadow-md p-6 flex flex-col 
                        transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-2xl text-gray-700 flex-shrink-0" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
            To empower individuals and businesses by providing a seamless
            platform that connects consumers with skilled vendors, enabling the
            efficient completion of tasks, projects, and services while fostering
            trust, professionalism, and mutual growth.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#E6F5F8] rounded-2xl shadow-md p-6 flex flex-col 
                        transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <FaEye className="text-2xl text-gray-700 flex-shrink-0" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Our Vision
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
            To be the leading global platform for connecting consumers and
            vendors, revolutionizing how services are accessed and delivered by
            creating a safe, reliable, and collaborative environment for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMissionVision;
