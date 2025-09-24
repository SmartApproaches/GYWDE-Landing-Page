import {
  videoThumbNail,
  worldMap,
} from "../constants/images";
import { FaPlay } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

function AboutUs() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-10 flex flex-col justify-between ">
        <h1 className="mx-4 md:mx-8 font-bold text-3xl lg:text-6xl leading-[1.5] uppercase lg:text-[40px] text-[#CACACA] font-semibold text-center md:text-start">
          About Us
        </h1>
        <div className="flex  justify-between md:gap-10 flex-col xl:flex-row  ">
          <div className="relative flex w-full justify-center  -ml-0 xl:-ml-25 lg:-mt-10">
            <img
              src={worldMap}
              className="relative w-screen h-auto md:w-full object-cover"
            />
            <div className="absolute hidden md:block md:top-[240px] lg:top-[290px] xl:top-[170px] md:left-[60%] lg:left-[58%] xl:left-[55%] text-[10px] md:text-md lg:text-sm  bg-[var(--pill-bg)] border-[var(--pill-border)] rounded-full py-2 px-3 pointer-events-none backdrop-blur-md whitespace-nowrap">
              Worldwide Service Provider Network
            </div>
            <div className="absolute hidden md:block md:top-[480px]  lg:top-[600px] xl:top-[350px] md:left-[20%] lg:left-[20%] text-[10px] md:text-md lg:text-sm bg-[var(--pill-bg)] border-[var(--pill-border)] rounded-full py-2 px-3 pointer-events-none backdrop-blur-md">
              Trusted Local Service Experts
            </div>
          </div>

          <div className="text-area mx-4 md:mx-8 lg:flex-col gap-4 lg:gap-8 xl:max-w-xl xl:mt-10 mx-4 xl:px-0  py-5 md:py-0 -mt-25 md:-mt-40 lg:-mt-70 ">
            <h1 className="text-[var(--primary)] flex text-center md:text-start font-bold text-3xl md:text-[36px] lg:text-[45px] xl:text-[55px] leading-[1.5] mb-2">
              We are Redefining Service Connections
            </h1>
            <p className="flex font-normal text-[15px] md:text-2xl text-justify leading-[1.8] ">
              Get Your Work Done Effortlessly (GYWDE) is a system that connect
              vendors (physical and online) to people in need of their service.
              At GYWDE, we believe that everyone deserves access to quality
              services that make life more convenient and fulfilling.
            </p>
          </div>
        </div>
        <div className="flex justify-between mx-4 md:mx-8 flex-col-reverse lg:flex-row gap-5 xl:gap-2 items-center lg:-mt-25 xl:-mt-60 mt-5 md:mt-10">
          <div className="xl:max-w-md mx- xl:px-4 xl:mx-12 mt-5 md:w-auto  lg:w-lg text-start justify-center  md:items-center ">
            
            <span>
              <ImQuotesLeft className="text-[var(--primary)] size-12 lg:size-20" />
            </span>{" "}
            {""}
            <h2 className="quoted-text flex text-[#CACACA] font-bold xs:text-[32px] text-[28px] md:text-3xl xl:text-4xl leading-[1.5] inline ">
              We created a product
              <br className="md:hidden" /> that connects People{" "}
              <br className="md:hidden" />
              to service providers <br className="md:hidden" />
              effortlessly{" "}
              <ImQuotesRight className="place-self-end inline-block text-[var(--primary)] size-12 lg:hidden mt-2" />
            </h2>
          </div>

          <div className="relative">
            <video
              src={videoThumbNail}
              poster={videoThumbNail}
              className=" w-screen h-auto lg:size-150 border-[var(--primary)]  rounded-2xl max-w-"
            ></video>
            <i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-90 transition delay-100 duration-300 ease-out items-center  ">
              {<FaPlay className="w-12 h-12 md:w-24 md:h-24" />}
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
