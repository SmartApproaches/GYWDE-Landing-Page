import React from "react";

const StepThree = ({ step }) => {
  return (
    <section className="max-w-2xl">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold">
          What kind of product information would you like to include?
        </h2>
        <div className="text-sm text-[#0096C1]">3 of 3</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="info-features"
            type="checkbox"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
            defaultChecked
          />
          <label htmlFor="info-features" className="text-base">
            Product Features
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="info-testimonial"
            type="checkbox"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
            defaultChecked
          />
          <label htmlFor="info-testimonial" className="text-base">
            User Testimonial
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="info-case"
            type="checkbox"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="info-case" className="text-base">
            Case Studies
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md opacity-50 cursor-not-allowed">
          <input
            id="info-other"
            type="checkbox"
            className="h-5 w-5 text-gray-400 focus:ring-blue-500"
            disabled
          />
          <label htmlFor="info-other" className="text-base">
            Other (please specify)
          </label>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
