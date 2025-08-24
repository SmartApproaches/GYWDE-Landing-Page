import Clip from "../constants/images/ClipPathGroup.svg";
import Web from "../constants/images/webDev.svg";
import ItSupport from "../constants/images/ItSupport.svg";
import CloudServices from "../constants/images/cloudServices.svg";
import DataAnalysis from "../constants/images/DataAnalysis.svg";

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
  }
];

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

        {/* <section className="bg-[E6F5F9] px-5 py-3">
          <div className="text-[18px] font-bold text-[#0096c1] mb-10 md:mb-0">
            Why choose us for <br /> IT &amp; Digital Services
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2">
              <div className="h-24 w-32 rounded-lg bg-white px-2 py-3 text-center hover:border-blue-800 hover:bg-blue-50">
                <h2>Global + Local Talent</h2>
                <p>
                  Work with experts from around the world or find professionals
                  near you
                </p>
              </div>
            </div>
          </div>
            <div className="hidden md:block">
          <div className="mt-5 grid w-full grid-cols-2 gap-5 md:grid-cols-4">
            {digitalReasons.map((service) => (
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

        </section> */}

  <section
        className="relative flex flex-col items-center text-center mt-5 py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${MapBase})` }}
      >
        <div className="rounded-full border-[#F0F0F0] bg-[#F0F0F0]/30 font-semibold text-black px-5 py-2.5">
          Service Categories
        </div>
        <div className="font-bold text-[2.625rem] text-[#0096C1] mt-2">
          Discover Vendors for Virtually <br /> Anything you need
        </div>
      </section>
      </section>
    </section>
  );
}
