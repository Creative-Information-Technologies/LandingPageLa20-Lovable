import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import la20Logo from "@/assets/la20-logo-new.png";

interface NavigationProps {
  onContactClick?: () => void;
}

const Navigation = ({ onContactClick }: NavigationProps) => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Navigation Links - Left */}
        <div className="flex items-center gap-6 bg-white/95 rounded-full px-8 py-3 shadow-lg">
          <Link to="/" className="text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))] transition-colors font-medium">
            Inicio
          </Link>
          <Link to="/blog" className="text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))] transition-colors font-medium">
            Blog
          </Link>
          <button 
            onClick={() => {
              const catalogSection = document.getElementById('catalogo');
              if (catalogSection) {
                const offset = 100;
                const elementPosition = catalogSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))] transition-colors font-medium"
          >
            Catálogo
          </button>
          <Link to="/services" className="text-[hsl(var(--blog-brown))] hover:text-[hsl(var(--blog-orange))] transition-colors font-medium">
            Servicios
          </Link>
        </div>

        {/* Logo - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={la20Logo} alt="La 20 Cervecería" className="h-24 w-auto drop-shadow-lg" />
        </div>

        {/* Contact Button - Right */}
        <Button 
          onClick={onContactClick}
          className="bg-black hover:bg-black/80 text-white font-bold rounded-full px-10 py-6 border-0 shadow-xl transition-all"
        >
          CONTÁCTANOS
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
