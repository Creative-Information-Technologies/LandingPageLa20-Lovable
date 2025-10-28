import { useEffect, useRef, useState } from "react";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import characterPurple from "@/assets/character-purple.png";
import la20Logo from "@/assets/la20-logo-new.png";
import beerAleros from "@/assets/beer-bottle-aleros.png";
import beerLaMetiche from "@/assets/beer-bottle-la-metiche.png";
import beerLaJefa from "@/assets/beer-bottle-la-jefa.png";
import beerLaFlaka from "@/assets/beer-bottle-la-flaka.png";
import beerWeiss from "@/assets/beer-bottle-weiss-bier.png";
import la20Badge from "@/assets/la20-badge.png";

const OrangeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen lg:min-h-[200vh] w-full overflow-hidden py-8 md:py-16 lg:py-0"
      style={{
        backgroundColor: "#FF9A01",
      }}
    >
      {/* Logo and beer bottles - Hidden on mobile */}
      <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-32 z-30">
        <div className="relative">
          <img
            src={la20Logo}
            alt="LA20 Logo"
            className="w-[512px] md:w-[640px] lg:w-[768px] h-auto z-0"
            style={{
              opacity: "15%",
            }}
          />
          {/* Beer bottles distributed around logo with animations */}
          <img src={beerLaMetiche} alt="La Metiche Beer" className={`absolute w-12 md:w-[30rem] h-auto z-[999] transition-all duration-1000 delay-100 ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "-400px", left: "-300px", transform: "rotate(-31deg)" }} />
          <img src={beerAleros} alt="Aleros Beer" className={`absolute w-24 md:w-80 h-auto z-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "-200px", left: "-400px", transform: "rotate(-20deg)" }} />
          <img src={beerLaJefa} alt="La Jefa Beer" className={`absolute w-24 md:w-[30rem] h-auto z-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "200px", left: "-600px", transform: "rotate(-31deg)" }} />
          <img src={beerLaJefa} alt="La Jefa Beer" className={`absolute w-32 md:w-[30rem] h-auto z-10 transition-all duration-1000 delay-[400ms] ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "-450px", left: "100px", transform: "rotate(-31deg)" }} />
          <img src={beerLaFlaka} alt="La Jefa Beer" className={`absolute w-32 md:w-[30rem] h-auto z-10 transition-all duration-1000 delay-[500ms] ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "200px", left: "0px", transform: "rotate(-31deg)" }} />
          <img src={beerWeiss} alt="La Jefa Beer" className={`absolute w-32 md:w-[30rem] h-auto z-10 transition-all duration-1000 delay-[600ms] ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "-200px", left: "500px", transform: "rotate(-31deg)" }} />
          <img src={beerLaMetiche} alt="La Jefa Beer" className={`absolute w-32 md:w-[30rem] h-auto z-10 transition-all duration-1000 delay-[700ms] ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "200px", left: "400px", transform: "rotate(-31deg)" }} />
          <img src={beerAleros} alt="Aleros Beer" className={`absolute w-32 md:w-80 h-auto z-10 transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-90 scale-100" : "opacity-0 scale-75"}`} style={{ top: "-400px", right: "-500px", transform: "rotate(-20deg)" }} />
        </div>
      </div>

      <div className={`relative w-full min-h-[80vh] md:min-h-screen lg:h-full flex items-center justify-center p-4 md:p-8 lg:p-[1cm] transition-all duration-1000 z-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
        <div className="relative w-full h-full p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden rounded-[20px] md:rounded-[40px]" style={{ backgroundColor: "#6B2A0F" }}>
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `url(${wavyPatternBrown})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.3 }} />
          
          <img src={la20Badge} alt="LA20 Badge" className="absolute top-4 right-4 md:top-8 md:right-8 w-16 md:w-24 lg:w-32 h-auto z-20" />

          <h2 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-black text-white text-center leading-tight font-deacon mb-4 md:mb-6" style={{ fontFamily: '"Deacon Condensed Test", sans-serif', textShadow: "6px 4px 0px hsla(19, 93%, 17%, 1), 12px 8px 0px hsla(19, 93%, 17%, 1)" }}>
            ¿CREÍSTE QUE<br />SÓLO HACÍAMOS<br />BUENAS<br />CERVEZAS?
          </h2>

          <p className="text-primary text-center text-sm md:text-base">Pues seguí deslizando para contarte un secreto...</p>

          <img src={characterPurple} alt="Character" className="absolute -bottom-12 md:-bottom-16 lg:-bottom-24 left-2 md:left-4 w-32 md:w-48 lg:w-64 xl:w-72 h-auto z-20" />
        </div>
      </div>
    </section>
  );
};

export default OrangeSection;