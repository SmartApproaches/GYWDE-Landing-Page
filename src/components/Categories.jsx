import {
  fashionIcon,
  itDigitalIcon,
  agricultureIcon,
  repairIcon,
  creativeIcon,
  allServicesIcon,
} from "../constants/images";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "fashion",
    title: "Fashion",
    icon: fashionIcon,
  },
  {
    id: "it-digital",
    title: "IT & Digital Services",
    icon: itDigitalIcon,
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: agricultureIcon,
  },
  {
    id: "repair",
    title: "Repair and Maintenance",
    icon: repairIcon,
  },
  {
    id: "creative",
    title: "Creative and Design",
    icon: creativeIcon,
  },
];

const handleCategoryClick = (category) => {
  console.log("Selected category:", category);
};

function Categories() {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto my-12 flex flex-col lg:flex-row justify-between gap-8 px-4 md:px-8">
        <div className="text-center md:text-start">
          <h1 className="uppercase text-[20px] md:text-[28px] lg:text-[40px] leading-[1.5] text-[#CACACA] font-semibold">
            _categories_
          </h1>
          <h1 className="font-bold text-[28px] md:text-[36px] lg:text-[55px] text-[var(--primary)] mt-4 lg:leading-[1.5]">
            Enjoy a Diverse <br className="md:hidden" />
            <br className="hidden lg:block" /> Selection of Vendors
          </h1>
          <p className="text-[14px] md:text-[18px] lg:text-2xl leading-[1.8] font-normal max-w-xl mt-3 text-justify md:text-left">
            Your all-in-one platform to discover reliable vendors at your
            convenience that cater to your every need whether online or
            physically.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 md:px-8 mb-12">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white transition-colors duration-200 border-2 border-[var(--background-other)] cursor-pointer w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]"
          >
            <img
              src={category.icon}
              alt={category.title}
              className="size-10 md:size-12 lg:size-16"
            />
            <h1 className="font-semibold text-[13px] md:text-[18px] lg:text-[24px] mt-4 text-[var(--primary)]/60 leading-[1.5]">
              {category.title}
            </h1>
          </div>
        ))}

        {/* "All Services" Card */}
        <Link
          to="/services-category"
          className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[#CCEAF2] hover:bg-[var(--light-primary)] transition-colors duration-200 border-2 border-[var(--primary)] w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]"
        >
          <div className="mb-3">
            <img
              src={allServicesIcon}
              alt="All Services"
              className="size-10 md:size-12 lg:size-16"
            />
          </div>
          <h3 className="font-semibold text-[13px] md:text-[18px] lg:text-[24px] text-[var(--primary)]/60 leading-[1.5]">
            All Services
          </h3>
        </Link>
      </div>
    </>
  );
}

export default Categories;
