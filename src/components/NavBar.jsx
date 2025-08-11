import { logo } from "../constants/images";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

function NavBar() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="wrapper mx-auto fixed top-[48px]  z-50 px-4 sm:px-6 md:px-8 lg:px-16 py-2 md:py-3 lg:py-5 w-full rounded-full place-self-center border border-[var(--border-color)] bg-[var(--nav-bg/10)] backdrop-blur-md">

        <div className="flex md:flex items-center justify-between gap-2">
          <div className="shrink-0">
            <img src={logo} alt="Brand-Logo" />
          </div>

          <div className="hidden md:hidden lg:flex items-center  md:flex-nowrap md:whitespace-nowrap lg:gap-[92.99px]">
            <div className="flex text-sm lg:text-base gap-4 lg:gap-[26.07px] ">
              <Link to="/Service" className="flex   items-center gap-1 hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95">
                Service Category
                <FaChevronDown className=" mt-[1px]" />
              </Link>
              <Link to="/howItWorks" className="flex items-center gap-1 hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95">
                How gywde Works
                <FaChevronDown className=" mt-[1px]" />
              </Link>
              <Link to="/about" className="hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95 ">About Us</Link>
            </div>

            <div className="flex items-center gap-2 lg:gap-[20.86px]">
              <Link to="/login" className="font-medium hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95">
                Login
              </Link>
              <Link to=" /signUp" className="font-medium hover:text-[var(--primary)] transition delay-100 duration-300 ease-out hover:scale-95">
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
            className="lg:hidden  text-[var(--text-primary)] z-50"
          >
            {MenuOpen ? <MdClose sixe={32} /> : <MdMenu size={24} />}
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
