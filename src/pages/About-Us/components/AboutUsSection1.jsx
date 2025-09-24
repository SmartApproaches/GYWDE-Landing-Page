import React from "react";
import { frame1651 } from "../constants/images";

const AboutUsSection1 = () => {
  return (
    <div className="py-12 flex flex-col items-center px-4 relative">
      {/* Gear Background */}
      <img
        src={frame1651}
        alt="frame1651"
        className="
          absolute 
          w-[369px] h-[242px] 
          top-[314.45px] left-[11px] 
          opacity-100 animate-spin-slow
          md:w-[529.9px] md:h-[348px] 
          md:top-[45px] md:left-[30px]
        "
      />

      {/* Worldwide Service Provider Network */}
      <div
        className="
          absolute flex items-center justify-center 
          text-black text-xs md:text-sm font-medium 
          rounded-[14.72px] border border-[#F0F0F0] 
          bg-[#F0F0F04D] backdrop-blur-[7.1px]
          px-3 whitespace-nowrap
          w-[204.6px] h-[33.1px] 
          top-[310px] left-[175.17px]
          md:rounded-[20px] md:w-auto md:h-[45px] 
          md:top-[45px] md:left-[278px]
        "
      >
        Worldwide Service Provider Network
      </div>

      {/* Trusted Local Service Experts */}
      <div
        className="
          absolute flex items-center justify-center 
          text-black text-xs md:text-sm font-medium 
          rounded-[14.72px] border border-[#F0F0F0] 
          bg-[#F0F0F04D] backdrop-blur-[7.1px]
          px-3
          w-[173.7px] h-[33.1px] 
          top-[431.61px] left-[11.04px]
          md:rounded-[20px] md:w-[236px] md:h-[45px] 
          md:top-[236px] md:left-[45px]
        "
      >
        Trusted Local Service Experts
      </div>

      {/* Text Box */}
      <div
        className="
          relative 
          w-[90%] md:w-[587px] 
          h-auto md:h-[258px] 
          text-black 
          px-4 md:px-6 py-4 
          font-['Work_Sans'] font-normal 
          text-base md:text-2xl 
          leading-[180%] text-justify
          rounded-lg bg-white
          mt-[580px]  /* pushes text below gear+labels on mobile */
          md:mt-0 md:absolute 
          md:top-[45px] md:left-[696px]
        "
      >
        Get Your Work Done Effortlessly (GYWDE) is a system that connect vendors
        (physical and online) to people in need of their service. At GYWDE, we
        believe that everyone deserves access to quality services that make life
        more convenient and fulfilling.
      </div>
    </div>
  );
};

export default AboutUsSection1;
