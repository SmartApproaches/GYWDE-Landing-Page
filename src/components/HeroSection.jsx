import { Link } from "react-router-dom";
import { globe } from "../constants/images";
import { MdStarOutline } from "react-icons/md";

function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto min-h-screen pt-28 lg:pt-50 px-4 md:px-12">

      <div className="flex-col md:flex-row items-center justify-between gap-8 ">
 
        <div className="text-center md:text-left relative z-10">
          <h1 className="font-bold text-3xl md:text-[56px] leading-snug ">
            Hire Trusted Hands, <br />
            From <span className="text-[var(--primary)]">Anywhere</span> –{" "}
            <br />
            For <span className="text-[var(--text-success)]">Anything.</span>
          </h1>

          <p className="p-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-wrap justify-start">
            Whether it's your website or your wedding cake, our{" "}
            <br className="hidden md:block" /> community of trusted service
            providers gets the job <br className="hidden md:block" /> done, fast
            and flawlessly.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 items-center justify-start mt-4 w-full">
            <Link className="w-full sm:w-auto">
              <button className="w-full sm:w-44 md:52 lg:w-60 py-3 px-8 bg-[var(--primary)] text-white rounded-xl">
                Find a Talent
              </button>
            </Link>

            <Link className="w-full sm:w-auto">
              <button className="w-full sm:w-44 md:52 lg:w-60 py-3 px-8 border border-[var(--primary)] text-[var(--primary)] rounded-xl">
                Offer a Service
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-full my-10 w-auto items-center mx-auto justify-center md:mt-0 md:absolute md:right-0 md:top-35 md:max-w-[850px]">
          <img src={globe} alt="Globe illustration" className="w-[100%] sm:w-[85%] md:w-[80%] lg:w-full h-auto justify-center" />
        </div>
      </div>


      <div className="bg-gradient-to-r from-[#BAF0FF] via-[#DBF7FF] to-[#BAF0FF] rounded-3xl mb-10  md:mt-16 md:mb-12 p-1">
        <div className="bg-white flex flex-col md:flex-row justify-between items-center gap-4 w-full h-full p-6 rounded-3xl">

          <div className="flex items-center gap-2">
            <span className="font-bold text-3xl md:text-5xl text-[var(--secondary)]">
              5k+
            </span>
            <span className="font-normal text-lg md:text-2xl leading-[1.5]">
              Active Users
            </span>
          </div>


          <div className="flex items-center gap-2">
            <span className="font-bold text-3xl md:text-5xl text-[var(--secondary)]">
              30
            </span>
            <span className="font-normal text-lg md:text-2xl leading-[1.5]">
              Countries Served
            </span>
          </div>


          <div className="flex items-center gap-2">
            <span className="flex items-center font-bold text-3xl md:text-5xl text-[var(--secondary)] gap-1">
              4.2 <MdStarOutline size={30} className="md:size-10" />
            </span>
            <span className="font-normal text-lg md:text-2xl leading-[1.5]">
              Average Rating App
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
