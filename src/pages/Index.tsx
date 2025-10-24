import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import OrangeSection from "@/components/OrangeSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
