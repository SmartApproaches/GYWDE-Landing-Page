import { RingOne, RingTwo } from "../constants/images";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import GetYourWorkDone from "../components/GetYourWorkDone";

function Home() {
  return (
    <>
      <section className="wrapper bg-[var(--background)]  min-h-screen  overflow-y-hidden">
        <div className="absolute top-[150px] -left-[10px] z-0 md:size-40 size-15">
          <img src={RingOne} />
        </div>
        <div className="absolute -top-[20px] right-0 z-0 md:size-85 size-30">
          <img src={RingTwo} />
        </div>

        <NavBar />
        <HeroSection />
        </section>

        <section className="bg-[var(--background-secondary)] h-[1161px] overflow-y-hidden">
          <GetYourWorkDone /> 
        </section>
        
      
    </>
  );
}

export default Home;
