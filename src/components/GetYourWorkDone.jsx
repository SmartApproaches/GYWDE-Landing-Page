import {
  applePlay,
  googlePlay,
  plainPhone,
  exploreServicesPhone,
  perfectMatchPhone,
  signUpPhone,
  splashScreenPhone,
  successPhone,
} from "../constants/images";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const items = [
  {
    title: "Download App",
    descriptionImages: [
      { src: applePlay, link: "https://www.apple.com/app-store/" },
      { src: googlePlay, link: "https://play.google.com/store" },
    ],
    image: [splashScreenPhone],
  },
  {
    title: "Sign up or log in",
    description:
      "Sign up with your basic info and service details — or log in if you already have an account.",
    image: [signUpPhone],
  },
  {
    title: "Explore Services",
    description:
      "Explore services tailored to your needs — from home repairs to online projects.",
    image: [exploreServicesPhone],
  },
  {
    title: "Find the perfect match",
    description:
      "Review detailed profiles of vendors, including their expertise, ratings, and customer reviews.",
    image: [perfectMatchPhone],
  },
  {
    title: "Book with confidence",
    description:
      "Select your preferred vendor and schedule the service at a time convenient for you in a secure process.",
    image: [successPhone],
  },
];
function GetYourWorkDone() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-5 md:py-10 flex flex-col justify-between">
        <h1 className="px-4 md:px-12 text-center md:text-left font-bold text-3xl lg:text-6xl leading-[1.5]">
          Get Your Work Done <br /> Effortlessly-
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 md:mt-5 align-center gap-10 lg:gap-0">
          {/* LEFT: Progress + text */}
          <div className="text-scroll md:flex px-4 md:px-12 gap-4 lg:gap-10 w-screen lg:w-auto">
            <div className="progress-bar relative w-auto h-2 md:w-3 md:h-auto lg:h-[605px] bg-[var(--background)] rounded-full mb-5">
              <div
                className="progress-indicator absolute top-0 left-0 h-2 w-2 md:h-3 md:w-3 bg-[var(--primary)] rounded-full"
                // style={{ height: "5%" }}
              ></div>
            </div>

            <div className=" flex flex-row md:flex-col overflow-x-hidden md:w-xs lg:w-xs text-[var(--text-tertiary)] md:-mt-2">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col mr-40 lg:mr-0 md:mb-5"
                  >
                    <h3 className="flex font-bold text-[22.71px] lg:text-2xl mb-1 lg:mb-2 leading-[1.5] whitespace-nowrap lg:whitespace-normal">
                      {item.title}
                    </h3>
                    {item.descriptionImages ? (
                      <div className="flex flex-row gap-4">
                        {item.descriptionImages.map((descriptionImage, key) => (
                          <a
                            key={key}
                            href={descriptionImage.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={descriptionImage.src}
                              alt={item.title}
                              className="w-[250px] h-[50px] lg:w-auto lg:h-auto object-contain"
                            />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm lg:text-base font-[14.2px] flex w-2xs lg:w-auto lg:whitespace-normal">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="image-div relative flex justify-center lg:justify-end lg:w-auto lg:h-auto place-items-center -mt-20 lg:py-15">
            <div className="absolute bg-[var(--light-primary)] w-40 h-40 md:size-50 lg:w-70  lg:h-70 rounded-full lg:top-1/5 lg:-translate-x-1/2 lg:-translate-y-1/6 z-1">
            <div className=" shadow absolute -bottom-[50px] md:-bottom-[120px] left-1/2 lg:left-1/4 lg:w-[150px] lg:h-[5px] bg-black/20 blur-sm rounded-full z-0"></div>
            </div>
            {/* top-0 lg:-top-1/6  lg:-translate-x-1/2 lg:-translate-y-1/2 z-5 */}
            <img
              src={plainPhone}
              className=" relative phone-image size-[350px] md:w-lg md:h-lg lg:w-auto lg:h-auto lg:-top-[70px] lg:align-center -left-1/10 md:-left-1/6 lg:-left-0 place-self-center z-50"
              alt="Step phone"

            />
            {/* lg:top-0 lg:left-1/2 lg:-translate-x-1/2  lg:-translate-y-1/2 */}

            
          </div>
        </div>
        <div className="lg:place-self-end place-self-center mt-8 lg:-mt-15 border border-[var(--primary)] rounded-md px-6 py-2 hover:scale-95 transition delay-100 duration-300 ease-out hidden lg:block">
          <Link to="/vendor">
            <button className="flex text-[var(--primary)] font-regular text-sm lg:text-md items-center gap-2">
              Vendor{" "}
              <i>
                <FaArrowRight />
              </i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default GetYourWorkDone;
