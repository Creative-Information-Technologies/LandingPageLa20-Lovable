import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import laJefaGlass from "@/assets/beer-glass-la-jefa-new.png";
import elCheleGlass from "@/assets/beer-glass-el-chele.png";
import alerosBottleReal from "@/assets/catalog/beer-bottle-aleros-real.png";
import laMeticheBottleReal from "@/assets/catalog/beer-bottle-la-metiche-real.png";
import weissBottleReal from "@/assets/catalog/beer-bottle-weiss-real.png";
import viennaBottle from "@/assets/beer-bottle-vienna.png";
import laJefaBottleCatalog from "@/assets/catalog/beer-bottle-la-jefa-catalog.png";
import laJefaGlassCatalog from "@/assets/catalog/beer-glass-la-jefa-catalog.png";
import laFlakaBottleFinal from "@/assets/catalog/beer-bottle-la-flaka-final.png";
import genericGlass1 from "@/assets/catalog/beer-glass-generic-1.png";
import genericGlass2 from "@/assets/catalog/beer-glass-generic-2.png";
import genericGlass3 from "@/assets/catalog/beer-glass-generic-3.png";
import laMeticheBottleLeft from "@/assets/catalog/la-metiche-bottle-left.png";
import laMeticheBottleRight from "@/assets/catalog/la-metiche-bottle-right.png";
import laMeticheGlassNew from "@/assets/catalog/la-metiche-glass-new.png";
import laMeticheCharacterNew from "@/assets/catalog/la-metiche-character-new.png";
import wavyPatternPurple from "@/assets/catalog/wavy-pattern-oktoberfest.png";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import alerosCarousel from "@/assets/catalog/beer-bottle-aleros-carousel.png";
import elCheleCarousel from "@/assets/catalog/beer-bottle-el-chele-carousel.png";
import laFlakaCarousel from "@/assets/catalog/beer-bottle-la-flaka-carousel.png";
import laJefaCarousel from "@/assets/catalog/beer-bottle-la-jefa-carousel.png";
import weissbierCarousel from "@/assets/catalog/beer-bottle-weissbier-carousel.png";

interface Beer {
  id: string;
  name: string;
  bottle: string;
  glass: string;
  ibu: number;
  isSpecial?: boolean;
}

const beers: Beer[] = [
  // Fila 1
  {
    id: "la-jefa",
    name: "LA JEFA",
    bottle: laJefaBottleCatalog,
    glass: laJefaGlassCatalog,
    ibu: 55,
  },
  {
    id: "el-chele",
    name: "EL CHELE",
    bottle: viennaBottle,
    glass: elCheleGlass,
    ibu: 18,
  },
  {
    id: "aleros-1",
    name: "ALEROS",
    bottle: alerosBottleReal,
    glass: genericGlass1,
    ibu: 24,
  },
  // Fila 2
  {
    id: "la-flaka",
    name: "LA FLAKA",
    bottle: laFlakaBottleFinal,
    glass: genericGlass2,
    ibu: 10,
  },
  {
    id: "la-metiche",
    name: "LA METICHE",
    bottle: laMeticheBottleReal,
    glass: genericGlass3,
    ibu: 18,
  },
  {
    id: "aleros-2",
    name: "ALEROS",
    bottle: alerosBottleReal,
    glass: genericGlass1,
    ibu: 24,
  },
  // Fila 3
  {
    id: "weiss-bier",
    name: "WEISS BIER",
    bottle: weissBottleReal,
    glass: genericGlass1,
    ibu: 22,
  },
  {
    id: "vienna-lager",
    name: "VIENNA LAGER",
    bottle: viennaBottle,
    glass: elCheleGlass,
    ibu: 18,
    isSpecial: true,
  },
];

