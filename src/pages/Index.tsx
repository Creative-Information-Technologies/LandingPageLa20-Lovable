import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import OrangeSection from "@/components/OrangeSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
      <BlogSection />
    </div>
  );
};

export default Index;
