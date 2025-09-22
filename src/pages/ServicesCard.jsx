import {
  fashionIcon,
  itDigitalIcon,
  agricultureIcon,
  eventIcon,
  beautyIcon,
  transportIcon,
  repairIcon,
  categoryCreativeIcon,
  consultingIcon,
  educationIcon,
  cleaningIcon,
  photographyIcon,
  petIcon,
  manufacturingIcon,
  propertyIcon,
  foodIcon,
  artIcon,
  medicalIcon,
  postIcon,
  thortleIcon,
  menuIcon,
  searchIcon,
  listIcon,
  mapBaseIcon,
} from "../constants/images";

const services = [
  { id: 0, image: fashionIcon, title: "Fashion", category: "apparel" },
  {
    id: 1,
    image: itDigitalIcon,
    title: "IT and Digital Services",
    category: "technology",
  },
  { id: 2, image: agricultureIcon, title: "Agriculture", category: "farming" },
  {
    id: 3,
    image: eventIcon,
    title: "Event and Entertainment",
    category: "events",
  },
  {
    id: 4,
    image: beautyIcon,
    title: "Beauty Services",
    category: "personal care",
  },
  {
    id: 5,
    image: transportIcon,
    title: "Transport and Logistics",
    category: "logistics",
  },
  {
    id: 6,
    image: repairIcon,
    title: "Repair and Maintenance",
    category: "maintenance",
  },
  {
    id: 7,
    image: categoryCreativeIcon,
    title: "Creative and Design",
    category: "design",
  },
  {
    id: 8,
    image: consultingIcon,
    title: "Consulting Services",
    category: "consulting",
  },
  {
    id: 9,
    image: educationIcon,
    title: "Education Services",
    category: "education",
  },
  {
    id: 10,
    image: cleaningIcon,
    title: "Cleaning Services",
    category: "home care",
  },
  {
    id: 11,
    image: photographyIcon,
    title: "Photography and Video",
    category: "media",
  },
  { id: 12, image: petIcon, title: "Pet Services", category: "pet care" },
  {
    id: 13,
    image: manufacturingIcon,
    title: "Manufacturing Services",
    category: "industrial",
  },
  {
    id: 14,
    image: propertyIcon,
    title: "Property Services",
    category: "real estate",
  },
  { id: 15, image: foodIcon, title: "Food Services", category: "catering" },
  { id: 16, image: artIcon, title: "Arts and Sports", category: "recreation" },
  {
    id: 17,
    image: medicalIcon,
    title: "Medical Services",
    category: "healthcare",
  },
  { id: 18, image: postIcon, title: "Post a Project", category: "general" },
];

export default function ServicesCard() {
  return (
    <section className="container mx-auto relative">
      <div
        className="relative flex flex-col items-center text-center mt-5 py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${mapBaseIcon})` }}
      >
        <div className="rounded-full border-[#F0F0F0] bg-[#F0F0F0]/30 font-semibold text-black px-5 py-2.5">
          Service Categories
        </div>
        <div className="font-bold text-[2.625rem] text-[#0096C1] mt-2">
          Discover Vendors for Virtually <br /> Anything you need
        </div>
      </div>

      <div className="flex justify-between mx-4 mt-12 items-center">
        <div className="relative">
          <div className="w-8 h-8">
            <img src={thortleIcon} alt="Filter" className="w-8 h-8" />
          </div>
        </div>

        <div className="border w-[40vw] border-[#F0F0F0] pl-5 pr-5 rounded-full flex items-center gap-2 py-2.5">
          <img className="w-8 h-8" src={searchIcon} alt="Search icon" />
          <div className="flex-grow border-transparent px-3 py-2 rounded w-full focus:outline-none focus:ring-0 bg-transparent pointer-events-none select-none">
            Search Service Categories
          </div>
          <div className="bg-[#0096C1] text-white px-4 py-1 rounded select-none">
            Search
          </div>
        </div>

        <div className="flex gap-3 w-[3rem] h-[3rem]">
          <img className="w-full h-full" src={menuIcon} alt="menu" />
          <img className="w-full h-full" src={listIcon} alt="list view" />
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-10 pt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center rounded-3xl border border-[var(--card-border)] hover:border-[var(--primary-light)] bg-[var(--color-card)] hover:bg-[var(--color-background-two)] p-6 md:p-8 transition-all"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-12 h-12 md:w-16 md:h-16 object-contain mb-4"
            />
            <h3 className="text-center font-medium text-[var(--primary-light)] text-base md:text-lg leading-snug break-words mt-2">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