const CatalogSection = () => {
  const [showMeticheSection, setShowMeticheSection] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselBeers = [
    { name: "ALEROS", image: alerosCarousel },
    { name: "EL CHELE", image: elCheleCarousel },
    { name: "LA FLAKA", image: laFlakaCarousel },
    { name: "LA JEFA", image: laJefaCarousel },
    { name: "WEISS BIER", image: weissbierCarousel },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselBeers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselBeers.length) % carouselBeers.length);
  };

  const getIbuIcons = (ibu: number) => {
    const maxIcons = 5;
    const filledIcons = Math.min(Math.round((ibu / 60) * maxIcons), maxIcons);
    return Array(maxIcons)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < filledIcons ? "opacity-100" : "opacity-30"}>
          🌾
        </span>
      ));
  };

  const bottleAdjustments: Record<string, { scale: number; left: number; top: number }> = {
    "la-jefa": { scale: 1.25, left: -150, top: -40 },
    "aleros-1": { scale: 1.25, left: -150, top: -30 },
    "aleros-2": { scale: 1.25, left: -150, top: -30 },
    "la-flaka": { scale: 1.25, left: -170, top: -30 },
    "el-chele": { scale: 1, left: -10, top: 7 },
    "la-metiche": { scale: 1, left: -50, top: -30 },
    "weiss-bier": { scale: 1, left: 30, top: 7 },
    "vienna-lager": { scale: 1, left: 50, top: 7 },
  };

  const getBottleAdjustment = (id: string) => bottleAdjustments[id] ?? { scale: 1, left: -10, top: 7 };

  const handleMeticheClick = () => {
    setShowMeticheSection(true);
    setTimeout(() => {
      document.getElementById("lametiche-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <section className="relative w-full py-16" style={{ backgroundColor: "#F7931E" }}>
        <div className="container mx-auto max-w-[1400px] px-8">
          {/* Title */}
          <h2
            className="text-[42px] font-black text-white text-center mb-16 tracking-wide uppercase font-montserrat"
            style={{
              letterSpacing: "0.05em",
              textShadow: "6px 6px 0px rgba(0, 0, 0, 0.8)",
            }}
          >
            MIRÁ TODAS LAS OPCIONES
          </h2>

          {/* Grid Container - 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {/* First 6 items */}
            {beers.slice(0, 6).map((beer) => (
              <div
                key={beer.id}
                className={`relative flex items-center justify-center ${
                  beer.id === "la-metiche" ? "cursor-pointer" : ""
                }`}
                style={{ minHeight: "480px" }}
                onClick={beer.id === "la-metiche" ? handleMeticheClick : undefined}
              >
                {/* Product Name - Top Center */}
                <h3
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-[32px] font-black tracking-tight uppercase font-montserrat z-30"
                  style={{
                    color: "#8B4513",
                  }}
                >
                  {beer.name}
                </h3>

                {/* Hexagon Container with Products */}
                <div
                  className={`relative transition-all duration-300 ${
                    beer.id === "la-metiche" ? "hover:brightness-105 hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]" : ""
                  }`}
                  style={{ width: "400px", height: "400px" }}
                >
                  {/* Hexagon Background */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-10"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundColor: "#A0522D",
                    }}
                  />

                  {/* Bottle - Positioned absolutamente, overlapping left */}
                  <div
                    className="absolute z-20"
                    style={{
                      left: `${getBottleAdjustment(beer.id).left}px`,
                      top: `${getBottleAdjustment(beer.id).top}px`,
                      height: "460px",
                      width: "auto",
                    }}
                  >
                    <img
                      src={beer.bottle}
                      alt={`Botella ${beer.name}`}
                      className="w-full h-full object-contain"
                      style={{
                        filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
                        transform: `rotate(-6.76deg) scale(${getBottleAdjustment(beer.id).scale})`,
                        opacity: 1,
                      }}
                    />
                  </div>

                  {/* Glass - Positioned absolutely, overlapping right */}
                  <div className="absolute top-1/2 right-[10%] -translate-y-1/2 z-20">
                    <img
                      src={beer.glass}
                      alt={`Vaso ${beer.name}`}
                      className="h-[320px] w-auto object-contain"
                      style={{
                        filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.3))",
                        transform: "rotate(-3deg)",
                      }}
                    />
                  </div>

                  {/* IBU Info Bar - Overlaying bottom of hexagon */}
                  <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg z-30"
                    style={{ minWidth: "260px" }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className="text-sm font-semibold uppercase tracking-wide font-montserrat"
                        style={{ color: "#666" }}
                      >
                        IBU (AMARGOR): {beer.ibu}
                      </span>
                      <div className="flex gap-0.5 text-base">{getIbuIcons(beer.ibu)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Last row - 2 items centered */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-wrap justify-center gap-12 md:gap-24 mt-8">
              {beers.slice(6).map((beer) => (
                <div key={beer.id} className="relative flex items-center justify-center" style={{ minHeight: "480px" }}>
                  {/* Product Name - Top Center */}
                  <h3
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-[32px] font-black tracking-tight uppercase font-montserrat z-30"
                    style={{
                      color: "#8B4513",
                    }}
                  >
                    {beer.name}
                  </h3>

                  {/* Hexagon Container with Products */}
                  <div className="relative" style={{ width: "400px", height: "400px" }}>
                    {/* Hexagon Background */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-10"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        backgroundColor: "#A0522D",
                      }}
                    />

                    {/* Bottle - Positioned absolutamente, overlapping left */}
                    <div
                      className="absolute z-20"
                      style={{
                        left: `${getBottleAdjustment(beer.id).left}px`,
                        top: `${getBottleAdjustment(beer.id).top}px`,
                        height: "460px",
                        width: "auto",
                      }}
                    >
                      <img
                        src={beer.bottle}
                        alt={`Botella ${beer.name}`}
                        className="w-full h-full object-contain"
                        style={{
                          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
                          transform: `rotate(-6.76deg) scale(${getBottleAdjustment(beer.id).scale})`,
                          opacity: 1,
                        }}
                      />
                    </div>

                    {/* Glass - Positioned absolutely, overlapping right */}
                    <div className="absolute top-1/2 right-[10%] -translate-y-1/2 z-20">
                      <img
                        src={beer.glass}
                        alt={`Vaso ${beer.name}`}
                        className="h-[320px] w-auto object-contain"
                        style={{
                          filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.3))",
                          transform: "rotate(-3deg)",
                        }}
                      />
                    </div>

                    {/* IBU Info Bar - Overlaying bottom of hexagon */}
                    <div
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg z-30"
                      style={{ minWidth: "260px" }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span
                          className="text-sm font-semibold uppercase tracking-wide font-montserrat"
                          style={{ color: "#666" }}
                        >
                          IBU (AMARGOR): {beer.ibu}
                        </span>
                        <div className="flex gap-0.5 text-base">{getIbuIcons(beer.ibu)}</div>
                      </div>
                    </div>

                    {/* Special Badge - Only for Vienna Lager */}
                    {beer.isSpecial && (
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-12 text-xs font-black tracking-widest font-montserrat shadow-xl z-40"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        ESPECIAL
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave transition to next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[34rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 360"
            preserveAspectRatio="none"
          >
            <path d="M0,180 Q300,300 600,180 Q900,60 1200,180 L1200,360 L0,360 Z" fill="#FF9A01" />
          </svg>
        </div>
      </section>

      {/* La Metiche Section */}
      <section
        id="lametiche-section"
        className={`relative w-full min-h-screen transition-all duration-800 overflow-hidden ${
          showMeticheSection ? "opacity-100 animate-fade-in" : "opacity-0 hidden"
        }`}
        style={{
          backgroundColor: "#5A2962",
        }}
      >
        {/* Wave Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${wavyPatternPurple})`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            filter: "hue-rotate(200deg) saturate(0.8) brightness(1.2)",
          }}
        />

        {/* Main Content */}
        <div className="container mx-auto max-w-[1200px] px-8 md:px-16 relative z-10 pt-8">
          {/* Title */}
          <h2
            className="uppercase text-center"
            style={{
              width: "100%",
              maxWidth: "1600px",
              height: "auto",
              position: "relative",
              top: "76px",
              left: "50%",
              transform: "translateX(-50%) rotate(-9.29deg)",
              opacity: 1,
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(80px, 18vw, 300px)",
              lineHeight: "128%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textShadow: "7.23px 7.23px 0px #521C03",
              whiteSpace: "nowrap",
            }}
          >
            LA METICHE
          </h2>

          {/* Product Composition */}
          <div className="relative" style={{ maxWidth: "1200px", width: "100%", height: "650px", margin: "0 auto" }}>
            {/* Left Bottle */}
            <div className="absolute z-30 hidden md:block" style={{ bottom: "-60px", left: "-50px" }}>
              <img
                src={laMeticheBottleLeft}
                alt="La Metiche Bottle Left"
                className="object-contain"
                style={{
                  height: "600px",
                  width: "auto",
                  transform: "rotate(-10deg)",
                  transformOrigin: "bottom center",
                  filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.6))",
                }}
              />
            </div>

            {/* Character - Center */}
            <div className="absolute z-25" style={{ bottom: "-550px", left: "50%", transform: "translateX(-65%)" }}>
              <img
                src={laMeticheCharacterNew}
                alt="La Metiche Character"
                className="object-contain"
                style={{
                  height: "clamp(800px, 100vw, 1420px)",
                  width: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
                }}
              />
            </div>

            {/* Center Glass - Front */}
            <div className="absolute z-35 hidden md:block" style={{ top: "280px", right: "100px" }}>
              <img
                src={laMeticheGlassNew}
                alt="La Metiche Glass"
                className="object-contain"
                style={{
                  height: "595.3px",
                  width: "368px",
                  transform: "rotate(-2deg)",
                  filter: "drop-shadow(0 35px 60px rgba(0,0,0,0.7))",
                }}
              />
            </div>

            {/* Right Bottle */}
            <div className="absolute z-30 hidden md:block" style={{ bottom: "50px", right: "-80px" }}>
              <img
                src={laMeticheBottleRight}
                alt="La Metiche Bottle Right"
                className="object-contain"
                style={{
                  height: "615px",
                  width: "auto",
                  transform: "rotate(8.72deg)",
                  filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.6))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección Descriptiva de LA METICHE */}
      <section
        className={`relative w-full transition-all duration-800 ${
          showMeticheSection ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {/* Banner Negro Superior con Forma de Ola */}
        <div className="relative w-full bg-black pt-8 pb-20">
          <div className="container mx-auto max-w-[1400px] px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0">
              <div className="text-white font-bold uppercase tracking-wide font-montserrat flex flex-col items-center justify-center">
                <div className="text-5xl leading-none">
                  5<span className="text-2xl">%</span>
                </div>
                <div className="text-lg mt-1">ABV</div>
              </div>
              <div className="hidden md:block h-12 w-[2px]" style={{ backgroundColor: "#FF9A01" }} />
              <div className="text-white font-bold uppercase tracking-wide font-montserrat flex flex-col items-center justify-center">
                <div className="text-3xl md:text-5xl">YEAR</div>
                <div className="text-3xl md:text-5xl">ROUND</div>
                <div className="text-base md:text-lg">AVAILABLE</div>
              </div>
              <div className="hidden md:block h-12 w-[2px]" style={{ backgroundColor: "#FF9A01" }} />
              <div className="text-white font-bold uppercase tracking-wide font-montserrat flex flex-col items-center justify-center -mt-0 md:-mt-4">
                <div className="text-3xl md:text-5xl">
                  22<span className="text-2xl">OZ</span> 12<span className="text-2xl">OZ</span>
                </div>
                <div className="text-sm md:text-base">SIZES</div>
              </div>
            </div>
          </div>

          {/* Ola en la parte inferior */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M0,0 Q300,80 600,40 T1200,0 L1200,120 L0,120 Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Área Principal con Fondo Blanco */}
        <div className="w-full bg-white py-20">
          <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-20">
              {/* Ilustración de la Mujer - Izquierda */}
              <div className="flex justify-center md:-mt-24">
                <img
                  src={laMeticheCharacterNew}
                  alt="La Metiche Character"
                  className="w-full max-w-[600px] md:max-w-[1100px] h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))",
                  }}
                />
              </div>

              {/* Texto Descriptivo - Derecha */}
              <div className="flex flex-col justify-start pt-4 md:pt-12">
                <h3
                  className="text-3xl md:text-5xl font-black uppercase mb-6 md:mb-8 tracking-tight"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    color: "#000000",
                  }}
                >
                  ¿QUIÉN ES LA METICHE?
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed text-left"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000",
                  }}
                >
                  Ella quiere saber lo que está pasando, pero no por relojera. Karla Patricia del Socorro Espino
                  Asunción es más bien una amante de la verdad y a ella nada se le escapa. Su sabor es muy particular,
                  una mezcla de muchas cosas interesantes... algunas ácidas y otras muy dulces. Ven preparado para
                  soltar la lengua y disfrutar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Ingredientes y Detalles Técnicos */}
      <section
        className={`relative w-full py-12 md:py-20 transition-all duration-800 ${
          showMeticheSection ? "opacity-100" : "opacity-0 hidden"
        }`}
        style={{ backgroundColor: "#FF9A01" }}
      >
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
          {/* Contenedor de Pastilla Marrón-Naranja */}
          <div
            className="relative rounded-[40px] md:rounded-[60px] py-6 md:py-6 px-6 md:px-16 overflow-visible"
            style={{
              backgroundColor: "#8B4513",
              backgroundImage: `url(${wavyPatternBrown})`,
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          >
            {/* Grid de 3 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Columna Izquierda - Ingredientes */}
              <div className="text-white text-left md:pl-8">
                <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 md:mb-6 tracking-wide font-montserrat">INGREDIENTES</h3>
                <p className="text-sm md:text-lg leading-relaxed font-poppins">
                  Agua, cebada malteada, lúpulo, trigo, cáscara de naranja, cáscara de limón, cilantro y cardamomo.
                  <br />
                  (Contiene cebada y trigo).
                </p>
              </div>

              {/* Columna Central - Botella */}
              <div className="flex justify-center items-center md:-mt-32 md:-mb-16">
                <img
                  src={laMeticheBottleReal}
                  alt="La Metiche Bottle"
                  className="h-[400px] md:h-[750px] w-auto object-contain"
                  style={{
                    transform: "rotate(8deg)",
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                  }}
                />
              </div>

              {/* Columna Derecha - Detalles Técnicos */}
              <div className="text-white text-left md:text-right md:pr-8">
                <h3
                  className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  BELGIAN
                  <br />
                  WITBIER
                </h3>
                <p className="text-base md:text-xl uppercase tracking-widest mb-8 md:mb-12 font-montserrat">ESTILO</p>

                <div className="flex flex-col items-start md:items-end">
                  <div className="text-6xl md:text-8xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    18
                  </div>
                  <p className="text-sm md:text-lg uppercase tracking-wide mb-4 font-montserrat">IBU (AMARGOR)</p>
                  <div className="bg-white rounded-full px-4 md:px-6 py-2 md:py-3 flex gap-1 md:gap-2 text-2xl md:text-3xl">
                    <span className="opacity-100">🌾</span>
                    <span className="opacity-100">🌾</span>
                    <span className="opacity-100">🌾</span>
                    <span className="opacity-30">🌾</span>
                    <span className="opacity-30">🌾</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Explorador de Cervezas y Carrousel */}
      <section
        className={`relative w-full py-12 md:py-20 transition-all duration-800 ${
          showMeticheSection ? "opacity-100" : "opacity-0 hidden"
        }`}
        style={{ backgroundColor: "#FF9A01" }}
      >
        <div className="w-full">
          {/* Mensaje Superior */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <h3
              className="text-2xl md:text-4xl font-black uppercase tracking-wide mb-2"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#FFFFFF",
                textShadow: "4px 4px 0px rgba(0,0,0,0.3)",
              }}
            >
              ¿CON GANAS DE EXPLORAR?
            </h3>
            <h2
              className="text-4xl md:text-7xl font-black uppercase tracking-wide"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#FFFFFF",
                textShadow: "6px 6px 0px rgba(0,0,0,0.5)",
              }}
            >
              MIRÁ TODAS LAS OPCIONES
            </h2>
          </div>

          {/* Carrousel de Cervezas */}
          <div className="relative flex items-center justify-center mb-12 md:mb-20 min-h-[400px] md:min-h-[720px] px-4">
            {/* Flecha Izquierda */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-4 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} className="md:w-12 md:h-12" color="white" strokeWidth={3} />
            </button>

            {/* Área del carrusel centrada */}
            <div className="relative w-full h-[400px] md:h-[680px] mx-auto overflow-hidden">
              {carouselBeers.map((beer, index) => {
                // Calcular la posición relativa al slide actual
                let position = index - currentSlide;

                // Hacer el carrusel circular
                if (position < -Math.floor(carouselBeers.length / 2)) {
                  position += carouselBeers.length;
                } else if (position > Math.floor(carouselBeers.length / 2)) {
                  position -= carouselBeers.length;
                }

                // Mostrar 5 cervezas visibles (-2, -1, 0, 1, 2)
                const isVisible = Math.abs(position) <= 2;
                const isCenter = position === 0;

                // Escala según posición
                let scale = 1;
                if (Math.abs(position) === 1) scale = 0.8;
                if (Math.abs(position) === 2) scale = 0.65;

                // Tamaño base para todas las cervezas
                let baseHeight = 400;
                // Weiss Bier es más pequeña
                if (beer.name === "WEISS BIER") {
                  baseHeight = 320;
                }

                // Responsive height
                if (window.innerWidth >= 768) {
                  baseHeight = beer.name === "WEISS BIER" ? 480 : 600;
                }

                return (
                  <div
                    key={beer.name}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
                      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${position * 200}px) scale(${scale})`,
                      zIndex: 20 - Math.abs(position),
                    }}
                  >
                    <img
                      src={beer.image}
                      alt={`${beer.name} Bottle`}
                      className="w-auto object-contain"
                      style={{
                        height: `${baseHeight}px`,
                        filter: `drop-shadow(0 25px 50px rgba(0,0,0,${isCenter ? 0.5 : 0.3})) brightness(${isCenter ? 1 : 0.7})`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-4 transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} className="md:w-12 md:h-12" color="white" strokeWidth={3} />
            </button>
          </div>

          {/* Onda con texto */}
          <div className="relative w-full h-48 md:h-72 -mt-12 md:-mt-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Path para el texto - curva central de la onda */}
                <path
                  id="wavePath"
                  d="M 0,150 Q 300,70 600,150 Q 900,230 1200,150"
                  fill="none"
                />
              </defs>

              {/* Forma de la cinta ondulada más gruesa */}
              <path
                d="M 0,100 Q 300,20 600,100 Q 900,180 1200,100 L 1200,200 Q 900,280 600,200 Q 300,120 0,200 Z"
                fill="white"
                stroke="none"
              />

              {/* Texto siguiendo la curva */}
              <text dy="25" className="font-black uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <textPath
                  href="#wavePath"
                  startOffset="50%"
                  textAnchor="middle"
                  style={{
                    fontSize: 'clamp(24px, 4vw, 58px)',
                    fill: '#000000',
                    fontWeight: 900,
                    letterSpacing: '0.05em'
                  }}
                >
                  CONOCÉ TU BARRIO • SABORES PARA TODOS
                </textPath>
              </text>
            </svg>
          </div>

        </div>
      </section>
    </>
  );
};

export default CatalogSection;
