import RingOne from "../assets/RingOne.svg";
import RingTwo from "../assets/RingTwo.svg";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <section className="relative bg-[var(--background)]  min-h-screen overflow-x-hidden overflow-y-hidden">
        <div className="absolute top-[150px] left-0 z-0 md:size-40 size-30">
          <img src={RingOne} />
        </div>
        <div className="absolute top-0 right-0 z-0 md:size-80 size-30">
          <img src={RingTwo} />
        </div>

        <NavBar />
      </section>
    </>
  );
}

export default Home;
