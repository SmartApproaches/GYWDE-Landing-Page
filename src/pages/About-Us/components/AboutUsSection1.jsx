import React from "react";
import { frame1651 } from "../constants/images";

const AboutUsSection1 = () => {
  return (
    <div className="py-12 px-4 flex flex-col items-center relative">
      {/* Responsive Layout: column (centered) on small/medium, row on large */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 w-full max-w-[1192px]">
        
        {/* Left Side: Gear + Labels */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          {/* Gear Background */}
          <div className="relative">
            <img
              src={frame1651}
              alt="frame1651"
              className="
                w-[260px] h-[260px] sm:w-[369px] sm:h-[242px] 
                md:w-[529.9px] md:h-[348px] 
                animate-spin-slow
              "
            />

            {/* Label: Top (above gear) */}
            <div
        className="
          absolute flex items-center justify-center 
          text-black text-xs md:text-sm font-medium 
          rounded-[14.72px] border border-[#F0F0F0] 
          bg-[#F0F0F04D] backdrop-blur-[7.1px]
          px-3 whitespace-nowrap
          w-[204.6px] h-[33.1px] 
          top-[-30px] left-[100.17px]
          md:rounded-[20px] md:w-auto md:h-[45px] 
          md:top-[-10px] md:left-[258px]
        "
      >
        Worldwide Service Provider Network
      </div>

            {/* Label: Bottom-left */}
            <div
              className="
                absolute flex items-center justify-center 
          text-black text-xs md:text-sm font-medium 
          rounded-[14.72px] border border-[#F0F0F0] 
          bg-[#F0F0F04D] backdrop-blur-[7.1px]
          px-3
          w-[173.7px] h-[33.1px] 
          top-[150px] left-[-50px]
          md:rounded-[20px] md:w-[236px] md:h-[45px] 
          md:top-[250px] md:left-[0px]
              "
            >
              Trusted Local Service Experts
            </div>
          </div>
        </div>

        {/* Right Side (or Bottom on mobile): Text Box */}
        <div
          className="
            w-[90%] md:w-[587px] lg:w-1/2
            text-black 
            px-4 md:px-6 py-4 
            font-['Work_Sans'] font-normal 
            text-base md:text-2xl 
            leading-[180%] text-justify
            rounded-lg bg-white
            text-center md:text-justify
          "
        >
          Get Your Work Done Effortlessly (GYWDE) is a system that connect vendors
          (physical and online) to people in need of their service. At GYWDE, we
          believe that everyone deserves access to quality services that make life
          more convenient and fulfilling.
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection1;
