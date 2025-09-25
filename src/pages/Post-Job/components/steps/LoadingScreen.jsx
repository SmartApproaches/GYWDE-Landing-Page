import React from "react";
import { motion } from "framer-motion";


const LoadingScreen = () => {
  const sizes = [6, 10, 14, 16, 18];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <img src="src/pages/Post-Job/assets/Logo.svg" alt="Gywde" className="h-6" />
      </div>

      <img
        src="src/pages/Post-Job/assets/Ellipse 10.svg"
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-50"
        alt="Blue ring background"
      />

      <motion.div
        className="relative w-24 h-24 mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        {sizes.map((size, i) => {
          const angle = (-60 + i * 30) * (Math.PI / 180);
          const radius = 35;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <span
              key={i}
              className="absolute bg-[#0096C1] rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `calc(50% + ${y}px - ${size / 2}px)`,
                left: `calc(50% + ${x}px - ${size / 2}px)`,
              }}
            />
          );
        })}
      </motion.div>

      <p className="text-lg font-bold text-gray-700">
        Please wait while we create your Brief
      </p>
    </div>
  );
};

export default LoadingScreen;
