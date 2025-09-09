import React, { useState } from "react";
import Layout from "./components/layout";
import StepOne from "./components/steps/Step-One";
import StepTwo from "./components/steps/Step-Two";
import StepThree from "./components/steps/Step-Three";

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
};

return (
<Layout step={step} nextStep={nextStep} prevStep={prevStep}>
{renderStep()}
</Layout>
);
};

export default PostJob;
