import la20Logo from "@/assets/la20-logo-new.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12 px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social */}
          <div className="lg:col-span-1">
            <img src={la20Logo} alt="La 20" className="h-16 w-auto mb-4" />
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

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold uppercase mb-4 text-lg">Servicios</h3>
            <ul className="space-y-2">
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

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold uppercase mb-4 text-lg">Contacto</h3>
            <ul className="space-y-2">
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

          {/* Promociones */}
          <div>
            <h3 className="text-white font-bold uppercase mb-4 text-lg">Promociones</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                  Club La20
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                  Ofertas especiales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold uppercase mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--blog-yellow))] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © 2025 La 20 Cervecería Artesanal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;