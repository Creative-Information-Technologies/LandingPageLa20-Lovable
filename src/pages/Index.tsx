import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import OrangeSection from "@/components/OrangeSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
    </div>
  );
};

export default Index;
