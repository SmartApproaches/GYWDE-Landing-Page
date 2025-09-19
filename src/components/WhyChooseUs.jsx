import {
  diverseServices,
  qualityAssurance,
  securePayment,
  supportAgent,
} from "../constants/images";

const cards = [
  {
    title: "Secure Payment",
    icon: [securePayment],
    description:
      "Our rigorous vetting process ensures you connect with reliable and skilled vendors",
  },
  {
    title: "24/7 Support",
    icon: [supportAgent],
    description:
      "We are available to provide assistance, and ensure a smooth experience",
  },
  {
    title: "Quality assurance",
    icon: [qualityAssurance],
    description:
      "Our rigorous vetting process ensures you connect with reliable and skilled vendors",
  },
  {
    title: "Diverse services",
    icon: [diverseServices],
    description:
      "Explore a wide range of services, both online and offline, all in one place",
  },
];



function WhyChooseUs() {
  return (
    <>
      <div className=" max-w-6xl mx-auto my-15 flex flex-col lg:flex-row justify-between gap-2 bg-[var(--background-secondary)]] ">
        <div className="mx-auto text-center lg:text-start mx-4 md:mx-8 gap-10 ">
          <h1 className="uppercase text-[22.69px] lg:text-[40px] leading-[1.5] text-[var(--text-other)] font-semibold text-center lg:text-start ">
            _why choose us_
          </h1>
          <p className="font-bold text-[31.19px] mt-[22px] lg:text-[55px] text-[var(--primary)] lg:leading-[1.5]">
            Elevate your 
            <br className="hidden  lg:block" /> Service Experience
          </p>
        </div>
        <div className="cards flex flex-col lg:flex-row mx-6 gap-4 lg:gap-0 ">
          {cards.map((card, key) => {
            const isLast = key === cards.length - 4;

            return (
              <div
                key={key}
                className={`relative border border-3 border-[var(--primary)] px-4 py-10 lg:py-20 mt-4 lg:px-4  rounded-3xl lg:rounded-[50px] 
                ${
                  isLast
                    ? "bg-[var(--lighter-bg)] text-[var(--text-secondary)] z-0"
                    : "bg-white z-5"
                }
                ${key !== 0 ? "lg:-ml-98" : ""}`}
              >
                <img src={card.icon} className="size-12 lg:size-16 mx-auto" />
                <div className="text-center justify-center place-self-center mt-2 lg:mt-5 ">
                  <h1 className="text-xl lg:text-[36.06px] mt-5 text-[var(--secondary)] font-bold whitespace-nowrap text-center">
                    {card.title}
                  </h1>
                  <p className="mt-5 text-lg lg:text-[30px] text-center text-justify lg:w-sm mx-auto lg:mx-0 font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
