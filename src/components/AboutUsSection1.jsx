import React from "react";
import { frame1651 } from "../constants/images";

const AboutUsSection1 = () => {
  return (
    <div className="py-12 flex justify-center px-4">
      {/* Gear Background */}
      <img
        src={frame1651}
        alt="frame1651"
        className="
          absolute 
          w-[180px] h-[180px] 
          md:w-[529.9px] md:h-[348px] 
          top-[180px] left-[20px] 
          md:top-[521px] md:left-[121px] 
          opacity-100 
          animate-spin-slow
        "
      />

      {/* Worldwide Service Provider Network */}
      <div
        className="
          absolute flex items-center justify-center 
          text-black text-xs md:text-sm font-medium 
          rounded-[20px] border border-[#F0F0F0]
          bg-[#F0F0F04D] 
          backdrop-blur-[7.1px]
          px-4
          whitespace-nowrap
        "
        style={{
          height: "45px",
          top: "497.59px", // reduced from 497.59px
          left: "359px",
        }}
      >
        Worldwide Service Provider Network
      </div>

      {/* Trusted Local Service Experts */}
      <div
        className="
          absolute flex items-center justify-center 
          text-black text-xs md:text-sm font-medium 
          rounded-[20px] border border-[#F0F0F0]
          bg-[#F0F0F04D] 
          backdrop-blur-[7.1px]
          px-3
        "
        style={{
          width: "236px",
          height: "45px",
          top: "690px", // reduced from 690px
          left: "136px",
        }}
      >
        Trusted Local Service Experts
      </div>

      <div
        className="
          relative md:absolute 
          w-[90%] md:w-[587px] 
          h-auto md:h-[258px] 
          text-black 
          px-4 md:px-6 py-4 
          font-['Work_Sans'] font-normal 
          text-base md:text-2xl 
          leading-[180%] 
          text-justify
          rounded-lg
        "
        style={{
          top: "516px", // reduced from 516px
          left: "696px",
          opacity: 1,
          backgroundColor:"#FFFFFF",
        }}
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
