import { useState } from "react";
import Navigation from "@/components/Navigation";
import CatalogSection from "@/components/CatalogSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Catalog = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Navigation onContactClick={() => setContactModalOpen(true)} />
      <CatalogSection />
      <LocationSection />
      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Catalog;
