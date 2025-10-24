import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-[#974119] overflow-x-hidden">
      <Navigation />
      <ServicesSection />
      <div 
        className="relative w-full"
        style={{
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto 300px",
          backgroundPosition: "center",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Services;
