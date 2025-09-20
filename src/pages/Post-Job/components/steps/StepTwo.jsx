import React from "react";

const StepTwo = ({ step }) => {
  return (
    <section className="max-w-2xl">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold">
          What is the primary goal of your landing page?
        </h2>
        <div className="text-sm text-[#0096C1]">2 of 3</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="goal-leads"
            type="radio"
            name="goal"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="goal-leads" className="text-base">
            Generate Leads
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="goal-sales"
            type="radio"
            name="goal"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="goal-sales" className="text-base">
            Make Sales
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="goal-info"
            type="radio"
            name="goal"
            defaultChecked
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="goal-info" className="text-base">
            Provide Product Information
          </label>
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-md hover:border-blue-500">
          <input
            id="goal-other"
            type="radio"
            name="goal"
            className="h-5 w-5 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="goal-other" className="text-base">
            Other (please specify)
          </label>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;
