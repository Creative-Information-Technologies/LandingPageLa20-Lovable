import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import la20Logo from "@/assets/la20-logo-new.png";
import ContactModal from "@/components/ContactModal";

interface NavigationProps {
  transparent?: boolean;
}

const Navigation = ({ transparent = false }: NavigationProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Navigation Links - Left */}
          <div className={`flex items-center gap-6 rounded-full px-8 py-3 ${transparent ? 'bg-transparent' : 'bg-white/95 shadow-lg'}`}>
            <Link to="/" className={`transition-colors font-medium ${transparent ? 'text-white hover:text-white/70' : 'text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))]'}`}>
              Inicio
            </Link>
            <Link to="/blog" className={`transition-colors font-medium ${transparent ? 'text-white hover:text-white/70' : 'text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))]'}`}>
              Blog
            </Link>
            <Link to="/catalogo" className={`transition-colors font-medium ${transparent ? 'text-white hover:text-white/70' : 'text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))]'}`}>
              Catálogo
            </Link>
            <Link to="/services" className={`transition-colors font-medium ${transparent ? 'text-white hover:text-white/70' : 'text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))]'}`}>
              Servicios
            </Link>
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={la20Logo} alt="La 20 Cervecería" className="h-24 w-auto drop-shadow-lg" />
          </div>

          {/* Contact Button - Right */}
          <Button 
            onClick={() => setIsContactModalOpen(true)}
            className={`font-bold rounded-full px-10 py-6 transition-all ${transparent ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30 shadow-lg' : 'bg-black hover:bg-black/80 text-white border-0 shadow-xl'}`}
          >
            CONTÁCTANOS
          </Button>
        </div>
      </nav>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </>
  );
};

export default Navigation;
