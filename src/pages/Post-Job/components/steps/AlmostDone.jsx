import React from "react";
import { motion } from "framer-motion";

const AlmostDone = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-xl p-8 max-w-sm"
      >
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-12 h-12 transform rotate-12"
          >
            <path
              d="M6 2h12v2a6 6 0 01-6 6 6 6 0 01-6-6V2z"
              fill="#0096C1"
            />
            <path
              d="M6 22h12v-2a6 6 0 00-6-6 6 6 0 00-6 6v2z"
              fill="#BAF0FF"
              fillOpacity="0.4"
            />
            <path
              d="M6 2h12M6 22h12M12 10v4"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#0096C1] mb-2">Almost Done!</h2>
        <p className="text-lg font-semibold mb-4">Let’s Secure Your Project.</p>
        <p className="text-gray-300">
          To move forward and match you with the best professionals, you’ll need
          to create an account or log in.
        </p>
        <p className="text-gray-600 text-sm mb-6 bg-[#BAF0FF] p-4 rounded">
          It only takes a moment and gives you full access to manage your job,
          review proposals, and communicate with experts securely.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-[#0096C1] text-white rounded-md hover:bg-[#007b9e]">
            Sign Up
          </button>
          <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100">
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AlmostDone;
