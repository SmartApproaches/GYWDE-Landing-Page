import React, { useState } from "react";
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

  // Toggle function for expanding/collapsing answers
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 md:px-12 py-12 flex flex-col md:flex-row items-center gap-10">
      {/* Left Section - FAQ Text */}
      <div className="w-full md:w-1/2">
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

              {/* Answer (only visible when open) */}
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Image (hidden on small screens) */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center">
        <img
          src={faqImage}
          alt="FAQ Illustration"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default FAQSection;
