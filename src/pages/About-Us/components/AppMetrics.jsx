import { MdStarOutline } from "react-icons/md";

const AppMetrics = () => {
  return (
    <div
      style={{ top: "250px", position: "relative" }}
      className="bg-gradient-to-r from-[#BAF0FF] via-[#DBF7FF] to-[#BAF0FF] rounded-2xl md:rounded-3xl w-2xs md:w-full h-full mb-10 mt-10 md:mt-16 md:mb-12 lg:p-0.5 place-self-center"
    >
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
  );
};
export default AppMetrics;