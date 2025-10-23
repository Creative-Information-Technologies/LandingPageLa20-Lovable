import la20Logo from "@/assets/la20-logo-new.png";
import beerBottleMetiche from "@/assets/beer-bottle-la-metiche.png";
import beerGlassClub from "@/assets/beer-glass-club.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative w-full bg-[#8B3A14] py-8 px-4 md:px-8">
      <footer className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and Contact Section */}
          <div className="md:col-span-1 bg-black text-white py-12 px-8 md:px-12 rounded-[40px]">
            <div className="flex flex-col items-start">
              <img src={la20Logo} alt="LA20 Logo" className="w-32 mb-6" />
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-8">
                Estuvimos locos, pero éramos una buena cerveza en Honduras, por lo que estudiamos nuestras raíces para
                servirte con nuestra bebida.
              </p>
              <div>
                <p className="font-bold mb-4 text-sm">CONTACTANOS</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Copyright Section */}
          <div className="md:col-span-2 bg-black text-white py-12 px-8 md:px-12 rounded-[40px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Servicios */}
              <div>
                <h3
                  className="font-black text-sm mb-4"
                  style={{ fontFamily: '"Deacon Condensed Test", sans-serif', color: "#FFD801" }}
                >
                  SERVICIOS
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Eventos privados
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Experiencias cerveceras
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Reservaciones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Club LA20
                    </a>
                  </li>
                </ul>
              </div>

              {/* Cervezas */}
              <div>
                <h3
                  className="font-black text-sm mb-4"
                  style={{ fontFamily: '"Deacon Condensed Test", sans-serif', color: "#FFD801" }}
                >
                  CERVEZAS
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      La Jefa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      El Chele
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Aleros
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      La Flaka
                    </a>
                  </li>
                </ul>
              </div>

              {/* Productos */}
              <div>
                <h3
                  className="font-black text-sm mb-4"
                  style={{ fontFamily: '"Deacon Condensed Test", sans-serif', color: "#FFD801" }}
                >
                  PRODUCTOS
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Mano Taproom
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Merchandise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Ediciones especiales
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3
                  className="font-black text-sm mb-4"
                  style={{ fontFamily: '"Deacon Condensed Test", sans-serif', color: "#FFD801" }}
                >
                  LEGAL
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Términos de uso
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-xs text-gray-500">
                © 2025 Copyright EMUCA - Desarrollado por Creative Information Technologies ∞
                <br />
                ADVERTENCIA: EL ABUSO EN EL CONSUMO DE ESTE PRODUCTO ES NOCIVO PARA LA SALUD. LEY 42.12
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
