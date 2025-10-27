import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import wavyPattern from "@/assets/wavy-pattern.png";
import laJefaCharacter from "@/assets/la-jefa-character-new.png";
import laMeticheCharacter from "@/assets/character-metiche.png";
import laFlakaCharacter from "@/assets/character-la-flaka.png";
import laJefaGlass from "@/assets/beer-glass-la-jefa-new.png";
import elCheleGlass from "@/assets/beer-glass-el-chele.png";
import alerosGlass from "@/assets/beer-glass-aleros.png";
import laFlakaGlass from "@/assets/beer-glass-la-flaka.png";
import laMeticheGlass from "@/assets/beer-glass-la-metiche.png";
import alerosDarkGlass from "@/assets/beer-glass-aleros-dark.png";
import weissBierGlass from "@/assets/beer-glass-weis-bier.png";
import viennaLagerGlass from "@/assets/beer-glass-vienna-lager.png";

interface Product {
  id: string;
  name: string;
  tagline: string;
  ingredients: string;
  style: string;
  ibu: number;
  character: string;
  glass: string;
}

const products: Product[] = [
  {
    id: "la-jefa",
    name: "LA JEFA",
    tagline: "Es el amor amargo del barrio. Su base lupulosa combinada con cítricos le dan un sabor único.",
    ingredients: "Agua, cebada malteada, jugo de limón, jugo de naranja y lúpulo.",
    style: "CITRUS IPA",
    ibu: 55,
    character: laJefaCharacter,
    glass: laJefaGlass,
  },
  {
    id: "el-chele",
    name: "EL CHELE",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    style: "LOREM IPSUM",
    ibu: 45,
    character: laJefaCharacter,
    glass: elCheleGlass,
  },
  {
    id: "aleros",
    name: "ALEROS",
    tagline: "Una cerveza ligera y refrescante, perfecta para cualquier ocasión.",
    ingredients: "Agua, cebada malteada, lúpulo.",
    style: "LAGER",
    ibu: 38,
    character: laJefaCharacter,
    glass: alerosGlass,
  },
  {
    id: "la-flaka",
    name: "LA FLAKA",
    tagline: "Ligera en cuerpo pero intensa en sabor, ideal para los que buscan algo diferente.",
    ingredients: "Agua, cebada malteada, lúpulo aromático.",
    style: "LIGHT ALE",
    ibu: 30,
    character: laFlakaCharacter,
    glass: laFlakaGlass,
  },
  {
    id: "la-metiche",
    name: "LA METICHE",
    tagline: "Se mete en todo y lo hace bien. Una cerveza con carácter y personalidad.",
    ingredients: "Agua, cebada malteada, lúpulo especial.",
    style: "AMBER ALE",
    ibu: 42,
    character: laMeticheCharacter,
    glass: laMeticheGlass,
  },
  {
    id: "aleros-dark",
    name: "ALEROS",
    tagline: "La versión oscura de nuestro clásico, con notas tostadas y un cuerpo robusto.",
    ingredients: "Agua, cebada malteada oscura, lúpulo.",
    style: "DARK LAGER",
    ibu: 40,
    character: laJefaCharacter,
    glass: alerosDarkGlass,
  },
  {
    id: "weiss-bier",
    name: "WEISS BIER",
    tagline: "Cerveza de trigo tradicional alemana con un toque tropical y refrescante.",
    ingredients: "Agua, cebada malteada, trigo, lúpulo, levadura especial.",
    style: "HEFEWEIZEN",
    ibu: 28,
    character: laJefaCharacter,
    glass: weissBierGlass,
  },
  {
    id: "vienna-lager",
    name: "VIENNA LAGER",
    tagline: "Estilo clásico vienés con un balance perfecto entre malta y lúpulo.",
    ingredients: "Agua, cebada malteada Vienna, lúpulo noble.",
    style: "VIENNA LAGER",
    ibu: 35,
    character: laJefaCharacter,
    glass: viennaLagerGlass,
  },
];

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const sectionRef = useRef<HTMLElement>(null);

  // ... keep existing code (useEffect hooks)

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] overflow-visible w-full bg-black pt-32 pb-20 transition-transform duration-100 ease-out"
      style={{
        transform: `translateY(${-Math.min(scrollY * 0.5, 200)}px)`,
      }}
    >
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

      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <img
          key={products[currentIndex].id}
          src={products[currentIndex].character}
          alt={products[currentIndex].name}
          className={`hidden lg:block absolute left-[-10%] top-[-5%] w-[900px] h-auto object-contain transition-all duration-700 ease-out z-0 animate-fade-in ${
            isVisible ? "translate-x-0 opacity-100 scale-100" : "-translate-x-20 opacity-0 scale-95"
          }`}
          style={{
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
          }}
        />

        <Carousel
          className="w-full overflow-visible"
          opts={{
            loop: true,
            align: "center",
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-0 w-full relative px-4 md:px-0">
                  <img
                    src={product.glass}
                    alt={`Vaso Cerveza ${product.name}`}
                    className={`absolute left-[5%] md:left-[15%] lg:left-[40%] top-[-5%] md:top-[8%] w-[200px] md:w-[350px] h-auto object-contain transition-all duration-1000 z-20 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                      transform: "rotate(-5deg)",
                      transformOrigin: "center center",
                    }}
                  />

                  <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto md:ml-auto items-stretch relative mt-16 md:mt-0">
                    <Card
                      className={`hidden lg:block w-[450px] bg-transparent border-4 border-white transition-all duration-1000 z-20 ${
                        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                      }`}
                      style={{
                        borderRadius: "30px",
                      }}
                    >
                      <CardContent className="p-0 h-full"></CardContent>
                    </Card>

                    <Card
                      className={`w-full md:max-w-md lg:max-w-lg bg-white text-black shadow-2xl transition-all duration-1000 border-0 z-30 ${
                        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                      }`}
                      style={{
                        borderRadius: "30px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                      }}
                    >
                      <CardContent className="p-6 md:p-10">
                        <h3
                          className="text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight"
                          style={{
                            fontFamily: "Deacon Condensed Test",
                            lineHeight: "1",
                          }}
                        >
                          {product.name}
                        </h3>

                        <p className="text-base leading-relaxed mb-6 font-normal">{product.tagline}</p>

                        <div className="w-full h-px bg-gray-200 mb-6"></div>

                        <div className="space-y-5">
                          <div>
                            <h4 className="text-xs font-semibold mb-2 text-gray-500 tracking-wide uppercase">
                              INGREDIENTES:
                            </h4>
                            <p className="text-sm leading-relaxed text-black">{product.ingredients}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold mb-2 text-gray-500 tracking-wide uppercase">
                              ESTILO:
                            </h4>
                            <p className="text-sm font-medium text-black">{product.style}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold mb-2 text-gray-500 tracking-wide uppercase">
                              IBU (AMARGOR):
                            </h4>
                            <div className="flex items-center gap-3">
                              <span className="text-base font-semibold text-black">{product.ibu}</span>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-2xl">
                                    🌾
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:-left-7 h-10 w-10 md:h-14 md:w-14 rounded-full bg-yellow-500 hover:bg-yellow-600 backdrop-blur-sm border-2 border-yellow-400 transition-all text-black" />
          <CarouselNext className="right-2 md:-right-7 h-10 w-10 md:h-14 md:w-14 rounded-full bg-yellow-500 hover:bg-yellow-600 backdrop-blur-sm border-2 border-yellow-400 transition-all text-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductSection;
