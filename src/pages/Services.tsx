import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import wavyPatternOrange from "@/assets/wavy-pattern-orange.png";

const Services = () => {
  const services = [
    {
      title: "EXPERIENCIAS CERVECERAS",
      description: "Te mostramos lo que no ves cuando servís una pinta. El olor, el proceso, la paciencia y el amor. Todo eso está en tu vaso. Vení a comprobarlo.",
      buttonText: "RESERVÁ",
      image: "/placeholder.svg"
    },
    {
      title: "EVENTOS PRIVADOS",
      description: "Ten tus eventos en el mejor sitio de San Pedro Sula. Reservá nuestro Taproom para celebrar los mejores momentos.",
      buttonText: "COTIZÁ",
      image: "/placeholder.svg"
    },
    {
      title: "RESERVACIONES",
      description: "Reservá tu lugar y los de tus afectos en el mejor Taproom de la ciudad. No corras el riesgo de quedarte sin tu lugar.",
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
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Header with wavy pattern */}
      <div 
        className="relative w-full py-20 overflow-hidden"
        style={{ 
          backgroundColor: '#FF9A01',
          backgroundImage: `url(${wavyPatternOrange})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: `url(${wavyPatternOrange})`,
               backgroundSize: '200% 100%',
               animation: 'wave 10s ease-in-out infinite'
             }}>
        </div>
        <h1 className="relative text-7xl md:text-9xl font-black text-white text-center uppercase tracking-wider font-['Bebas_Neue']">
          SERVICIOS
        </h1>
      </div>

      {/* Services Grid Section */}
      <div className="w-full py-20" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-[30px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left side - Text content */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Button 
                      className="mt-6 bg-black text-white hover:bg-gray-800 rounded-full font-bold uppercase px-8 py-6 text-base w-fit"
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                  
                  {/* Right side - Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <div 
                      className="w-full h-full bg-gray-200 rounded-[25px] m-2"
                      style={{ 
                        backgroundImage: `url(${service.image})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
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

      <Footer />

      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10%);
          }
        }

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
    </div>
  );
};

export default Services;
