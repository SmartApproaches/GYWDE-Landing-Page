import React from "react";
import Fashion from "../constants/images/Fashion.svg";
import Services from "../constants/images/ItServices.svg";
import Agriculture from "../constants/images/Agriculture.svg";
import Entertainment from "../constants/images/Event.svg";
import Beauty from "../constants/images/Beauty.svg";
import Transport from "../constants/images/Transport.svg";
import RepairAndMaintenance from "../constants/images/Repair.svg";
import Creative from "../constants/images/Creative.svg";
import Consulting from "../constants/images/Consulting.svg";
import Education from "../constants/images/Education.svg";
import Cleaning from "../constants/images/Cleaning.svg";
import Photography from "../constants/images/Photography.svg";
import Pet from "../constants/images/Pet.svg";
import Manufacturing from "../constants/images/Manufacturing.svg";
import Property from "../constants/images/Property.svg";
import Food from "../constants/images/Food.svg";
import Art from "../constants/images/Art.svg";
import Medical from "../constants/images/Medical.svg";
import Post from "../constants/images/Post.svg";
import Thortle from "../constants/images/thortle.svg";
import Menu from "../constants/images/menu.svg";
import Search from "../constants/images/search_outline.svg";
import List from "../constants/images/list.svg";
import MapBase from "../constants/images/mapbase.svg";

const services = [
  { id: 0, image: Fashion, title: "Fashion", category: "apparel" },
  {
    id: 1,
    image: Services,
    title: "IT and Digital Services",
    category: "technology",
  },
  { id: 2, image: Agriculture, title: "Agriculture", category: "farming" },
  {
    id: 3,
    image: Entertainment,
    title: "Event and Entertainment",
    category: "events",
  },
  { id: 4, image: Beauty, title: "Beauty Services", category: "personal care" },
  {
    id: 5,
    image: Transport,
    title: "Transport and Logistics",
    category: "logistics",
  },
  {
    id: 6,
    image: RepairAndMaintenance,
    title: "Repair and Maintenance",
    category: "maintenance",
  },
  { id: 7, image: Creative, title: "Creative and Design", category: "design" },
  {
    id: 8,
    image: Consulting,
    title: "Consulting Services",
    category: "consulting",
  },
  {
    id: 9,
    image: Education,
    title: "Education Services",
    category: "education",
  },
  {
    id: 10,
    image: Cleaning,
    title: "Cleaning Services",
    category: "home care",
  },
  {
    id: 11,
    image: Photography,
    title: "Photography and Video",
    category: "media",
  },
  { id: 12, image: Pet, title: "Pet Services", category: "pet care" },
  {
    id: 13,
    image: Manufacturing,
    title: "Manufacturing Services",
    category: "industrial",
  },
  {
    id: 14,
    image: Property,
    title: "Property Services",
    category: "real estate",
  },
  { id: 15, image: Food, title: "Food Services", category: "catering" },
  { id: 16, image: Art, title: "Arts and Sports", category: "recreation" },
  { id: 17, image: Medical, title: "Medical Services", category: "healthcare" },
  { id: 18, image: Post, title: "Post a Project", category: "general" },
];

export default function ServicesCard() {
  return (
    <section className="container mx-auto relative">
      <div
        className="relative flex flex-col items-center text-center mt-5 py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${MapBase})` }}
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
            <img src={Thortle} alt="Filter" className="w-8 h-8" />
          </div>
        </div>

        <div className="border w-[40vw] border-[#F0F0F0] pl-5 pr-5 rounded-full flex items-center gap-2 py-2.5">
          <img className="w-8 h-8" src={Search} alt="Search icon" />
          <div className="flex-grow border-transparent px-3 py-2 rounded w-full focus:outline-none focus:ring-0 bg-transparent pointer-events-none select-none">
            Search Service Categories
          </div>
          <div className="bg-[#0096C1] text-white px-4 py-1 rounded select-none">
            Search
          </div>
        </div>

        <div className="flex gap-3 w-[3rem] h-[3rem]">
          <img className="w-full h-full" src={Menu} alt="menu" />
          <img className="w-full h-full" src={List} alt="list view" />
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
