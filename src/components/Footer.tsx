import la20Logo from "@/assets/la20-logo-new.png";
import beerBottleMetiche from "@/assets/beer-bottle-la-metiche.png";
import beerGlassClub from "@/assets/beer-glass-club.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <section
      className="w-full relative overflow-x-hidden overflow-y-visible"
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* --- FIX: Contenedor invisible que evita scroll lateral --- */}
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none" />

      {/* --- Imágenes del fondo --- */}
      <img
        src={beerBottleMetiche}
        alt="Botella La Metiche"
        className="absolute left-0 bottom-0 object-contain select-none pointer-events-none"
        style={{
          width: "auto",
          height: "100%",
          maxHeight: "450px",
          zIndex: 1,
          overflow: "hidden",
          clipPath: "inset(0 0 0 0)",
        }}
      />

      <img
        src={beerGlassClub}
        alt="Vaso de cerveza"
        className="absolute right-0 bottom-0 object-contain select-none pointer-events-none"
        style={{
          width: "auto",
          height: "100%",
          maxHeight: "480px",
          zIndex: 1,
          overflow: "hidden",
          clipPath: "inset(0 0 0 0)",
        }}
      />

      {/* --- Contenido del Footer --- */}
      <footer className="relative py-12 px-6 lg:px-12" style={{ zIndex: 5 }}>
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Block */}
          <div className="w-full lg:w-[30%] bg-black rounded-[25px] p-8 flex flex-col items-center text-center shadow-lg">
            <img src={la20Logo} alt="La 20" className="h-20 w-auto mb-6" />

            <p className="text-white text-sm leading-relaxed mb-6 font-['Montserrat']">
              Estaremos locos, pero amamos una buena cerveza artesanal, por lo que dedicamos nuestras vidas para
              servirte bebidas de clase mundial.
            </p>

            <button className="bg-[#111] hover:bg-[#222] text-white font-bold uppercase tracking-wider rounded-full px-8 py-3 mb-6 transition-all duration-300 hover:shadow-lg">
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

          {/* Right Block */}
          <div className="w-full lg:w-[65%] bg-black rounded-[25px] p-10 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">
                  Servicios
                </h4>
                <ul className="space-y-2">
                  {["Cervecería", "Tours", "Eventos", "Distribución"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">Cervezas</h4>
                <ul className="space-y-2">
                  {["La Jefa", "La Metiche", "Vienna Lager", "Weissbier"].map((beer) => (
                    <li key={beer}>
                      <a
                        href="#"
                        className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']"
                      >
                        {beer}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">
                  Productos
                </h4>
                <ul className="space-y-2">
                  {["Merchandising", "Gift Cards", "Club La 20"].map((prod) => (
                    <li key={prod}>
                      <a
                        href="#"
                        className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']"
                      >
                        {prod}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#FFD100] font-extrabold text-base uppercase mb-4 font-['Montserrat']">Legal</h4>
                <ul className="space-y-2">
                  {["Términos y Condiciones", "Política de Privacidad", "Aviso Legal"].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white text-sm hover:text-[#FFD100] transition-colors font-['Montserrat']"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
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
    </section>
  );
};

export default Footer;
