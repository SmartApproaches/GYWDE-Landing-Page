import React, { useState } from "react";
import AlmostDone from "./AlmostDone";

const BriefForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); 
  };

  if (submitted) {
    return <AlmostDone />;
  }

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">

        <div className="relative max-w-2xl mx-auto px-6 py-5 ml-16 pt-15">
        <img src="src/pages/Post-Job/assets/Logo.svg" alt="Gywde" className="h-10" />
      </div>

      <img
        src="src/assets/Ellipse 10.svg"
        alt="Blue ring background"
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      <div className="relative max-w-2xl mx-auto px-6 py-12 ml-16">
        <h1 className="text-5xl font-extrabold leading-tight mb-3 font-family-worksans">
          Tell us what you <br /> need{" "}
          <span className="text-[#0096C1]">done.</span>
        </h1>
        <p className="mb-6">
          We’ll guide you to create the perfect brief. The more detail the
          better.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="productName"
              className="block text-big font-bold text-[#002D3A]"
            >
              Product Name
            </label>
            <input
              id="productName"
              name="productName"
              defaultValue="Interactive Website with Spline and Rive animation and interaction"
              className="mt-1 block w-full border border-[#0096C1] rounded-md p-2 focus:ring-[#0096C1] focus:border-[#0096C1]"
            />
          </div>

          <div>
            <label className="block text-big font-bold text-[#002D3A]">
              Product Description
            </label>
            <div className="mt-1 border border-[#0096C1] rounded-md p-4 text-sm text-gray-700 space-y-4">
              <p>
                I’m looking for an interactive landing page for a digital
                product. The main goal is to provide product information.
              </p>
              <div>
                <h3 className="font-semibold text-[#002D3A]">Key features:</h3>
                <ul className="list-disc list-inside">
                  <li>User testimonials</li>
                  <li>Case studies</li>
                  <li>Rive animations</li>
                  <li>Spline interactions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#002D3A]">
                  Ideal skills and experience:
                </h3>
                <ul className="list-disc list-inside">
                  <li>Web development experience</li>
                  <li>Proficiency in Rive and Spline</li>
                  <li>
                    Experience in creating interactive and engaging landing
                    pages
                  </li>
                  <li>
                    Strong design sense to ensure a visually appealing layout
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <label className="flex items-center space-x-4 px-4 py-4 border border-[#0096C1] rounded-md cursor-pointer text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.94 5 5 0 019.9 1.35A3.5 3.5 0 0116.5 16H7z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15l3-3 3 3"
              />
            </svg>
            <div className="text-sm">
              <div className="font-medium">
                <span className="text-[#002D3A]">Drag and drop or</span>{" "}
                <span className="text-[#0096C1]">click to upload</span>
              </div>
              <div className="text-xs text-gray-500">
                Images or documents that would be helpful in explaining your
                brief. Max size 25MB.
              </div>
            </div>
            <input type="file" className="hidden" />
          </label>

          <button
            type="submit"
            className="w-1/4 py-2.5 bg-[#0096C1] text-white font-medium rounded-md hover:bg-[#007b9e] transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BriefForm;
