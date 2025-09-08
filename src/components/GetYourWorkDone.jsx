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
      <div className="max-w-6xl mx-auto py-10 flex flex-col justify-between">
        <h1 className="px-4 md:px-12 text-center md:text-left font-bold text-3xl lg:text-6xl leading-[1.5]">
          Get Your Work Done <br /> Effortlessly-
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 lg:mt-5 align-middle">
          {/* LEFT: Progress + text */}
          <div className="text-scroll lg:flex px-4 md:px-12 gap-4 lg:gap-10">
            <div className="progress-bar relative w-auto h-2 lg:w-3 lg:h-[605px] bg-[var(--background)] rounded-full">
              <div
                className="progress-indicator absolute top-0 left-0 w-full bg-[var(--primary)] rounded-full"
                style={{ height: "2%" }}
              ></div>
            </div>

            <div className=" flex flex-row lg:flex-col overflow-x-hidden lg:w-xs text-[var(--text-tertiary)] lg:-mt-2">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col mr-5 lg:mr-0 lg:mb-5"
                  >
                    <h3 className="font-bold text-xl lg:text-2xl mb-2 leading-[1.5]">
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
                              className="w-auto h-auto"
                            />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm lg:text-base font-regular">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="image-div relative flex justify-center lg:justify-end w-full place-items-center">
            <div className="absolute bg-[var(--light-primary)] w-70 h-70 rounded-full flex justify-center overflow-hidden -top-[70px]  -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src={plainPhone}
              className="absolute phone-image w-auto lg:w-auto h-auto z-10  -top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Step phone"
            />
            <div className=" shadow absolute md:-bottom-[200px] left-1/2 w-[150px] h-[5px] bg-black/20 blur-sm rounded-full z-0"></div>
          </div>

        </div>
         <div className="lg:place-self-end place-self-center lg:-mt-15 border border-[var(--primary)] rounded-md px-6 py-2 hover:scale-95 transition delay-100 duration-300 ease-out">
          <Link  to="/vendor">
            <button className="flex text-[var(--primary)] font-regular text-sm lg:text-md items-center gap-2">
              Vendor <i><FaArrowRight/></i>
            </button>
          </Link>
        </div>
       
      </div>
    </>
  );
}
export default GetYourWorkDone;


