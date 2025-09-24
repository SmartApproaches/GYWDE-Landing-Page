import React from "react";
import AboutUsSection from "./components/AboutUsSection";
import AboutUsSection1 from "./components/AboutUsSection1";
import AppMetrics from "./components/AppMetrics";
import OurMissionVision from "./components/OurMissionVision";

function HeroSection() {
  return (
    <section>
      <AboutUsSection />
      <AboutUsSection1 />
      <AppMetrics />
      <OurMissionVision />
    </section>
  );
}

export default HeroSection;