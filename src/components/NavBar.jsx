import { logo } from "../constants/images";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import ServicesCategory from "./ServicesCategory";
import HowGwydeWorks from "./HowGwydeWorks";

function NavBar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [howDropdownOpen, setHowDropdownOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-[48px] w-full lg:w-auto z-50 px-4 sm:px-6 md:px-8 lg:px-16 py-2 md:py-3 lg:py-5  rounded-full place-self-center border border-[var(--border-color)] bg-[var(--nav-bg/10)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-10 ">
          <div className="shrink-0">
            <img src={logo} alt="Brand-Logo" className="w-16 md:w-24 lg:w-32" />
          </div>

          <div className="hidden lg:flex items-center  md:flex-nowrap md:whitespace-nowrap lg:gap-20">
            <div className="flex text-sm lg:text-base gap-4 lg:gap-5">
              {/* Service Category Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServiceDropdownOpen(true)}
                onMouseLeave={() => setServiceDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95">
                  Service Category
                  <FaChevronDown className="mt-[2px]" />
                </div>
                {serviceDropdownOpen && (
                  <div className="absolute left-0 top-full bg-white rounded-xl shadow-lg transition-all duration-300 z-50">
                    <ServicesCategory />
                  </div>
                )}
              </div>

              {/* How gywde works Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHowDropdownOpen(true)}
                onMouseLeave={() => setHowDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95">
                  How gywde works
                  <FaChevronDown className="mt-[2px]" />
                </div>
                {howDropdownOpen && (
                  <div className="absolute left-0 top-full bg-white rounded-xl shadow-lg transition-all duration-300 z-50">
                    <HowGwydeWorks />
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95 "
              >
                About Us
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:gap-[20.86px]">
              <Link
                to="/login"
                className="font-medium hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95"
              >
                Login
              </Link>
              <Link
                to=" /signUp"
                className="font-medium hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95"
              >
                Sign Up
              </Link>

              <Link to="/PostAJob" className="font-normal">
                <button className="bg-(--primary) text-white px-4 py-2 rounded-[10px] ">
                  Post a Job
                </button>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-[var(--text-primary)] z-50"
          >
            {MenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>

          {/* mobile menu */}
          {MenuOpen && (
            <div className="fixed top-full mt-2 mr-2 right-0 bg-white text-[var(--text-secondary)] shadow-lg rounded-xl w-3xs flex flex-col items-center justify-center border border-[var(--border-color)]  z-50  md:hidden gap-4 p-4 font-normal">
              <Link to="/Service">Service Categories </Link>
              <Link to="/howItWorks">How Gywde works</Link>
              <Link to="/about">About Us</Link>
              <Link to="/login">Login</Link>
              <Link to="/signUp">SignUp</Link>
              <Link to="/PostAJob" className="font-normal">
                <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-[10px]">
                  Post A Job{" "}
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
