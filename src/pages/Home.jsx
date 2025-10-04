import { RingOne, RingTwo } from "../constants/images";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import GetYourWorkDone from "../components/GetYourWorkDone";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import NeedAService from "../components/NeedAService";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

function Home() {
  return (
    <>
      <section className=" bg-[var(--background)] overflow-hidden relative">
        <div className="absolute top-[270px] md:top-[200px] -left-[2px] z-0 md:size-40 size-30">
          <img src={RingOne} />
        </div>
        <div className="absolute -top-[20px] right-0 z-0 md:size-85 size-60">
          <img src={RingTwo} />
        </div>

        <HeroSection />
      </section>

      <section className="bg-[var(--background-secondary)] overflow-x-hidden ">
        <GetYourWorkDone />
      </section>
      <section className="bg-[var(--background)] relative overflow-hidden">
        <div className="absolute -top-5 right-0 z-0 md:size-85 size-30">
          <img src={RingTwo} />
        </div>
        <AboutUs />
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
      
      <section className="bg-[var(--background)] relative overflow-hidden">
        <div className="absolute -top-0 right-0 z-0 md:size-85 size-30">
          <img src={RingTwo} />
        </div>
        <Categories />
      </section>

      <section className="relative  bg-[#E6F5F9] overflow-hidden">
        <div className="absolute -bottom-5 -left-6 z-0 size-40  md:size-60 lg:size-90 rotate-180 ">
          <img src={RingTwo} />{" "}
        </div>

        <Testimonials />
      </section>
      <section className="bg-[var(--background)] overflow-hidden">
        <NeedAService />
      </section>
      <Footer />
    </>
  );
}

export default Home;
