import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import OrangeSection from "@/components/OrangeSection";
import OriginsSection from "@/components/OriginsSection";
import TaproomSection from "@/components/TaproomSection";
import VideoSection from "@/components/VideoSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
      <TaproomSection />
      <OriginsSection />
      <VideoSection />
      <JoinSection />
      <Footer brownBackground={true} />
    </div>
  );
};

export default Index;
