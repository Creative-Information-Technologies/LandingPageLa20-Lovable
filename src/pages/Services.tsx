import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import wavyPatternFooter from "@/assets/wavy-pattern-footer.png";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-[#974119] overflow-x-hidden">
      <Navigation />
      <ServicesSection />
      <div className="relative w-full">
        {/* Wavy pattern with 35 degree rotation */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `url(${wavyPatternBrown})`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto 200px",
            backgroundPosition: "center",
            transform: "rotate(35deg)",
            transformOrigin: "center",
            width: "150%",
            height: "150%",
            left: "-25%",
            top: "-25%",
          }}
        />
        {/* Background with footer pattern */}
        <div 
          className="relative w-full"
          style={{
            backgroundImage: `url(${wavyPatternFooter})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
