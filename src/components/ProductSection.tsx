import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import wavyPattern from "@/assets/wavy-pattern.png";
import laJefaCharacter from "@/assets/la-jefa-character-new.png";
import laJefaGlass from "@/assets/beer-glass-la-jefa-new.png";
import elCheleGlass from "@/assets/beer-glass-el-chele.png";

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
];

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative min-h-[150vh] w-full overflow-hidden bg-black pt-32 transition-transform duration-100 ease-out"
      style={{
        transform: `translateY(${-Math.min(scrollY * 0.5, 200)}px)`,
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <Carousel className="w-full max-w-7xl">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={product.id}>
                <div className="flex items-center justify-end gap-0 w-full">
                  {/* Character Image - positioned to the left */}
                  <img
                    src={product.character}
                    alt={product.name}
                    className={`absolute left-[-12%] top-[-5%] w-[900px] h-auto transition-all duration-1000 z-0 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
                    }`}
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                    }}
                  />

                  {/* Beer Glass Image */}
                  <img
                    src={product.glass}
                    alt={`Vaso Cerveza ${product.name}`}
                    className={`absolute left-[20%] top-[5%] w-[380px] h-auto transition-all duration-1000 z-20 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                      transform: "rotate(-5deg)",
                      transformOrigin: "center center",
                    }}
                  />

                  {/* Cards Container */}
                  <div className="flex gap-2 ml-auto items-stretch relative">
                    {/* Transparent Frame Card */}
                    <Card
                      className={`w-[450px] bg-transparent border-4 border-white transition-all duration-1000 z-20 ${
                        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                      }`}
                      style={{
                        borderRadius: "30px",
                      }}
                    >
                      <CardContent className="p-0 h-full"></CardContent>
                    </Card>

                    {/* Product Info Card */}
                    <Card
                      className={`w-full max-w-lg bg-white text-black shadow-2xl transition-all duration-1000 border-0 z-30 ${
                        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                      }`}
                      style={{
                        borderRadius: "30px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                      }}
                    >
                      <CardContent className="p-10">
                        <h3
                          className="text-6xl font-black mb-6 tracking-tight"
                          style={{
                            fontFamily: "Deacon Condensed Test",
                            lineHeight: "1",
                          }}
                        >
                          {product.name}
                        </h3>

                        <p className="text-base leading-relaxed mb-6 font-normal">
                          {product.tagline}
                        </p>

                        {/* Separator line */}
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
          
          <CarouselPrevious className="absolute -left-7 top-1/2 -translate-y-1/2 z-40 h-14 w-14 rounded-full bg-yellow-500 hover:bg-yellow-600 backdrop-blur-sm border-2 border-yellow-400 transition-all" />
          <CarouselNext className="absolute -right-7 top-1/2 -translate-y-1/2 z-40 h-14 w-14 rounded-full bg-yellow-500 hover:bg-yellow-600 backdrop-blur-sm border-2 border-yellow-400 transition-all" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductSection;
