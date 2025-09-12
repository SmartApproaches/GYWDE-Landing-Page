import { RingOne, RingTwo } from "../constants/images";
import WhyChooseUs from "../components/WhyChooseUs";


function Home() {
  return (
    <>
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
