// ADDED
import { motion } from "framer-motion";
import { mapbase } from "../constants/images";

function AboutUsSection() {
  return (
    <>
      <motion.div
        className="relative w-full max-w-[1439px] h-auto md:h-[468px] mx-auto"
        style={{
          top: "13px",
          left: "1px",
          backgroundImage: `url(${mapbase})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f9f9f9",
        }}
        // ADDED - animate on scroll
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // only once, when 20% visible
      >
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* About Us label */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center justify-center text-black text-sm font-medium"
              style={{
                width: "128px",
                height: "42px",
                borderRadius: "22.93px",
                border: "1.15px solid #F0F0F0",
                paddingTop: "9px",
                paddingRight: "28px",
                paddingBottom: "9px",
                paddingLeft: "28px",
                background: "rgba(240, 240, 240, 0.3)",
                backdropFilter: "blur(8.139px)",
                position: "relative",
                marginTop: "180px",
              }}
            >
              <span
                className="relative z-10"
                style={{
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16.05px",
                  lineHeight: "150%",
                  color: "#001E27",
                  whiteSpace: "nowrap",
                }}
              >
                About Us
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-bold text-center mx-auto flex items-center justify-center
              text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem]
              leading-tight md:leading-[116%] text-[#0096C1] mt-8 md:mt-[50px] px-2"
            style={{
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 700,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are Redefining Service Connections
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
}

export default AboutUsSection;