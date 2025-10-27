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
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "#8B3A14" }}>
      <Navigation />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
      <TaproomSection />
      <OriginsSection />
      <VideoSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
