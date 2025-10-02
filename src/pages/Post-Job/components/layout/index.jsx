import React from "react";

const Layout = ({ step, nextStep, prevStep, handleSubmit, children }) => {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <img
        src="src\constants\images\RingTwo.svg"
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-0"
        alt="Blue ring background element"
      />

      <div className="relative max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-6">
          <img src="src\constants\images\logo.svg" alt="Gywde" className="h-8" />
        </div>

        <h1 className="text-5xl font-extrabold leading-tight mb-3">
          Tell us what you<br/> need <span className="text-[#0096C1]">done.</span>
        </h1>

        <p className="text-gray-600 mb-4 max-w-xl">
          Answer three quick questions and we’ll craft you the perfect project
          description!
        </p>

        <p className="italic text-gray-700 mb-8">
          Interactive Website with Rive and Spline animations and interactions
        </p>

        {/* the step/question area */}
        <div className="mb-8">{children}</div>

        {/* footer navigation buttons */}
        <div className="flex justify-end items-center w-full space-x-3">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 rounded-md bg-[#0096C1] text-white hover:bg-[#0096C1] transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-md bg-[#0096C1] text-white hover:bg-[#0096C1] transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
