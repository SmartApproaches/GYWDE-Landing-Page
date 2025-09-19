import { RingOne, RingTwo } from "../constants/images";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <>
      <section className=" bg-[var(--background)]  min-h-screen overflow-hidden relative">
        <div className="absolute top-[270px] md:top-[200px] -left-[2px] z-0 md:size-40 size-30">
          <img src={RingOne} />
        </div>
        <div className="absolute -top-[20px] right-0 z-0 md:size-85 size-60">
          <img src={RingTwo} />
        </div>

        <NavBar />
        <HeroSection />
        </section>

        <section className="relative  bg-[#E6F5F9] overflow-hidden">
        <div className="absolute hidden lg:block -bottom-5 -left-5 z-0 size  md:size-60 lg:size-70 rotate-180 ">
          <img src={RingTwo} />{" "}
        </div>
        <div className="absolute lg:hidden top-100 -left-0 z-0 size-25 ">
          <img src={RingOne} />{" "}
        </div>

        <WhyChooseUs />
      </section>
      
    </>
  );
}

export default Home;
