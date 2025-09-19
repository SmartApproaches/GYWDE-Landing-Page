// src/components/WhatSetsUsApart.jsx
import React from "react";
import { mdi_arm_flex_outline } from "../constants/images";
import {ic_baseline_gpp_good } from "../constants/images";
import { fluent_diversity_20_filled } from "../constants/images";
import { tdesign_money } from "../constants/images";

const WhatSetsUsApart = () => {
  return (
    <section className="relative w-full min-h-[900px] py-16 md:py-24 lg:py-32 overflow-hidden bg-[#E9F7FC]">
      {/* Blurred background circles */}
      <div
        className="
          hidden lg:block
          absolute
          w-[602px] h-[540px]
          bg-[#0096C1]
          opacity-[0.18]
          rounded-full
          blur-[106px]
          top-[-98px] left-[1007px]
          pointer-events-none
        "
        // Right circle, visible on large screens
      />
      <div
        className="
          hidden lg:block
          absolute
          w-[602px] h-[540px]
          bg-[#0096C1]
          opacity-[0.18]
          rounded-full
          blur-[106px]
          top-[624px] left-[-194px]
          pointer-events-none
        "
        // Left circle, visible on large screens
      />

      <div className="relative max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-10 px-4 md:px-8 lg:left-[-90px] lg:top-[-150px]">
        {/* LEFT TEXT */}
        <div className="relative w-full lg:w-[519px] flex flex-col justify-start lg:mt-[70px] lg:ml-[170px] ">
          <span
            className=" relative
              text-[#8CE0EF] text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider mb-6
              opacity-100 
            "
          >
            __WHAT SETS US APART__
          </span>
          <p
            className="
              text-slate-800 text-base md:text-lg leading-relaxed
              max-w-[517px] opacity-100
              lg:mt-[32px]
            "
          >
            At GYWDE, we are pioneers in providing skilled and semi-skilled services tailored for all industries and our mission is to bridge the gap between service consumer and service provider.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="w-full lg:w-[600px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-[60px] lg:gap-y-[40px] relative">
          {/* Flexible */}
          <div
            className="
              rounded-[25px] border border-[#0096C1] bg-[#BAF0FF] 
              shadow-md flex flex-col items-center text-center
              p-6 lg:w-[259px] lg:h-[287px]
              backdrop-blur-[106px] opacity-100
              lg:absolute lg:top-[100px] lg:left-[33px]
              "
          >
            <div className="p-3 rounded-full bg-white mb-4">
              <img
                src={mdi_arm_flex_outline}
                alt="mdi_arm_flex_outline Icon"
                className="text-[#008ECC]" size={28} />
            </div>
            <h3 className="font-semibold text-md mb-2">Flexible</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Our platform adapts to your schedule and requirements, allowing you to find the right service provider when and where you need them.
            </p>
          </div>

          {/* Affordable */}
          <div
            className="
              rounded-[25px] bg-white shadow-md flex flex-col items-center text-center
              p-6 lg:w-[259px] lg:h-[311px]
              backdrop-blur-[106px] opacity-100
              lg:absolute lg:top-[400px] lg:left-[33px]
              "
          >
            <div className="p-3 rounded-full bg-white mb-4">
              <img
                src={tdesign_money}
                alt="tdesign_money Icon"
                className="text-[#008ECC]" size={28} />
            </div>
            <h3 className="font-semibold text-md mb-2">Affordable</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              We ensure that you get access to a wide range of services that fit your budget without compromising on quality.
            </p>
          </div>

          {/* Safe and Secure */}
          <div
            className="
              rounded-[25px] bg-white shadow-md flex flex-col items-center text-center
              p-6 lg:w-[259px] lg:h-[311px]
              backdrop-blur-[106px] opacity-100
              lg:absolute lg:top-[270px] lg:left-[320px]
              "
          >
            <div className="p-3 rounded-full bg-white mb-4">
             <img
               src={ic_baseline_gpp_good}
               alt="ic_baseline_gpp_good Icon"
               className="text-[#008ECC]" size={28} />
            </div>
            <h3 className="font-semibold text-md mb-2">Safe and Secure</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              With secure payment options and verified service providers, you can have peace of mind every step of the way when ordering a service.
            </p>
          </div>

          {/* All-in-one */}
          <div
            className="
              rounded-[25px] bg-white shadow-md flex flex-col items-center text-center
              p-6 lg:w-[260px] lg:h-[287px]
              backdrop-blur-[106px] opacity-100
              lg:absolute lg:top-[600px] lg:left-[320px]
              "
          >
            <div className="p-3 rounded-full bg-white mb-4">
             <img
               src={fluent_diversity_20_filled}
               alt="fluent_diversity_20_filled Icon"
               className="text-[#008ECC]" size={28} />
            </div>
            <h3 className="font-semibold text-md mb-2">All-in-one</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              We connect you with trusted professionals across various categories, making it easier for you to get things done effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;