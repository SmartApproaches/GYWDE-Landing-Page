import React from "react";
import { MdStarOutline } from "react-icons/md";
import { motion } from "framer-motion"; 

const AppMetrics = () => {
  return (
    <motion.div
      className="
        relative
        top-[0px] sm:top-[0px] md:top-[0px]
        bg-gradient-to-r from-[#BAF0FF] via-[#DBF7FF] to-[#BAF0FF]
        rounded-2xl md:rounded-3xl w-full max-w-[1192px] mx-auto h-full
        mb-10 mt-10 md:mt-16 md:mb-12 lg:p-0.5
      "
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1, ease: "easeInOut" }} 
      viewport={{ once: false, amount: 0.2 }} 
    >
      <div className="bg-white flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 sm:gap-6 md:gap-5 w-full h-full p-4 md:p-6 rounded-2xl md:rounded-3xl">

        {/* Active Users */}
        <div className="flex items-center flex-col sm:flex-row gap-1 md:gap-2 text-center md:text-left">
          <span className="font-bold text-[33.21px] lg:text-5xl text-[var(--secondary)]">
            5k+
          </span>
          <span className="font-normal text-base lg:text-2xl leading-[1.5] whitespace-nowrap">
            Active Users
          </span>
        </div>

        {/* Countries Served */}
        <div className="flex items-center flex-col sm:flex-row gap-1 md:gap-2 text-center md:text-left">
          <span className="font-bold text-[33.21px] lg:text-5xl text-[var(--secondary)]">
            30
          </span>
          <span className="font-normal text-base lg:text-2xl leading-[1.5] whitespace-nowrap">
            Countries Served
          </span>
        </div>

        {/* Average Rating */}
        <div className="flex items-center flex-col sm:flex-row gap-1 md:gap-2 text-center md:text-left">
          <span className="flex items-center font-bold text-[33.21px] lg:text-5xl text-[var(--secondary)] gap-1">
            4.2 <MdStarOutline size={30} className="md:size-8" />
          </span>
          <span className="font-normal text-base lg:text-2xl leading-[1.5] whitespace-nowrap">
            Average Rating App
          </span>
        </div>

      </div>
    </motion.div>
  );
};

export default AppMetrics;
