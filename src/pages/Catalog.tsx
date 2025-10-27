import Navigation from "@/components/Navigation";
import ViennaSection from "@/components/catalog/ViennaSection";
import CatalogSection from "@/components/catalog/CatalogSection";
import LocationSection from "@/components/catalog/LocationSection";
import Footer from "@/components/Footer";

const Catalog = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <ViennaSection />
      <CatalogSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Catalog;
