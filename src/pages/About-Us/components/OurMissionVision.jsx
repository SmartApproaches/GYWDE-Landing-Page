import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const OurMissionVision = () => {
  return (
    <section
      className="w-full px-4 py-10" // removed bg-gray-50
      style={{ position: "relative", top: "320px" }}
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
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            To empower individuals and businesses by <br/>providing a seamless
            platform that connects <br/>consumers with skilled vendors, enabling<br/> the
            efficient completion of tasks, projects, <br/>and services while fostering
            trust,<br/> professionalism, and mutual growth.
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
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            To be the leading global platform for  <br/>connecting consumers and
            vendors,  <br/>revolutionizing how services are accessed  <br/>and delivered by
            creating a safe, reliable,  <br/>and collaborative environment for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMissionVision;
