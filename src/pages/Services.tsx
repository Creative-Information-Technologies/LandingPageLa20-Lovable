import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import wavyPatternFooter from "@/assets/wavy-pattern-footer.png";

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-[#974119] overflow-x-hidden">
      <Navigation />
      <ServicesSection />
      <div 
        className="relative w-full -mt-32"
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
  );
};

export default Services;
