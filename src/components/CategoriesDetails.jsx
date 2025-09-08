import Clip from "../constants/images/ClipPathGroup.svg";
import Web from "../constants/images/webDev.svg";
import ItSupport from "../constants/images/ItSupport.svg";
import CloudServices from "../constants/images/cloudServices.svg";
import DataAnalysis from "../constants/images/DataAnalysis.svg";
import Frame from "../constants/images/Frame.svg";
import ellipse from "../constants/images/Ellipse9.svg";
import ellipse_Top from "../constants/images/Ellipse_top.svg";
import clock from "../constants/images/clock.svg";
import talent from "../constants/images/global_talent.svg";
import communication from "../constants/images/seamless_communication.svg";
import secure from "../constants/images/secure_payment.svg";
import professional from "../constants/images/vetted_professional.svg";
import ada from "../constants/images/ada.svg";

import andre from "../constants/images/andre.svg";
import emeka from "../constants/images/emeka.png";
import star from "../constants/images/Star 2.svg";
import uchechi from "../constants/images/uchechi.svg";
import location from "../constants/images/location.png";
import naira from "../constants/images/naira.svg";

const services = [
  {
    id: 0,
    image: Web,
    title: "Web & Mobile Development",
    description: "Build responsive websites,apps & platforms",
  },
  {
    id: 1,
    image: ItSupport,
    title: "IT Support & Maintenance",
    description: "Reliable tech support for businesses & individuals",
  },
  {
    id: 2,
    image: CloudServices,
    title: "Cloud Services & DevOps",
    description: "Scalable cloud infrastructure & automation",
  },
  {
    id: 3,
    image: DataAnalysis,
    title: "Data Analysis & AI Solutions",
    description: "Data-driven decisions powered by smart insights",
  },
];
const digitalReasons = [
  {
    id: 4,
    image: talent,
    title: "Global + Local Talent",
    description:
      "Work with experts from around the world or find professionals near you",
  },
  {
    id: 1,
    image: clock,
    title: "Fast Matching",
    description: "Post a job and get applicants within hours.",
  },
  {
    id: 2,
    image: secure,
    title: "Secure Payments",
    description: "Built-in chat, video calls, and task tracking.",
  },
];

const digitalReasons2 = [
  {
    id: 0,
    image: professional,
    title: " Vetted Professionals",
    description: "Each expert is verified and rated by past clients.",
  },
  {
    id: 1,
    image: communication,
    title: "Seamless Communication",
    description: "Built-in chat, video calls, and task tracking.",
  },
];

