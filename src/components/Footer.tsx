import la20Logo from "@/assets/la20-logo-new.png";
import beerBottleMetiche from "@/assets/beer-bottle-la-metiche.png";
import beerGlassClub from "@/assets/beer-glass-club.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 relative overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#974119', zIndex: 1 }}>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 items-start relative z-20">
        
        {/* Left Block - Logo and Contact */}
        <div className="w-full lg:w-[30%] bg-black rounded-[25px] p-8 flex flex-col items-center text-center">
          <img src={la20Logo} alt="La 20" className="h-20 w-auto mb-6" />
          
          <p className="text-white text-sm leading-relaxed mb-6 font-['Montserrat']">
            Estaremos locos, pero amamos una buena cerveza artesanal, por lo que dedicamos nuestras vidas para servirte bebidas de clase mundial.
          </p>
          
          <button 
            className="bg-[#111] hover:bg-[#222] text-white font-bold uppercase tracking-wider rounded-full px-8 py-3 mb-6 transition-all duration-300 hover:shadow-lg"
          >
            Contáctanos
          </button>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-black" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>

        {/* Right Block - Navigation Links */}
        <div className="w-full lg:w-[65%] bg-black rounded-[25px] p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            
            {/* SERVICIOS Column */}
            <div>
              <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">
                Servicios
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Cervecería
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Distribución
                  </a>
                </li>
              </ul>
            </div>

            {/* CERVEZAS Column */}
            <div>
              <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">
                Cervezas
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    La Jefa
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    La Metiche
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Vienna Lager
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Weissbier
                  </a>
                </li>
              </ul>
            </div>

            {/* PRODUCTOS Column */}
            <div>
              <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">
                Productos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Merchandising
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Club La 20
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL Column */}
            <div>
              <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']">
                    Aviso Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Text */}
          <div className="text-center text-gray-400 text-xs leading-relaxed pt-6 border-t border-white/10 font-['Montserrat']">
            <p>© 2025 Copyright EMSULA – Desarrollado por CloudPixels.</p>
            <p className="mt-1">ADVERTENCIA: EL ABUSO DE LA BEBIDA PERJUDICA LA SALUD. I.H.A.D.F.A.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;