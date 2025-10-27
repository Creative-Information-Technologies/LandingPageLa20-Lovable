import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import OrangeSection from "@/components/OrangeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
      <Footer />
    </div>
  );
};

export default Index;
