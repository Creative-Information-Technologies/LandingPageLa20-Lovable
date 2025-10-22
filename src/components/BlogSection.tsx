import { Button } from "@/components/ui/button";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogSection = () => {
  const mainArticle = {
    title: "MARIDAJE PERFECTO: CURRYWURST",
    description: "Descubrí cómo la Viena de La20 realza los sabores de este clásico alemán. Una combinación que tenés que probar.",
    image: null,
  };

  const secondaryArticles = [
    {
      title: "Conocé la promo para miembros del club La20",
      description: "Beneficios exclusivos para los verdaderos amantes de la cerveza artesanal.",
      image: null,
    },
    {
      title: "Sabores con otra perspectiva",
      description: "Explorá nuevas formas de disfrutar tu cerveza favorita con maridajes innovadores.",
      image: null,
    },
    {
      title: "Tour Cervecero: Qué, cómo y dónde",
      description: "Conocé el proceso detrás de cada botella en nuestra cervecería artesanal.",
      image: null,
    },
    {
      title: "La20 cumplió 10 años",
      description: "Una década compartiendo momentos únicos con vos. ¡Celebramos juntos!",
      image: null,
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Header */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Text Content - Left */}
            <div className="flex-1 max-w-3xl">
              <h1 
                className="font-oswald font-bold text-white uppercase tracking-[0%]"
                style={{
                  fontSize: '96px',
                  lineHeight: '100%',
                  textShadow: '4px 4px 8px #521C03',
                }}
              >
                CONOCÉ<br />
                LAS ÚLTIMAS{' '}
                <span 
                  className="inline-block"
                  style={{
                    backgroundColor: '#FFE135',
                    color: '#000000',
                    padding: '4px 12px',
                    borderRadius: '12px',
                  }}
                >
                  NOTICIAS
                </span>
              </h1>
            </div>
            
            {/* Image Space - Right */}
            <div className="hidden lg:flex items-end gap-6 flex-shrink-0">
              {/* Placeholder for beer bottle and glass */}
              <div 
                className="relative"
                style={{
                  width: '250px',
                  height: '400px',
                }}
              >
                {/* Space reserved for bottle */}
              </div>
              <div 
                className="relative"
                style={{
                  width: '300px',
                  height: '400px',
                }}
              >
                {/* Space reserved for glass */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full bg-[hsl(var(--blog-brown))] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Article */}
            <article className="bg-white/95 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video overflow-hidden bg-gray-200">
                {/* Espacio para imagen principal */}
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[hsl(var(--blog-brown))] mb-4 font-deacon uppercase">
                  {mainArticle.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {mainArticle.description}
                </p>
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[hsl(var(--blog-orange))] hover:bg-[hsl(var(--blog-orange))]/90 text-white font-bold uppercase"
                >
                  Leer más
                </Button>
              </div>
            </article>

            {/* Secondary Articles */}
            <div className="space-y-6">
              {secondaryArticles.map((article, index) => (
                <article 
                  key={index}
                  className="bg-white/95 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex"
                >
                  <div className="w-1/3 overflow-hidden flex-shrink-0 bg-gray-200">
                    {/* Espacio para imagen */}
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-[hsl(var(--blog-brown))] mb-2 font-deacon">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button className="text-white hover:text-[hsl(var(--blog-yellow))] transition-colors text-lg font-semibold underline-offset-4 hover:underline">
              Explorá todos los artículos
            </button>
            <Button 
              size="lg"
              className="bg-[hsl(var(--blog-yellow))] hover:bg-[hsl(var(--blog-yellow))]/90 text-[hsl(var(--blog-brown))] font-bold uppercase shadow-lg hover:shadow-xl transition-all"
            >
              Más recientes
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Section - Additional Articles */}
      <div className="w-full bg-[hsl(var(--blog-brown))] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  title: "Celebramos la maestra, con esta cerveza de edición especial",
                  image: null,
                },
                {
                  title: "La 20 cumple hoy 6 años",
                  image: null,
                },
                {
                  title: "¿Cerveza artesanal o industrial?",
                  image: null,
                },
                {
                  title: "Receta del día: Aguachile de camarón",
                  image: null,
                },
              ].map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gradient-to-br from-[hsl(var(--blog-orange))] to-[hsl(var(--blog-yellow))] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="aspect-[4/3] overflow-hidden bg-white/10">
                      {/* Espacio para imagen */}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-deacon uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/30 text-white border-0" />
            <CarouselNext className="right-2 bg-white/20 hover:bg-white/30 text-white border-0" />
          </Carousel>
        </div>
      </div>

      {/* Club Membership Section */}
      <div className="w-full bg-[hsl(var(--blog-brown))] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[hsl(var(--blog-brown))] to-[hsl(25_40%_15%)] rounded-3xl overflow-hidden shadow-2xl py-16 px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Bottle Image Placeholder */}
              <div className="hidden lg:block w-48 h-80 bg-white/10 rounded-lg flex-shrink-0">
                {/* Espacio para botella */}
              </div>

              {/* Center Content */}
              <div className="flex-1 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-8 font-deacon leading-tight">
                  UNITE AL CLUB LA20 Y<br />OBTENÉ BENEFICIOS<br />ESPECIALES
                </h2>
                <Button 
                  size="lg"
                  className="bg-black hover:bg-black/80 text-white font-bold uppercase px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  UNIRME AL CLUB
                </Button>
              </div>

              {/* Right Glass Image Placeholder */}
              <div className="hidden lg:block w-48 h-80 bg-white/10 rounded-lg flex-shrink-0">
                {/* Espacio para vaso */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
