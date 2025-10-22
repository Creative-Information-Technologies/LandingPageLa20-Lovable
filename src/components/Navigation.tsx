import { Button } from "@/components/ui/button";
import la20Logo from "@/assets/la20-logo-new.png";

const Navigation = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Navigation Links - Left */}
        <div className="flex items-center gap-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
            Inicio
          </a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">
            Blog
          </a>
          <a href="#catalogo" className="text-foreground hover:text-primary transition-colors font-medium">
            Catálogo
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">
            Servicios
          </a>
        </div>

        {/* Logo - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={la20Logo} alt="La 20 Cervecería" className="h-24 w-auto" />
        </div>

        {/* Contact Button - Right */}
        <Button className="bg-secondary/20 text-foreground hover:bg-secondary/30 font-medium rounded-full px-8 border-0">
          CONTÁCTANOS
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
