import la20Logo from "@/assets/la20-logo-new.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="w-full bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social */}
          

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
    </footer>;
};
export default Footer;