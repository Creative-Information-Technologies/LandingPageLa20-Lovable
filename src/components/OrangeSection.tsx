import { useEffect, useRef, useState } from "react";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import characterPurple from "@/assets/character-purple.png";
import la20Logo from "@/assets/la20-logo-new.png";
import beerAleros from "@/assets/beer-bottle-aleros-new.png";
import beerMetiche from "@/assets/beer-bottle-la-metiche.png";
import beerJefa from "@/assets/beer-bottle-la-jefa-new.png";
import beerWeiss from "@/assets/beer-bottle-weiss.png";
import beerVienna from "@/assets/beer-bottle-vienna.png";
const OrangeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="relative min-h-[200vh] w-full overflow-hidden" style={{
    backgroundColor: '#FF9A01'
  }}>
      {/* Logo and beer bottles positioned lower in the orange section */}
      <div className="absolute inset-0 flex items-end justify-center pb-32 z-0">
        <div className="relative">
          {/* Logo */}
          <img src={la20Logo} alt="LA20 Logo" className="w-[512px] md:w-[640px] lg:w-[768px] h-auto z-0" style={{
          opacity: 0.5
        }} />
          
          {/* Beer bottles aligned horizontally above the logo */}
          <div className="absolute w-full flex items-center justify-center gap-8 z-10" style={{
            top: '-280px'
          }}>
            <img src={beerMetiche} alt="La Metiche Beer" className="w-48 md:w-64 h-auto" style={{
              transform: 'rotate(-30deg)',
              opacity: 0.9
            }} />
            
            <img src={beerJefa} alt="La Jefa Beer" className="w-24 md:w-32 h-auto" style={{
              transform: 'rotate(-30deg)',
              opacity: 0.9
            }} />
            
            <img src={beerWeiss} alt="Weiss Beer" className="w-48 md:w-64 h-auto" style={{
              transform: 'rotate(-30deg)',
              opacity: 0.9
            }} />
            
            <img src={beerVienna} alt="Vienna Lager Beer" className="w-24 md:w-32 h-auto" style={{
              transform: 'rotate(-30deg)',
              opacity: 0.9
            }} />
          </div>
        </div>
      </div>

      <div className={`relative w-full h-full flex items-center justify-center p-[1cm] transition-all duration-1000 z-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
        {/* Brown Rectangle */}
        <div className="relative w-full h-full p-16 shadow-2xl overflow-hidden rounded-[40px]" style={{
        backgroundColor: '#6B2A0F'
      }}>
          {/* Wavy Pattern inside rectangle */}
          <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }} />
          
          <h2 className="relative z-10 text-6xl font-black text-white text-center leading-tight" style={{
          fontFamily: "Deacon Condensed Test",
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
            ¿CREÍSTE QUE<br />
            SÓLO HACÍAMOS<br />
            BUENAS<br />
            CERVEZAS?
          </h2>

          {/* Character positioned at bottom left inside rectangle */}
          <img src={characterPurple} alt="Character" className="absolute bottom-4 left-4 w-48 md:w-64 lg:w-72 h-auto z-20" />
        </div>
      </div>
    </section>;
};
export default OrangeSection;