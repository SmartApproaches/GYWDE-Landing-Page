import { Link } from "react-router-dom";
import servicePhoto from "../constants/images/servicePhoto.svg";

function NeedAService() {
  return (
    <div
      className="my-10 mx-4 md:mx-12 place-self-center bg-[var(--background)] rounded-2xl items-center py-4 px-6 md:px-8 lg:py-6 lg:px-10"
      style={{ boxShadow: "0 0 10.4px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 w-full">

        <div className="text-section flex flex-col items-center lg:items-start lg:gap-6">
          <div className="text-justify lg:text-start w-full max-w-[312px] md:max-w-2xl lg:max-w-[515px] mt-2 lg:mt-0">
            <h1 className="font-semibold text-[15.72px] md:text-[20px] lg:text-[26px] mb-2 leading-[1.5] text-[var(--secondary)]">
              Need a Specific Service?
              <span className="block font-bold text-[36.22px] md:text-[46px] lg:text-[59.91px] text-[var(--primary)] leading-[1.5]">
                Post Your Job!
              </span>
            </h1>

            <div className="flex flex-col md:w-auto">
              <p className="font-normal text-justify text-[14.51px] md:text-[18px] lg:text-[24px] leading-[1.5] mb-8 text-[var(--text-3)]">
                Post your job directly on GYWDE with clear details about the
                task, your preferences, and expectations. Sit back as qualified
                vendors apply, review their profiles, make your pick, and track
                progress every step of the way.
                <span className="mt-4 block">
                  Ready to begin? Post your job now and let the right experts
                  find you!
                </span>
              </p>

              {/* Link styled as a button */}
              <Link
                to="/PostAJob"
                className="inline-block font-normal text-[10.57px] md:text-[14px] lg:text-[17.49px] 
                           cursor-pointer px-5 py-2 rounded-lg bg-[var(--primary)] text-white text-center"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-5">
          <div className="relative z-1 bg-[var(--background-secondary)] rounded-full w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"></div>
          <img
            src={servicePhoto}
            alt="Need a Service"
            className="absolute z-10 top-1/2 -translate-y-1/2 mr-6 md:mr-10 
                       w-52 md:w-64 lg:w-72 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default NeedAService;
