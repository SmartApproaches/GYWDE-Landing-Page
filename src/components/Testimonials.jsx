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
                className="size-24 rounded-full object-cover absolute z-5 -mt-110 -mr-25  -translate-x-1/2"
              />
              <div className=" flex items-center w-full relative">
                <FaChevronLeft className="text-[var(--primary)] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-16 -ml-5" />

                <div className="card-body bg-white mx-10 min-w-2xs rounded-3xl p-8 relative z-0 ">
                  <div className="place-self-center leading-[1.5] font-semibold text-[10px] lg:text-2xl uppercase mt-5 mb-5">
                    {card.profileName}
                  </div>
                  <div className=" flex flex-row gap-5 relative items-center ">
                    <div className="play-card bg-[var(--background-other)] w-[323px] h-[296px] px-4 rounded-2xl relative">
                      <i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-90 transition delay-100 duration-300 ease-out items-center  ">
                        {<FaPlay className="w-12 h-12 md:w-16 md:h-16" />}
                      </i>
                    </div>
                    <div className="justify-center text-justify">
                      <span>
                        <ImQuotesLeft className="text-[var(--primary)] size-12 lg:size-6 mb-2" />
                      </span>
                      <h1 className="font-bold font-xl leading-[1.5] text-[var(--secondary)] lg:w-[311px] mb-2">
                        {card.header}
                      </h1>
                      <p className="leading-[1.8] lg:text-base text-[var(--text-3)] lg:w-[346px] ">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>

                <FaChevronRight className="text-[var(--primary)] absolute right-0 top-1/2  -translate-y-1/2 translate-x-1/2 -mr-5 cursor-pointer size-16" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Testimonials;
