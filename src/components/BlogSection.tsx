import { Button } from "@/components/ui/button";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";

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
        className="relative w-full py-20 px-6 bg-[hsl(var(--blog-orange))] overflow-hidden"
        style={{
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight font-deacon">
                CONOCÉ LAS<br />ÚLTIMAS<br />NOTICIAS
              </h1>
            </div>
            {/* Espacio para imágenes futuras */}
            <div className="hidden lg:flex items-end gap-4 flex-shrink-0">
              <div className="h-72 w-32 bg-white/10 rounded-lg"></div>
              <div className="h-80 w-32 bg-white/10 rounded-lg"></div>
              <div className="h-72 w-32 bg-white/10 rounded-lg"></div>
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
    </section>
  );
};

export default BlogSection;
