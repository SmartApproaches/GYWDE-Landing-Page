import React from "react";
import AboutUsSection from "./components/AboutUsSection";
import AboutUsSection1 from "./components/AboutUsSection1";
import AppMetrics from "./components/AppMetrics";
import OurMissionVision from "./components/OurMissionVision";
import Interview from "./components/Interview";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import FAQSection from "./components/FAQSection";

function HeroSection() {
  return (
    <section>
      <AboutUsSection />
      <AboutUsSection1 />
      <AppMetrics />
      <OurMissionVision />
      <Interview />
      <WhatSetsUsApart />
      <FAQSection/>
    </section>
  );
}

export default HeroSection;