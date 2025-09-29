import React from "react";
import { motion } from "framer-motion"; 
import { frame1617 } from "../constants/images";
import { oui_quote } from "../constants/images"; 
import { Play } from "lucide-react";

const Interview = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white relative px-4 py-12 md:py-16 md:top-[-50px] lg:top-[0px] rounded-2xl md:rounded-3xl max-w-[1192px] mx-auto h-full mb-10 mt-10 md:mt-16 md:mb-12 lg:p-0.5">
      
      {/* Left Side - Interview Text */}
      <motion.div 
        className="w-full lg:w-1/3 flex flex-col justify-center space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        viewport={{ once: true, amount: 0.2 }} 
      >
        <p
          className="relative z-10"
          style={{
            width: "72px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#F0F0F0",
            opacity: 1,
            whiteSpace: "nowrap",
            left: 600,
            top: -12
          }}
        >
          INTERVIEW
        </p>
      </motion.div>

      <div className="relative w-full max-w-[1192px] mx-auto flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-[53px] h-auto lg:h-[432px]">
        
        {/* Left Side - Quote */}
        <motion.div
          className="w-full lg:w-1/3 flex flex-col justify-center space-y-4 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
          viewport={{ once: true, amount: 0.2 }} 
        >
          {/* Quote Mark */}
          <img
            src={oui_quote}
            alt="Quote Icon"
            className="w-10 sm:w-12 md:w-14 lg:w-16 text-teal-500"
          />

          {/* Quote Text */}
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed">
            We created a product that connects People to service providers effortlessly
          </p>
        </motion.div>

        {/* Right Side - Video */}
        <motion.div
          className="w-full lg:w-2/3 relative"
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} 
          viewport={{ once: true, amount: 0.2 }} 
        >
          <div className="relative w-full h-[200px] sm:h-[240px] md:h-[320px] lg:h-[432px] rounded-2xl shadow-2xl overflow-hidden">
            {/* SVG Image */}
            <img
              src={frame1617}
              alt="Video Placeholder"
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 hover:scale-110">
                <Play className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Interview;
