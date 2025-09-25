import React from "react";
import { motion } from "framer-motion"; 
import {
  EllipseUp,
  EllipseDown,
  tdesign_money,
  fluent_diversity_20_filled,
  ic_baseline_gpp_good,
  mdi_arm_flex_outline,
} from "../constants/images";

// Motion variants for parent container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

// Motion variants for each item (text or card)
const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhatSetsUsApart = () => {
  return (
    <motion.section
      className="relative w-full min-h-[900px] py-16 md:py-24 lg:py-32 overflow-hidden bg-[#E9F7FC]"
      variants={containerVariants} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      {/* Blurred background circles */}
      <div className="absolute top-[270px] md:top-[590px] left-[0px] z-0 md:size-85 size-100">
        <img src={EllipseDown} />
      </div>
      <div className="absolute -top-[20px] right-0 z-0 md:size-85 size-60">
        <img src={EllipseUp} />
      </div>

      <div className="relative max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-10 px-4 md:px-8 lg:left-[-90px] lg:top-[-150px]">
        {/* LEFT TEXT */}
        <motion.div
          className="relative w-full lg:w-[519px] flex flex-col justify-start lg:mt-[70px] lg:ml-[170px]"
          variants={itemVariants} 
        >
          <span className="relative text-[#8CE0EF] text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider mb-6 opacity-100 whitespace-nowrap">
            __WHAT SETS US APART__
          </span>
          <p className="text-slate-800 text-base md:text-lg leading-relaxed max-w-[517px] opacity-100 lg:mt-[32px]">
            At GYWDE, we are pioneers in providing skilled and semi-skilled
            services tailored for all industries and our mission is to bridge
            the gap between service consumer and service provider.
          </p>
        </motion.div>

        {/* RIGHT FEATURES */}
        <div className="w-full lg:w-[600px] grid grid-cols-2 gap-6 lg:gap-x-[60px] lg:gap-y-[40px] relative">
          
          {/* Feature Cards */}
          {[
            {
              title: "Flexible",
              desc: "Our platform adapts to your schedule and requirements, allowing you to find the right service provider when and where you need them.",
              icon: mdi_arm_flex_outline,
              bg: "#BAF0FF",
              border: "#0096C1",
              top: "100px",
              left: "33px",
            },
            {
              title: "Safe and Secure",
              desc: "With secure payment options and verified service providers, you can have peace of mind every step of the way when ordering a service.",
              icon: ic_baseline_gpp_good,
              bg: "#FFFFFF",
              border: null,
              top: "400px",
              left: "33px",
            },
            {
              title: "Affordable",
              desc: "We ensure that you get access to a wide range of services that fit your budget without compromising on quality.",
              icon: tdesign_money,
              bg: "#FFFFFF",
              border: null,
              top: "270px",
              left: "320px",
            },
            {
              title: "All-in-one",
              desc: "We connect you with trusted professionals across various categories, making it easier for you to get things done effortlessly.",
              icon: fluent_diversity_20_filled,
              bg: "#FFFFFF",
              border: null,
              top: "600px",
              left: "320px",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className={`rounded-[25px] flex flex-col items-center text-center p-6 space-y-3 backdrop-blur-[106px] opacity-100 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg lg:w-[259px] lg:h-[287px] lg:absolute`}
              style={{
                backgroundColor: card.bg,
                border: card.border ? `1px solid ${card.border}` : "none",
                top: card.top,
                left: card.left,
              }}
              variants={itemVariants} 
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <img
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  className="w-6 h-6 object-contain text-[#008ECC]"
                />
              </div>
              <h3 className="font-semibold text-base md:text-md">{card.title}</h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatSetsUsApart;
