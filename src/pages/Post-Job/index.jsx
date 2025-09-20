import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "./components/layout";
import StepOne from "./components/steps/StepOne";
import StepTwo from "./components/steps/StepTwo";
import StepThree from "./components/steps/StepThree";
import BriefForm from "./components/steps/BriefForm";
import LoadingScreen from "./components/steps/LoadingScreen";

const PostJob = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showBrief, setShowBrief] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowBrief(true);
    }, 3000);
  };

  if (loading) return <LoadingScreen />;

  if (showBrief) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BriefForm />
      </motion.div>
    );
  }

  return (
    <Layout step={step} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit}>
      <div className="space-y-6">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StepOne />
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StepTwo />
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StepThree />
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default PostJob;
