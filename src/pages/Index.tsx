import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import OrangeSection from "@/components/OrangeSection";
import CatalogSection from "@/components/CatalogSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Navigation onContactClick={() => setContactModalOpen(true)} />
      <HeroSection />
      <ProductSection />
      <OrangeSection />
      <CatalogSection />
      <LocationSection />
      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Index;
