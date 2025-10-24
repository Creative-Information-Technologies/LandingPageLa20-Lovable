import { Button } from "@/components/ui/button";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import beerGlassTall from "@/assets/beer-glass-services-tall.png";
import beerBottleJefa from "@/assets/beer-bottle-services-jefa.png";
import beerGlassSnifter from "@/assets/beer-glass-services-snifter.png";
import servicesExperiencias from "@/assets/services-experiencias.png";
import servicesEventos from "@/assets/services-eventos.png";
import servicesReservaciones from "@/assets/services-reservaciones.png";
import servicesClub from "@/assets/services-club.png";
import taproomImage1 from "@/assets/taproom-image-1.png";
import taproomImage2 from "@/assets/taproom-image-2.png";
import beerBottleElChele from "@/assets/beer-bottle-el-chele.png";
import beerBottleWeiss from "@/assets/beer-bottle-weiss.png";
import beerBottleLaJefaExplore from "@/assets/beer-bottle-la-jefa-explore.png";
import beerBottleLaFlaka from "@/assets/beer-bottle-la-flaka.png";
import beerBottleAlerosExplore from "@/assets/beer-bottle-aleros-explore.png";
import characterPurpleExplore from "@/assets/character-purple-explore.png";

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
    <section className="w-full overflow-x-hidden">
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
                  index === 0
                    ? "md:col-span-5"
                    : index === 1
                      ? "md:col-span-4"
                      : index === 2
                        ? "md:col-span-4"
                        : "md:col-span-5"
                }`}
                style={{
                  height: index < 2 ? "380px" : "320px",
                }}
              >
                <div className={`flex flex-col md:flex-row h-full ${index >= 2 ? "md:flex-row-reverse" : ""}`}>
                  {/* Text content */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3
                        className="font-oswald font-bold text-black mb-4 uppercase text-center"
                        style={{ fontSize: "42px", lineHeight: "110%", letterSpacing: "0%" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="font-poppins font-normal text-gray-700 text-center"
                        style={{ fontSize: "16px", lineHeight: "100%", letterSpacing: "0%" }}
                      >
                        {service.description}
                      </p>
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
      <section className="relative w-full" style={{ overflow: "hidden", marginTop: "-2px", zIndex: 1 }}>
        <svg
          className="block w-full"
          style={{
            height: "300px",
            display: "block",
          }}
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <path id="waveTextPath" d="M0,150 Q360,80 720,150 T1440,150 T2160,150 T2880,150" fill="none" />
          </defs>

          {/* Brown background covering from top to middle of black band */}
          <rect x="0" y="0" width="1440" height="150" fill="#974119" />

          {/* Black wave band with curves on top and bottom */}
          <path d="M0,100 Q360,30 720,100 T1440,100 L1440,200 Q1080,270 720,200 T0,200 Z" fill="hsl(0, 0%, 0%)" />

          {/* White text following the wave curve - repeated multiple times */}
          <text
            style={{
              fontFamily: "Oswald",
              fontSize: "76px",
              fontWeight: 900,
              letterSpacing: "8px",
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              strokeWidth: "2px",
              textTransform: "uppercase",
            }}
            dy="25"
          >
            <textPath href="#waveTextPath" startOffset="0">
              COMPARTI,DISFRUTA,RELAJATE,COMPARTI,DISFRUTA,RELAJATE,COMPARTI,DISFRUTA,RELAJATE,
              COMPARTI,DISFRUTA,RELAJATE
            </textPath>
          </text>
        </svg>
      </section>

      {/* Taproom Promotion Section */}
      <div className="w-full py-48 relative" style={{ backgroundColor: "#974119" }}>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-white uppercase leading-tight font-oswald">
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(60px, 8vw, 120px)",
                textShadow: "12px 12px 0px #3d1505, 18px 18px 30px rgba(0,0,0,0.7)",
                lineHeight: "1",
              }}
            >
              TENEMOS EL MEJOR
            </div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(100px, 15vw, 240px)",
                textShadow: "12px 12px 0px #3d1505, 18px 18px 30px rgba(0,0,0,0.7)",
                lineHeight: "0.95",
                marginTop: "-10px",
              }}
            >
              TAPROOM
            </div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "clamp(60px, 8vw, 120px)",
                textShadow: "12px 12px 0px #3d1505, 18px 18px 30px rgba(0,0,0,0.7)",
                lineHeight: "1",
                marginTop: "-10px",
              }}
            >
              DE SAN PEDRO SULA
            </div>
          </h2>
        </div>

        {/* Diagonal images */}
        <div
          className="absolute -top-20 -left-20 rounded-2xl transform -rotate-12 hidden lg:block overflow-hidden shadow-2xl border-4 border-white"
          style={{
            width: "420px",
            height: "310px",
            backgroundImage: `url(${taproomImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="absolute bottom-55 -right-20 rounded-2xl transform -rotate-12 hidden lg:block overflow-hidden shadow-2xl border-4 border-white"
          style={{
            width: "420px",
            height: "310px",
            backgroundImage: `url(${taproomImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Hours Band */}
      <div className="w-full py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <p
            className="text-white text-center font-oswald font-bold uppercase"
            style={{ fontSize: "32px", letterSpacing: "2px" }}
          >
            De Jueves y Viernes 4:00 PM a 12:00 PM
          </p>
        </div>
      </div>

      {/* Beer Exploration Section */}
      <div className="w-full relative pb-0" style={{ minHeight: "600px", overflow: "hidden" }}>
        {/* SVG Background with Wave - Behind content */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Dark Brown Background - Same as page background */}
          <rect x="0" y="0" width="1440" height="300" fill="#974119" />

          {/* Wavy Division Line with more pronounced curves */}
          <path d="M0,300 Q360,260 720,300 T1440,300 L1440,600 L0,600 Z" fill="#FFA500" />
        </svg>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center py-24">
          {/* Character on the left */}
          <img
            src={characterPurpleExplore}
            alt="LA20 Character"
            className="absolute -left-80 hidden lg:block z-0"
            style={{
              width: "750px",
              height: "auto",
              transform: "rotate(10deg)",
              filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
              top: "5%",
              marginTop: "-170px",
            }}
          />

          <h2
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase relative z-10"
            style={{
              textShadow: "8px 8px 0px #3d1505, 12px 12px 20px rgba(0,0,0,0.5)",
            }}
          >
            ¿CON GANAS DE EXPLORAR?
          </h2>
          <p
            className="text-3xl md:text-4xl text-white font-bold mb-16 uppercase relative z-10"
            style={{
              textShadow: "8px 8px 0px #3d1505, 12px 12px 20px rgba(0,0,0,0.5)",
            }}
          >
            MIRÁ TODAS LAS OPCIONES
          </p>

          <div className="w-full flex justify-center items-end overflow-hidden mt-24 relative z-10">
            <img src={beerBottleAlerosExplore} alt="LA20 Aleros" className="h-[670px] w-auto -mr-[430px]" />
            <img src={beerBottleLaFlaka} alt="LA20 La Flaka" className="h-[630px] w-auto -mr-[430px]" />
            <img src={beerBottleLaJefaExplore} alt="LA20 La Jefa" className="h-[700px] w-auto -mr-[430px]" />
            <img src={beerBottleWeiss} alt="LA20 Weiss" className="h-[650px] w-auto -mr-[430px]" />
            <img src={beerBottleElChele} alt="LA20 El Chele" className="h-[690px] w-auto" />
          </div>
        </div>
      </div>

      {/* Final Wave Banner */}
      <section className="relative w-full" style={{ overflow: "hidden", marginTop: "-80px", zIndex: 1 }}>
        <svg
          className="block w-full"
          style={{
            height: "250px",
            display: "block",
          }}
          viewBox="0 0 1440 250"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <path id="finalWaveTextPath" d="M0,125 Q360,65 720,125 T1440,125 T2160,125 T2880,125" fill="none" />
          </defs>

          {/* Orange/Yellow background covering from top to middle of black band */}
          <rect x="0" y="0" width="1440" height="125" fill="#FFA500" />

          {/* Black wave band with curves on top and bottom */}
          <path d="M0,85 Q360,25 720,85 T1440,85 L1440,165 Q1080,225 720,165 T0,165 Z" fill="hsl(0, 0%, 0%)" />

          {/* White text following the wave curve - repeated multiple times */}
          <text
            style={{
              fontFamily: "Oswald",
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "8px",
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              strokeWidth: "2px",
              textTransform: "uppercase",
            }}
            dy="20"
          >
            <textPath href="#finalWaveTextPath" startOffset="0">
              CONOCE TU BARRIO,SABORES PARA TODOS,CONOCE TU BARRIO,SABORES PARA TODOS, CONOCE TU BARRIO,SABORES PARA
              TODOS
            </textPath>
          </text>
        </svg>
      </section>

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
