import { RingTwo } from "../constants/images";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <>
        <section className="bg-[var(--background)] relative overflow-hidden">
          <div className="absolute -top-[0px] right-0 z-0 md:size-85 size-30">
          <img src={RingTwo} />
        </div>
          <AboutUs /> 
        </section>
        
      
    </>
  );
}

export default Home;
