import React, { useState } from "react";
import Layout from "./components/layout";
import StepOne from "./components/steps/StepOne";
import StepTwo from "./components/steps/StepTwo";
import StepThree from "./components/steps/StepThree";

const PostJob = () => {
const [step, setStep] = useState(1);

const nextStep = () => setStep((s) => Math.min(s + 1, 3));
const prevStep = () => setStep((s) => Math.max(s - 1, 1));

const renderStep = () => {
switch (step) {
case 1:
    
return <StepOne />;
case 2:
return <StepTwo />;
case 3:
return <StepThree />;
default:
return <StepOne />;
}
<div className="p-6">
      <StepOne step={step} />

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded bg-gray-200"
        >
          Previous
        </button>
        <button
          onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
};

return (
<Layout step={step} nextStep={nextStep} prevStep={prevStep}>
{renderStep()}
</Layout>
);
};

export default PostJob;
