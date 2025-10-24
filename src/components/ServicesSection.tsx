import { Button } from "@/components/ui/button";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import beerGlassTall from "@/assets/beer-glass-services-tall.png";
import beerBottleJefa from "@/assets/beer-bottle-services-jefa.png";
import beerGlassSnifter from "@/assets/beer-glass-services-snifter.png";
import servicesExperiencias from "@/assets/services-experiencias.png";
import servicesEventos from "@/assets/services-eventos.png";
import servicesReservaciones from "@/assets/services-reservaciones.png";
import servicesClub from "@/assets/services-club.png";

const ServicesSection = () => {
  const services = [
    {
      title: "EXPERIENCIAS CERVECERAS",
      description:
        "Te mostramos lo que no ves cuando servís una pinta. El olor, el proceso, la paciencia y el amor. Todo eso está en tu vaso. Vení a comprobarlo.",
      buttonText: "RESERVÁ",
      image: servicesExperiencias,
    },
    {
      title: "EVENTOS PRIVADOS",
      description:
        "Ten tus eventos en el mejor sitio de San Pedro Sula. Reserva nuestro Taproom para celebrar los mejores momentos.",
      buttonText: "COTIZÁ",
      image: servicesEventos,
    },
    {
      title: "RESERVACIONES",
      description:
        "Reservá tu lugar y los de tus aleros en el mejor Taproom de la ciudad. No corras el riesgo de quedarte sin tu lugar.",
      buttonText: "RESERVAR",
      image: servicesReservaciones,
    },
    {
      title: "CLUB LA20",
      description: "Obtené los mejores beneficios de formar parte del mejor Club de Honduras.",
      buttonText: "UNIRM",
      image: servicesClub,
    },
  ];

  return (
    <section className="w-full">
      {/* Header with wavy pattern */}
      <div
        className="relative w-full py-40 px-6 bg-[hsl(var(--blog-orange))] overflow-hidden"
        style={{
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1
                className="text-white uppercase font-oswald"
                style={{
                  fontWeight: 700,
                  fontSize: "148px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textShadow: "8px 8px 0px #3d1505, 12px 12px 20px rgba(0,0,0,0.5)",
                }}
              >
                SERVICIOS
              </h1>
            </div>

            {/* Assets - Glass, Bottle and Snifter */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{ width: "50%", zIndex: 10 }}
            >
              {/* Snifter Glass - Right */}
              <img
                src={beerGlassSnifter}
                alt="LA20 Beer Glass"
                className="absolute"
                style={{
                  right: "160%",
                  top: "0",
                  bottom: "0",
                  width: "45%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                  transform: "rotate(-7deg)",
                  transformOrigin: "bottom center",
                  zIndex: 3,
                }}
              />

              {/* Beer Bottle - Center */}
              <img
                src={beerBottleJefa}
                alt="La Jefa Beer Bottle"
                className="absolute"
                style={{
                  right: "110%",
                  top: "-55%",
                  bottom: "0",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))",
                  transform: "rotate(-7deg) scale(1.25)",
                  transformOrigin: "bottom center",
                  zIndex: 2,
                }}
              />

              {/* Tall Glass - Left side of assets */}
              <img
                src={beerGlassTall}
                alt="LA20 Tall Beer Glass"
                className="absolute"
                style={{
                  right: "-2%",
                  top: "-40px",
                  bottom: "-10px",
                  width: "60%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                  transform: "rotate(5deg)",
                  transformOrigin: "bottom center",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="w-full py-20" style={{ backgroundColor: "#974119" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-[30px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                  index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-4" : index === 2 ? "md:col-span-4" : "md:col-span-5"
                }`}
                style={{
                  height: index < 2 ? "380px" : "320px",
                }}
              >
                <div className={`flex flex-col md:flex-row h-full ${index >= 2 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text content */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-oswald font-bold text-black mb-4 uppercase text-center" style={{ fontSize: "42px", lineHeight: "110%", letterSpacing: "0%" }}>
                        {service.title}
                      </h3>
                      <p className="font-poppins font-normal text-gray-700 text-center" style={{ fontSize: "16px", lineHeight: "100%", letterSpacing: "0%" }}>{service.description}</p>
                    </div>
                    <Button className="mt-6 bg-white text-black hover:bg-gray-100 border-2 border-black rounded-full font-bold uppercase px-8 py-6 text-base w-fit">
                      {service.buttonText}
                    </Button>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto p-1">
                    <div
                      className="w-full h-full bg-gray-200 rounded-[25px]"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider Section with text */}
      <section className="relative w-full" style={{ overflow: 'hidden', marginTop: '-2px', zIndex: 1 }}>
        <svg 
          className="block w-full"
          style={{ 
            height: '300px',
            display: 'block',
            backgroundColor: '#000000'
          }}
          viewBox="0 0 1440 300" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="waveTextPath"
              d="M0,150 Q360,80 720,150 T1440,150 T2160,150 T2880,150"
              fill="none"
            />
          </defs>
          
          <rect width="100%" height="100%" fill="#000000"/>
          
          <text className="wave-text" fill="white" fontSize="48" fontWeight="900" letterSpacing="8">
            <textPath href="#waveTextPath" startOffset="0%">
              <animate attributeName="startOffset" from="0%" to="100%" dur="25s" repeatCount="indefinite" />
              COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE
            </textPath>
          </text>
        </svg>
      </section>

      {/* Taproom Promotion Section */}
      <div className="w-full py-32 relative" style={{ backgroundColor: "#974119" }}>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-tight">
            TENEMOS EL MEJOR TAPROOM
            <br />
            DE SAN PEDRO SULA
          </h2>
          <p className="text-2xl md:text-4xl text-white font-bold">Vení, disfrutá y viví la experiencia cervecera</p>
        </div>

        {/* Diagonal images placeholders */}
        <div className="absolute top-10 left-10 w-56 h-56 bg-white/10 rounded-3xl transform -rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-3xl transform rotate-12 hidden lg:block"></div>
      </div>

      {/* Beer Exploration Section */}
      <div className="w-full py-24" style={{ backgroundColor: "#FF9A01" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">¿CON GANAS DE EXPLORAR?</h2>
          <p className="text-3xl md:text-4xl text-white font-bold mb-16 uppercase">MIRÁ TODAS LAS OPCIONES</p>

          {/* Beer bottles row */}
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-32 h-64 bg-white/20 rounded-lg shadow-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Banner */}
      <div className="w-full py-16 relative" style={{ backgroundColor: "#974119" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
            CONOCÉ TU BARRIO · SABORES PARA TODOS
          </p>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
