import la20Logo from "@/assets/la20-logo-new.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo, Description and Social - Left Column */}
          <div className="lg:col-span-4">
            <img src={la20Logo} alt="La 20" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 leading-relaxed mb-6">
              Estaremos locos, pero amamos una buena cerveza artesanal, por lo que dedicamos nuestras vidas para servirte bebidas de clase mundial.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Two Rounded Blocks - Right Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Servicios Block */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-white font-bold uppercase mb-4 text-lg">Servicios</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                    Cervecería
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                    Distribución
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto Block */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <Button 
                className="bg-[hsl(var(--blog-yellow))] hover:bg-[hsl(var(--blog-yellow))]/90 text-black font-bold uppercase mb-4 w-full"
              >
                Contacto
              </Button>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  +504 1441-5579
                </li>
                <li className="text-gray-400">
                  info@la20.hn
                </li>
                <li className="text-gray-400">
                  Tegucigalpa, Honduras
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © 2025 La 20 Cervecería Artesanal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;