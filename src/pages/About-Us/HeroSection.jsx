import React from "react";
import AboutUsSection from "./components/AboutUsSection";
import AboutUsSection1 from "./components/AboutUsSection1";
import AppMetrics from "./components/AppMetrics";
import OurMissionVision from "./components/OurMissionVision";
import Interview from "./components/Interview";
import WhatSetsUsApart from "./components/WhatSetsUsApart";

function HeroSection() {
  return (
    <section>
      <AboutUsSection />
      <AboutUsSection1 />
      <AppMetrics />
      <OurMissionVision />
      <Interview />
      <WhatSetsUsApart />
    </section>
  );
}

export default HeroSection;