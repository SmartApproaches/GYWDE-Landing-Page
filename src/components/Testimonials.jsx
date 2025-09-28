import { photo } from "../constants/images";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";

const card= [
  {
    image: [photo],
    profileName: "jumoke bakre",
    header:
      "This Product has been a life-saver with my for me with finding vendors for my tasks",
    text:
    "Your all-in-one platform to discover reliable vendors at your convenience that cater to your every need whether online or physically.",
  },
];




function Testimonials() {
  return (
    <>
      <div className="container mx-auto py-8 flex flex-col items-center justify-center justify-between gap-10 bg-[var(--background-secondary)]]">
        <div className="mx-auto text-center">
          <h1 className="uppercase text-center text-[44.39px] lg:text-[118px] leading-[1.5] text-[var(--text-other)] font-semibold ">
            testimonials
          </h1>
        </div>
        {card.map((card, key) => {
          return (
            <div key={key}
            className="relative flex flex-col items-center justify-center">
              <img
                src={card.image}
                className="size-16 lg:size-24 rounded-full object-cover absolute z-5 -mt-45 md:-mt-85 lg:-mt-110 left-1/2 md:-mr-25  -translate-x-1/2"
              />
              <div className=" flex items-center w-full relative">
                <FaChevronLeft className="text-[var(--primary)] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-8 md:size-12 lg:size-16 ml-4 md:-ml-5" />

                <div className="card-body bg-white mx-10 md:w-auto md:h-auto w-[289px] h-[180px] rounded-xl md:rounded-3xl p-4 md:p-8 relative z-0 ">
                  <div className="place-self-center leading-[1.5] font-semibold text-[9px] md:text-2xl uppercase mt-5 mb-2 md:mt-5 md:mb-5">
                    {card.profileName}
                  </div>
                  <div className=" flex flex-row gap-5 relative items-center ">
                    <div className="play-card bg-[var(--background-other)] w-[122px] h-[112px] md:w-[223px] md:h-[204px] lg:w-[323px] lg:h-[296px] px-4 rounded-2xl relative">
                      <i className="absolute top-1/2 left-1/3 md:top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-90 transition delay-100 duration-300 ease-out items-center  ">
                        {<FaPlay className="size-6 md:size-12 lg:size-16" />}
                      </i>
                    </div>
                    <div className="justify-center text-justify">
                      <span>
                        <ImQuotesLeft className="text-[var(--primary)] size-4 lg:size-6 mb-2" />
                      </span>
                      <h1 className="font-bold text-[8px] md:text-[14px] lg:text-[20px] leading-[1.5] text-[var(--secondary)] w-[132px] md:w-[222px] lg:w-[311px] mb-2">
                        {card.header}
                      </h1>
                      <p className="leading-[1.8] text-[6px] md:text-[12px]  lg:text-base text-[var(--text-3)] w-[130px] md:w-[238px] lg:w-[346px] ">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>

                <FaChevronRight className="text-[var(--primary)] absolute right-0 top-1/2  -translate-y-1/2 translate-x-1/2 mr-4 md:-mr-5 cursor-pointer size-8 md:size-12 lg:size-16" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Testimonials;
