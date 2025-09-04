import { Link } from "react-router-dom";
import { globe } from "../constants/images";
import { MdStarOutline } from "react-icons/md";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto min-h-screen pt-28 md:pt-35 lg:pt-50 px-4 md:px-12 overflow-x-hidden">
      <div className="flex-col md:flex-row items-center justify-between gap-8 ">
        <motion.div
          className="text-center md:text-center lg:text-left relative z-10"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-bold text-[34px] leading-[1.4] md:text-[56px] leading-snug whitespace-nowrap">
            Hire Trusted Hands, <br />
            From <span className="text-[var(--primary)]">Anywhere</span> –{" "}
            <br />
            For <span className="text-[var(--text-success)]">Anything.</span>
          </h1>

          <p className="p-2 text-sm md:text-lg lg:text-xl leading-relaxed text-wrap justify-center lg:justify-start">
            Whether it's your website or your wedding cake, our{" "}
            <br className="hidden md:block" /> community of trusted service
            providers gets the job <br className="hidden md:block" /> done, fast
            and flawlessly.
          </p>

          <div className="flex flex-row gap-4 lg:gap-8 items-center justify-start mt-4 md:mt-2 w-full">
            <Link className="w-full sm:w-auto ">
              <button className="w-full py-3 px-8 lg:px-15 whitespace-nowrap text-xs md:text-lg  bg-[var(--primary)] text-white rounded-md md:rounded-xl hover:bg-[var(--secondary)] transition delay-100 duration-300 ease-out hover:scale-95">
                Find a Talent
              </button>
            </Link>

            <Link className="w-full sm:w-auto">
              <button className="w-full py-3 px-8 lg:px-15 whitespace-nowrap text-xs md:text-lg border border-[var(--primary)] bg-transparent text-[var(--primary)] rounded-md md:rounded-xl hover:bg-[var(--light-primary)] transition delay-100 duration-300 ease-out hover:scale-95">
                Offer a Service
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:w-full my-10 w-auto items-center mx-auto justify-center md:mt-0 md:absolute md:right-0 md:top-35 md:max-w-[850px]"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={globe}
            alt="Globe illustration"
            className=" md:w-[80%] lg:w-full h-auto justify-center"
          />
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-[#BAF0FF] via-[#DBF7FF] to-[#BAF0FF] rounded-2xl md:rounded-3xl w-2xs md:w-full h-full mb-10 mt-10 md:mt-16 md:mb-12 lg:p-0.5 place-self-center">
        <div className="bg-white flex flex-col md:flex-row justify-between items-center gap-[48px] md:gap-5 w-2xs md:w-full h-full p-4 md:p-6 rounded-2xl md:rounded-3xl">
          <div className="flex items-center gap-2 items-center">
            <span className="font-bold text-[33.21px] lg:text-5xl text-[var(--secondary)]">
              5k+
            </span>
            <span className="font-normal text-base lg:text-2xl leading-[1.5] whitespace-nowrap">
              Active Users
            </span>
          </div>

          <div className="flex items-center gap-2 items-center">
            <span className="font-bold text-[33.21px] lg:text-5xl text-[var(--secondary)]">
              30
            </span>
            <span className="font-normal text-base lg:text-2xl leading-[1.5] whitespace-nowrap">
              Countries Served
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center font-bold text-[33.21px] lg:text-5xl text-[var(--secondary)] gap-1">
              4.2 <MdStarOutline size={30} className="md:size-8" />
            </span>
            <span className="font-normal text-base lg:text-2xl leading-[1.5] whitespace-nowrap">
              Average Rating App
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
