import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import beerGlassTall from "@/assets/beer-glass-services-tall.png";
import beerBottleJefa from "@/assets/beer-bottle-services-jefa.png";
import beerGlassSnifter from "@/assets/beer-glass-services-snifter.png";

const ServicesSection = () => {
  const services = [
    {
      title: "EXPERIENCIAS CERVECERAS",
      description: "Te mostramos lo que no ves cuando servís una pinta. El olor, el proceso, la paciencia y el amor. Todo eso está en tu vaso. Vení a comprobarlo.",
      buttonText: "RESERVÁ",
      image: "/placeholder.svg"
    },
    {
      title: "EVENTOS PRIVADOS",
      description: "Ten tus eventos en el mejor sitio de San Pedro Sula. Reserva nuestro Taproom para celebrar los mejores momentos.",
      buttonText: "COTIZÁ",
      image: "/placeholder.svg"
    },
    {
      title: "RESERVACIONES",
      description: "Reservá tu lugar y los de tus aleros en el mejor Taproom de la ciudad. No corras el riesgo de quedarte sin tu lugar.",
      buttonText: "RESERVAR",
      image: "/placeholder.svg"
    },
    {
      title: "CLUB LA20",
      description: "Obtené los mejores beneficios de formar parte del mejor Club de Honduras.",
      buttonText: "UNIRM",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="w-full">
      {/* Header with wavy pattern */}
      <div 
        className="relative w-full py-20 px-6 bg-[hsl(var(--blog-orange))] overflow-hidden"
        style={{ 
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl" style={{ paddingLeft: '10%' }}>
              <h1 
                className="text-white uppercase font-oswald"
                style={{
                  fontWeight: 700,
                  fontSize: '148px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textShadow: '8px 8px 0px #3d1505, 12px 12px 20px rgba(0,0,0,0.5)'
                }}
              >
                SERVICIOS
              </h1>
            </div>

            {/* Assets - Glass, Bottle and Snifter */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{ width: '50%', zIndex: 10 }}
            >
              {/* Snifter Glass - Right */}
              <img
                src={beerGlassSnifter}
                alt="LA20 Beer Glass"
                className="absolute"
                style={{
                  right: '5%',
                  top: '0',
                  bottom: '0',
                  width: '35%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                  transform: 'rotate(7deg)',
                  transformOrigin: 'bottom center',
                  zIndex: 2,
                }}
              />

              {/* Beer Bottle - Center */}
              <img
                src={beerBottleJefa}
                alt="La Jefa Beer Bottle"
                className="absolute"
                style={{
                  right: '15%',
                  top: '10%',
                  bottom: '0',
                  width: '50%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))',
                  transform: 'rotate(-7deg) scale(1.25)',
                  transformOrigin: 'bottom center',
                  zIndex: 3,
                }}
              />

              {/* Tall Glass - Left side of assets */}
              <img
                src={beerGlassTall}
                alt="LA20 Tall Beer Glass"
                className="absolute"
                style={{
                  right: '55%',
                  top: '-15px',
                  bottom: '-10px',
                  width: '40%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                  transform: 'rotate(-5deg)',
                  transformOrigin: 'bottom center',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="w-full py-20" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Different heights for each card
              const heights = ['380px', '380px', '320px', '320px'];
              const cardHeight = heights[index];
              
              return (
                <div 
                  key={index}
                  className="bg-white overflow-hidden"
                  style={{
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    height: cardHeight
                  }}
                >
                  {/* All cards: text left, image right */}
                  <div className="flex flex-row h-full">
                    {/* Text side - Left */}
                    <div className="w-1/2 p-8 flex flex-col justify-center">
                      <h3 
                        className="text-black uppercase mb-4 leading-tight"
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          fontWeight: 'bold',
                          fontSize: '2rem'
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-black text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <button
                        className="bg-black text-white font-bold uppercase px-6 py-3 w-fit"
                        style={{
                          borderRadius: '8px',
                          boxShadow: '0 3px 0 #8B4513'
                        }}
                      >
                        {service.buttonText}
                      </button>
                    </div>
                    
                    {/* Image side - Right */}
                    <div 
                      className="w-1/2 h-full"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '0 16px 16px 0'
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated Text Strip */}
      <div className="w-full py-8 overflow-hidden" style={{ backgroundColor: '#FF9A01' }}>
        <div className="flex animate-marquee">
          <span className="text-4xl md:text-5xl font-black text-white uppercase whitespace-nowrap px-8">
            COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE
          </span>
        </div>
      </div>

      {/* Taproom Promotion Section */}
      <div className="w-full py-32 relative" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-tight">
            TENEMOS EL MEJOR TAPROOM<br />DE SAN PEDRO SULA
          </h2>
          <p className="text-2xl md:text-4xl text-white font-bold">
            Vení, disfrutá y viví la experiencia cervecera
          </p>
        </div>
        
        {/* Diagonal images placeholders */}
        <div className="absolute top-10 left-10 w-56 h-56 bg-white/10 rounded-3xl transform -rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-3xl transform rotate-12 hidden lg:block"></div>
      </div>

      {/* Beer Exploration Section */}
      <div className="w-full py-24" style={{ backgroundColor: '#FF9A01' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">
            ¿CON GANAS DE EXPLORAR?
          </h2>
          <p className="text-3xl md:text-4xl text-white font-bold mb-16 uppercase">
            MIRÁ TODAS LAS OPCIONES
          </p>
          
          {/* Beer bottles row */}
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2, 3, 4, 5].map((item) => (
              <div 
                key={item}
                className="w-32 h-64 bg-white/20 rounded-lg shadow-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Banner */}
      <div 
        className="w-full py-16 relative"
        style={{ backgroundColor: '#974119' }}
      >
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