const experts = [
  {
    id: 0,
    image: ada,
    title: " Adaeze Njoku",
    stack: "Data Analyst",
    rating: "5",
    no_of_job: "356",
    city: "Port Hacourt, Nigeria",
    amount: 5000,
    description:
      "Turning messy data into business decisions using Python & Power BI",
  },
  {
    id: 1,
    image: andre,
    title: " Andre Kowalski",
    stack: "DevOps & Cloud Engineer",
    rating: "5",
    no_of_job: "356",
    city: "Berlin, Germany",
    amount: 5000,
    description: "Cloud architecture & CI/CD pipelines done right",
  },
  {
    id: 1,
    image: uchechi,
    title: " Uchechi Onwudiwe",
    stack: "Cybersecurity Analyst",
    rating: "5",
    no_of_job: "54",
    city: "Abuja, Nigeria",
    amount: 5000,
    description: "Helping startups stay compliant & secure from cyber threats",
  },
  {
    id: 1,
    image: emeka,
    title: " Emeka Okoro",
    stack: "Full-Stack Developer",
    rating: "5",
    no_of_job: "356",
    city: "Lagos, Nigeria",
    amount: 5000,
    description: "I build fast, scalable web platforms with React and Node.js",
  },
];
const handleClick = (label) => {
  alert(`You clicked ${label}`);
};
export default function CategoriesDetails() {
  return (
    <section>
      <section className="px-5 md:px-40">
        <div className="mt-[2.7rem] font-bold text-black">
          Gywde &gt; Category &gt; IT &amp; Digital Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:hidden block">
            <img className="w-full h-full" src={Clip} alt="menu" />
          </div>
          <div className="w-12/12">
            <p className="text-[2rem] md:text-[4.8rem] font-bold text-[#0096c1] mt-10">
              Hire Expert
              <br />
              IT &amp; Digital Pros <br /> for any job
            </p>
          </div>
          <div className="md:block hidden">
            <img className="w-full h-full" src={Clip} alt="menu" />
          </div>
        </div>
      </section>

      <section className="px-5 md:px-40 my-5">
        <div className="text-md text-center mt-5 font-bold">
          What we offer in IT &amp; Digital Services
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="mt-5 grid w-full grid-cols-2 gap-5 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl bg-[#E6F5F9] px-2 py-5 text-center flex flex-col justify-center"
              >
                <img
                  src={service.image}
                  className="h-40 h-28"
                  alt={service.title}
                />
                <h2 className="font-medium text-[#0096c1]">{service.title}</h2>
                <p className="text-[10px] font-[500]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden block">
          <div className="mt-5 grid w-full grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl bg-[#E6F5F9] px-2 pt-2 pb-4 text-center"
              >
                <img src={service.image} alt={service.title} />
                <h2 className="font-medium text-[#0096c1]">{service.title}</h2>
                <p className="text-[10px] font-[500]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex  mt-10  py-20 px-5 md:px-36 md:py-32 z-999  bg-[#E6F5F9]">
        <img
          src={ellipse}
          className="h-40 h-28 absolute bottom-0 left-0"
          alt={Frame}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Left side (Title) - takes 6 cols on md+ screens */}
          <div className="md:col-span-6 font-bold text-[2.325rem] text-[#0096C1] mt-2">
            Why Choose Us for <br /> IT & Digital Services
          </div>

          {/* Right side (Cards) - takes 6 cols on md+ screens */}
          <div className="md:col-span-6 flex gap-5">
            <div className="flex flex-col gap-3">
              {digitalReasons.map((service) => (
                <div
                  key={service.id}
                  className="max-w-[256px] rounded-xl bg-white px-2 py-5 text-center flex flex-col justify-center"
                >
                  <img
                    src={service.image}
                    className="h-12 mx-auto"
                    alt={service.title}
                  />
                  <h2 className="font-medium text-[14px] text-[#0096C1] mt-3">
                    {service.title}
                  </h2>
                  <p className="text-[10px] font-medium mt-1">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-20">
              {digitalReasons2.map((service) => (
                <div
                  key={service.id}
                  className="max-w-[256px] rounded-xl bg-white px-2 py-5 text-center flex flex-col justify-center"
                >
                  <img
                    src={service.image}
                    className="h-12 mx-auto"
                    alt={service.title}
                  />
                  <h2 className="font-medium text-[14px] text-[#0096C1] mt-3">
                    {service.title}
                  </h2>
                  <p className="text-[10px] font-medium mt-1">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-36 md:py-20 relative bg-[#fff]">
        <img
          src={ellipse_Top}
          className="h-40 h-40 z-10 absolute  -top-10 right-0"
          alt={ellipse}
        />

        <div className="text-center font-bold text-[2.325rem] text-[#0096C1] mt-2">
          Recommended IT Experts
        </div>
        <div className="">
          <div className="mt-5 grid w-full grid-cols-2 gap-5 px-5 md:px-0 md:grid-cols-4">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="rounded-xl bg-[#000000]/3 px-4 py-3 flex gap-2 flex-col justify-center"
              >
                <div className="flex gap-2">
                  <img
                    src={expert.image}
                    className="h-15 h-15 rounded-full"
                    alt={expert.title}
                  />
                  <div>
                    <h2 className="font-medium text-[#000] text-[12px] md:text-[16px]">
                      {expert.title}
                    </h2>
                    <p className="text-[10px] text-[#AEAEAE] font-[300]">
                      {expert.stack}
                    </p>
                  </div>
                </div>
                <p className="md:text-[14px] text-[10px] font-[300]">
                  {expert.description}
                </p>
                <div className="flex justify-between gap-5 mb-3 mt-2">
                  <div className="flex gap-1 text-[12px] font-[400]">
                    <img src={star} className="h-4 h-4" alt={expert.title} />
                    <p>{expert.rating}</p>
                    <p>{expert.no_of_job}</p>
                  </div>
                  <div className="flex gap-1 text-[12px] font-[400]">
                    <img
                      src={location}
                      className="h-4 h-4"
                      alt={expert.title}
                    />
                    <p className="text-[10px] md:text-[14px]">{expert.city}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 mb-3">
                  <button
                    className="px-2 w-1/2 h-9 py-2.5 bg-[#0096C1] text-white text-[12px] rounded-lg hover:bg-[#001E27] transition"
                    onClick={() => handleClick("hire me")}
                  >
                    Hire me
                  </button>

                  <button
                    className="px-2 md:py-2 h-9 w-1/2 bg-[#002D3A] text-white text-[10px] md:text-[12px] rounded-lg hover:bg-[#0096C1] transition"
                    onClick={() => handleClick("perhour")}
                  >
                    <div className="flex gap-1">
                      <div className="bg-[#E6F5F9] px-1 h-fit py-0.5 mt-1.5 md:mt-0 rounded-md">
                        <img
                          src={naira}
                          className="h-3 w-3  md:mt-0.5"
                          alt={expert.title}
                        />
                      </div>
                      <p className="mt-0.5">{expert.amount} per hour</p>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ready to hire */}
        <div className="bg-[#E6F5F9] rounded-lg py-3 px-4 mt-10 mx-5 md:mx-0">
          <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            <div className="md:ml-17">
              <p className="text-[20px]">Ready to hire?</p>
              <h2 className="text-[#0096C1] text-[50px] text md:[60px] font-[600]">
                Post Your Job Now!
              </h2>
            </div>
            <button
              className="px-2 w-full h-fit py-5.5 bg-[#0096C1] text-white text-[22px] md:mt-15 rounded-lg hover:bg-[#001E27] transition"
              onClick={() => handleClick("Post a Job")}
            >
              Post a Job
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
