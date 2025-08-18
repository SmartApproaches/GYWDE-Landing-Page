import { mapbase } from "../constants/images";
function AboutUsSection() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${mapbase})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* About Us label */}
          <div className="mb-8 flex justify-center">
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
              }}
            >
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background: `
                  radial-gradient(circle, transparent 1px, rgba(0,0,0,0.23) 1px),
                  radial-gradient(circle, transparent 1px, rgba(0,0,0,0.23) 1px)
                `,
                  backgroundSize: "4px 4px",
                  backgroundPosition: "0 0, 2px 2px",
                  borderRadius: "inherit",
                }}
              />
              <span
                className="relative z-10"
                style={{
                  width: "72px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Work Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16.05px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#001E27",
                  opacity: 1,
                  whiteSpace: "nowrap",
                }}
              >
                About Us
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="font-bold text-center"
            style={{
              width: "752.32px",
              height: "118px",
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 700,
              fontSize: "50.58px",
              lineHeight: "116%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#0096C1",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            We are Redefining Service Connections
          </h1>
        </div>
      </div>
    </>
  );
}
export default AboutUsSection;
