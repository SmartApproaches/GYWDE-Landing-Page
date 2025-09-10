import { RingOne, RingTwo } from "../constants/images";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

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

        <NavBar />
        <HeroSection />
        </section>
      
    </>
  );
}

export default Home;
