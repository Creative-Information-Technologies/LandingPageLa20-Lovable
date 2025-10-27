import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import beerBottleFloating from "@/assets/beer-bottle-aleros.png";
import wavyPattern from "@/assets/wavy-pattern.png";
import la20Logo from "@/assets/la20-logo-new.png";
import beerGlassDark from "@/assets/beer-glass-dark.png";
import beerGlassLeft from "@/assets/beer-glass-left.png";
import beerGlassRight from "@/assets/beer-glass-right.png";
import beerBottleLaJefa from "@/assets/beer-bottle-la-jefa.png";
import beerBottleAlerosNew from "@/assets/beer-bottle-aleros-new.png";
import hechoEnHonduras from "@/assets/hecho-en-honduras-icon.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-8 pb-96"
      style={{
        background: "linear-gradient(135deg, hsl(19, 56%, 15%) 0%, hsl(19, 64%, 35%) 50%, hsl(19, 56%, 15%) 100%)",
      }}
    >
      {/* Wavy Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${wavyPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
        }}
      />
      {/* Beer Glass on the Left */}
      <img
        src={beerGlassLeft}
        alt="Vaso de Cerveza La 20"
        className="hidden lg:block absolute left-[-12%] top-[8%] w-[480px] h-auto animate-fade-in z-0 pointer-events-none"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
          transform: "rotate(7deg)",
          transformOrigin: "center center",
          objectFit: "contain",
        }}
      />

      {/* Beer Glass on the Right */}
      <img
        src={beerGlassRight}
        alt="Vaso de Cerveza La 20"
        className="hidden lg:block absolute right-[-8%] top-[5%] w-[500px] h-auto animate-fade-in z-0 pointer-events-none"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
          transform: "rotate(-6deg)",
          transformOrigin: "center center",
          objectFit: "contain",
        }}
      />

      {/* Floating Beer Bottle near the wave */}
      <img
        src={beerBottleFloating}
        alt="Cerveza La 20 Aleros"
        className="hidden lg:block absolute left-[2%] bottom-[-2%] w-[380px] h-auto animate-slide-in-left z-5 pointer-events-none"
        style={{
          filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
          objectFit: "contain",
        }}
      />

      {/* Beer Bottle La Jefa - right side */}
      <img
        src={beerBottleLaJefa}
        alt="Cerveza La 20 La Jefa"
        className="hidden lg:block absolute right-[-14%] bottom-[-7%] w-[800px] h-auto animate-fade-in z-5 pointer-events-none"
        style={{
          filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
          objectFit: "contain",
        }}
      />

      {/* Center Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Hero Text */}
        <h1
          className="font-black text-primary mb-6 animate-fade-in leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          <span
            className="font-deacon block text-4xl md:text-6xl lg:text-[80px]"
            style={{ fontWeight: 900, lineHeight: "100%", letterSpacing: "0%" }}
          >
            DATE UN RELAX y
          </span>
          <span
            className="font-deacon block text-primary text-3xl md:text-5xl lg:text-[70px]"
            style={{ fontWeight: 900, lineHeight: "100%", letterSpacing: "0%" }}
          >
            DESTAPÁ LO ARTESANAL
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button variant="hero" size="xl">
            Reservar
          </Button>
          <Button variant="heroOutline" size="xl">
            Catálogo
          </Button>
        </div>
      </div>

      {/* Hecho en Honduras Badge - Bottom Right */}
      <img
        src={hechoEnHonduras}
        alt="Hecho en Honduras"
        className="absolute right-4 bottom-[20rem] md:right-12 md:bottom-[24rem] lg:right-[18rem] lg:bottom-[28rem] w-32 md:w-40 lg:w-52 h-auto animate-fade-in z-20 pointer-events-none"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
          objectFit: "contain",
        }}
      />

      {/* Black Wave Transition with Curved Text */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-80 z-30 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${-Math.min(scrollY * 0.5, 200) + 80}px)`,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <path id="wavePath" d="M0,125 Q180,90 360,125 T720,125 T1080,125 T1440,125" />
          </defs>

          {/* Black wave band shape - matches text curve exactly */}
          <path d="M0,125 Q180,90 360,125 T720,125 T1080,125 T1440,125 L1440,320 L0,320 Z" fill="hsl(0, 0%, 0%)" />

          <text
            dy="70"
            className="font-black tracking-wider pt-12"
            style={{
              fontSize: "38px",
              fill: "hsl(0, 0%, 100%)",
              opacity: 1,
              fontFamily: "Deacon Condensed Test, sans-serif",
              fontWeight: 900,
              marginTop: "1rem",
            }}
          >
            <textPath href="#wavePath" startOffset="0%">
              CONOCÉ TU BARRIO • SABORES PARA TODOS • CONOCÉ TU BARRIO • SABORES PARA TODOS
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
