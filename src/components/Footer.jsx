import { Link } from "react-router-dom";
import {
  Logo,
  applePlayFill,
  googlePlayFill,
  splashScreenPhone,
  twitterLogo,
  youtubeLogo,
  linkedInLogo,
  tiktokLogo,
  facebookLogo,
  instagramLogo,
} from "../constants/images";

const icons = [
  {
    image: [{ src: twitterLogo, link: "https://www.twitter.com" }],
  },
  { image: [{ src: facebookLogo, link: "https://www.facebook.com" }] },
  { image: [{ src: instagramLogo, link: "https://www.instagram.com" }] },
  { image: [{ src: linkedInLogo, link: "https://www.linkedin.com" }] },
  { image: [{ src: youtubeLogo, link: "https://www.youtube.com" }] },
  { image: [{ src: tiktokLogo, link: "https://www.tiktok.com" }] },
];

function Footer() {
  return (
    <>
      <footer className="bg-[var(--secondary)] text-white py-10 overflow-x-hidden  ">
        <div className="max-w-6xl mx-4 md:mx-12 grid grid-cols-3 lg:grid-cols-4 place-self-center">
          {/* Column 1 */}
          <div className="logo lg:w-[331px] ">
            <img
              src={Logo}
              alt="logo"
              className="lg:w-[194px] lg:h-[61px] text-start"
            />
            <div>
              <p className="text-white text-sm mt-2 lg:mt-4 text-justify font-normal text-[6.7px] lg:text-lg w-[120.57px] md:w-[225px] lg:w-[331px] leading-[1.5]">
                At GYWDE, we aim to empower
                <br /> individuals to seamlessly connect
                <br /> with skilled vendors and get their
                <br /> work done with confidence.
              </p>
              <h2 className="text-white mt-2 lg:mt-4 font-bold text-[6.7px] md:text-lg">
                Contact Us
              </h2>
              <button className="text-[var(--secondary)] bg-[var(--nav-bg)] text-[7px] lg:text-lg mt-2 py-1 px-2 lg:py-2 lg:px-4 border-1  border-white rounded-3xl text-[6.7px] lg:text-lg ">
                <a href="#">support@gywde.com</a>
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-[6.7px] lg:text-lg leading-[2.2] mx-4 md:mx-12">
            <h3 className=" font-bold font-bold">Company</h3>
            <ul className="space-y-1 font-normal whitespace-nowrap ">
              <li>
                <Link to="#" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Consumer Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Vendor Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-[6.7px] lg:text-lg leading-[2.2] mx-4 md:mx-12">
            <h3 className="font-bold">Categories</h3>
            <ul className="space-y-1 font-normal whitespace-nowrap">
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Repairs and maintenance
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Digital services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Events services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Beauty services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Transport and Logistics
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Consulting services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className=" relative flex flex-col place-items-end hidden lg:block ml-10 w-auto h-auto">
            <div className="relative h-45 w-45 bg-[var(--footer-phonebg)] rounded-full z-1">
              <div className="shadow absolute h-1 w-15 bg-black backdrop-blur-lg rounded-full -bottom-[35px] left-1/4 bg-black/70 blur-sm rounded-full"></div>
            </div>
            <img
              src={splashScreenPhone}
              alt={splashScreenPhone}
              className="w-auto h-auto  object-contain absolute z-15  translate-y-1/2 -top-1/4"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-10 lg:mt-15 mx-4 md:mx-12">
          <div className="flex flex-row gap-2 lg:gap-4 justify-center lg:mx-12">
            {icons.map((icon, id) => (
              <a
                key={id}
                href={icon.image[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full shadow-md hover:scale-110 transition"
              >
                <img
                  src={icon.image[0].src}
                  alt="social icon"
                  className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
                />
              </a>
            ))}
          </div>
          <div className="downloadicons gap-2 lg:gap-4 flex lg:mx-12 size-12 lg:size-auto mr-14 lg:mr-0">
            <img src={googlePlayFill} className="hover:scale-110 transition " />
            <img src={applePlayFill} className="hover:scale-110 transition " />
          </div>
        </div>

        <div className="mt-4 lg:mt-8 text-center  text-[8px] md:text-[12px] lg:text-[18.77px] text-[var(--background-secondary)] leading-1.5">
          © GYWDE 2025, All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
