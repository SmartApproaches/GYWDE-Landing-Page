import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { faqImage } from "../constants/images";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How Can I Request A Service?",
      answer:
        "You can request a service by filling out our online form or contacting us directly via email or phone.",
    },
    {
      question: "What Payment Methods Do You Accept?",
      answer: "We accept credit/debit cards, PayPal, and bank transfers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Motion variants
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full px-4 md:px-12 py-12 flex flex-col md:flex-row items-center md:items-center gap-10">
      {/* Left Section - FAQ Text */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center"
        variants={leftVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
      >
        {/* Section Title */}
        <h2 className="text-gray-300 font-semibold text-lg mb-6 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              {/* Question */}
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Section - Image (hidden on mobile) */}
      <motion.div
        className="hidden md:flex md:w-1/2 justify-center items-center"
        variants={rightVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
      >
        <img
          src={faqImage}
          alt="FAQ Illustration"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default FAQSection;