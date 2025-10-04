import { useState } from "react"; 
import { userManualIcon, pdfIcon, youtubeIcon } from "../constants/images";
import { LuChevronRight } from "react-icons/lu";
import { ChevronRight } from "lucide-react";

const HowGwydeWorks = () => {
  // state to control visibility
  const [isOpen, setIsOpen] = useState(true);

  const manualOptions = [
    {
      id: "videos",
      title: "Manual Videos",
      icon: <img src={youtubeIcon} alt="Manual Videos" className="w-6 h-6" />,
      action: () => {
        console.log("Opening manual videos");
        setIsOpen(false); 
      },
    },
    {
      id: "pdf",
      title: "Read PDF",
      icon: <img src={pdfIcon} alt="Read PDF" className="w-6 h-6" />,
      action: () => {
        console.log("Opening PDF manual");
        setIsOpen(false); 
      },
    },
  ];

  return (
    <>
      {/* only render if open */}
      {isOpen && (
        <div
          className="flex flex-col md:flex-row rounded-xl shadow-sm overflow-hidden"
          style={{ width: "710px", height: "196px" }}
        >
          {/* Left Panel (white background) */}
          <div className="md:w-[40%] w-full bg-white flex items-center justify-center p-4">
            <div className="bg-[#E9F7FB] rounded-[24px] p-6 w-full h-full flex flex-col justify-center shadow-sm">
              {/* Heading row */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={userManualIcon}
                  alt="User Manual"
                  className="w-7 h-7"
                />
                <h2 className="text-xl font-bold text-[#0098C9]">User Manual</h2>
              </div>

              {/* Description */}
              <p className="text-[#001A1D] text-base leading-relaxed font-normal">
                Want to know how the app <br />
                would work? Learn more <br />
                about it here
              </p>
            </div>
          </div>

          {/* Right Panel (blue background) */}
          <div className="flex flex-col justify-center gap-3 flex-1 px-4 py-4 md:px-6 md:py-4 bg-[#E6F9FF]">
            {manualOptions.map((option) => (
              <button
                key={option.id}
                onClick={option.action} 
                className="flex items-center justify-between w-full bg-white border border-[#0098C9] rounded-xl px-4 py-3 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  {option.icon}
                  <span className="text-sm md:text-base font-medium text-gray-900">
                    {option.title}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HowGwydeWorks;
