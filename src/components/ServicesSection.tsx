import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import wavyPatternOrange from "@/assets/wavy-pattern-orange.png";

const ServicesSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "EXPERIENCIAS CERVECERAS",
      description: "Descubrí el arte de la cerveza artesanal con nuestras experiencias únicas",
      image: "/placeholder.svg"
    },
    {
      title: "TOURS GUIADOS",
      description: "Conocé nuestro proceso de elaboración de principio a fin",
      image: "/placeholder.svg"
    },
    {
      title: "EVENTOS PRIVADOS",
      description: "Espacios perfectos para tus celebraciones especiales",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="w-full">
      {/* 1. Header "SERVICIOS" */}
      <div 
        className="relative w-full py-16 overflow-hidden"
        style={{ 
          backgroundColor: '#FF9A01',
          backgroundImage: `url(${wavyPatternOrange})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="text-6xl md:text-8xl font-black text-white text-center uppercase tracking-wider font-['Bebas_Neue']">
          SERVICIOS
        </h2>
      </div>

      {/* 2. Service Cards Section */}
      <div className="w-full py-20" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="aspect-square bg-gray-200 rounded-2xl mb-6" 
                       style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover' }}>
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-bold uppercase"
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Animated Text Strip */}
      <div className="w-full py-6 overflow-hidden" style={{ backgroundColor: '#FF9A01' }}>
        <div 
          className="whitespace-nowrap animate-marquee"
          style={{
            animation: 'marquee 20s linear infinite'
          }}
        >
          <span className="text-3xl md:text-4xl font-black text-white uppercase mx-8">
            COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE · COMPARTÍ · DISFRUTÁ · RELAJATE
          </span>
        </div>
      </div>

      {/* 4. Taproom Promotion Section */}
      <div className="w-full py-24 relative" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
            TENEMOS EL MEJOR TAPROOM<br />DE SAN PEDRO SULA
          </h2>
          <p className="text-2xl md:text-3xl text-white font-medium">
            Vení, disfrutá y viví la experiencia cervecera
          </p>
        </div>
        
        {/* Diagonal images placeholders */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 rounded-3xl transform -rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-3xl transform rotate-12 hidden lg:block"></div>
      </div>

      {/* 5. Beer Exploration Section */}
      <div className="w-full py-20" style={{ backgroundColor: '#FF9A01' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase">
            ¿CON GANAS DE EXPLORAR?
          </h2>
          <p className="text-3xl md:text-4xl text-white font-bold mb-12 uppercase">
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

      {/* 6. Final Banner */}
      <div 
        className="w-full py-12 relative"
        style={{ backgroundColor: '#974119' }}
      >
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-[#974119]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
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
      `}</style>
    </section>
  );
};

export default ServicesSection;
