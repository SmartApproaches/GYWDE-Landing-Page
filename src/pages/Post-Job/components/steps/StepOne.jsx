import React from "react";

const StepOne = ({ step }) => {
  return (
    <section className="max-w-2xl">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold">
          What is the main purpose of your interactive website?
        </h2>
        <div className="text-sm text-[#0096C1]">1 of 3</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="purpose-showcase"
            type="radio"
            name="purpose"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="purpose-showcase" className="text-base">
            Showcase Portfolio
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="purpose-ecommerce"
            type="radio"
            name="purpose"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="purpose-ecommerce" className="text-base">
            E-commerce Website
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="purpose-promote"
            type="radio"
            name="purpose"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="purpose-promote" className="text-base">
            Promote a Product/Service
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="purpose-landing"
            type="radio"
            name="purpose"
            defaultChecked
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="purpose-landing" className="text-base">
            Landing page for a Digital product
          </label>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
