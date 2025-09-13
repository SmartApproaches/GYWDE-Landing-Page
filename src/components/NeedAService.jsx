import { Link } from "react-router-dom";
import servicePhoto from "../constants/images/servicePhoto.svg";

function NeedAService() {
  return (
    <>
      <div
        className=" my-10 mx-auto  place-self-center bg-[var(--background)] rounded-2xl items-center"
        style={{ boxShadow: "0 0 20.2px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:gap-5 py-4 px-2 lg:px-10">
          <div className="flex flex-col items-center lg:gap-6 lg:p-[14px] mb-6">
            <div className="text-justify lg:text-start lg:w-[515px] mt-2 ">
              <h1 className="font-semibold text-[15.72px] lg:text-[26px] mb-2 leading-[1.5] text-[var(--secondary)]">
                Need a Specific Service?
                <span className="block font-bold text-[36.22px] lg:text-[59.91px] text-[var(--primary)] leading-[1.5] ">
                  Post Your Job!
                </span>
              </h1>
              <div className="flex flex-col w-[294.41px] md:w-[380px] lg:w-[487px]">
                <p className="font-normal text-justify text-[14.51px] lg:text-[24px] leading-[1.5] mb-8 text-[var(--text-3)]">
                  Post your job directly on GYWDE with clear details about the
                  task, your preferences, and expectations. Sit back as
                  qualified vendors apply, review their profiles, make your
                  pick, and track progress every step of the way.
                  <span className="mt-4 block">
                    Ready to begin? Post your job now and let the right experts
                    find you!
                  </span>
                </p>
                <div className="text-center bg-[var(--primary)] text-white  rounded-lg px-5 py-2 w-full">
                  <Link to="/PostAJob">
                    <button className="font-normal text-[10.57px] lg:text-[17.49px] cursor-pointer">
                      Post a Job
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative flex justify-center items-center">
            <div className=" relative z-1 bg-[var(--background-secondary)] rounded-full w-80 h-80 "></div>
            <img
              src={servicePhoto}
              className="absolute z-10 top-1/2 size-100 -translate-y-1/2 mr-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NeedAService;
