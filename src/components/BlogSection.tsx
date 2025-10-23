import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import beerBottleBlog from "@/assets/beer-bottle-blog.png";
import beerGlassBlog from "@/assets/beer-glass-blog.png";
import beerBottleMetiche from "@/assets/beer-bottle-la-metiche.png";
import beerGlassClub from "@/assets/beer-glass-club.png";
import blogCurrywurstMain from "@/assets/blog-currywurst-new.png";
import blogClubPromo from "@/assets/blog-club-promo.png";
import blogSaboresPerspectiva from "@/assets/blog-sabores-perspectiva.png";
import blogTourCervecero from "@/assets/blog-tour-cervecero.png";
import blogCervezaArtesanal from "@/assets/blog-cerveza-artesanal.png";
import blogCarousel1 from "@/assets/blog-carousel-1.png";
import blogCarousel2 from "@/assets/blog-carousel-2.png";
import blogCarousel3 from "@/assets/blog-carousel-3.png";
import blogAguachile from "@/assets/blog-aguachile-camaron.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogSection = () => {
  const navigate = useNavigate();
  
  const mainArticle = {
    title: "Conocé esta receta de la casa: Currywurst",
    description: "Esta receta, Currywurst, es perfecta para compartir entre amigos y marida muy bien con cervezas alemanas.",
    image: blogCurrywurstMain,
  };

  const secondaryArticles = [
    {
      title: "¿Qué es la cerveza artesanal?",
      description: "Mira todo lo que tenemos planificado para la celebración.",
      image: blogCervezaArtesanal,
    },
    {
      title: "Sabores en perspectiva",
      description: "Conocé nuestra nueva línea de sabores de temporada.",
      image: blogSaboresPerspectiva,
    },
    {
      title: "Tour cervecero",
      description: "Pensabas que la cerveza solo se abría y se tomaba? En el Tour Cervecero te contamos todo lo que hay antes del ¡salud! Spoiler: vas a terminar amando aún más tu pinta.",
      image: blogTourCervecero,
    },
    {
      title: "Club de cerveceros",
      description: "Destapa grandes oferta, ven y conoce lo que el club La20 trae para ti.",
      image: blogClubPromo,
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
            <div className="flex-1 max-w-2xl" style={{ paddingLeft: '10%' }}>
            <h1 
              className="font-oswald font-bold text-white uppercase tracking-[0%]"
              style={{
                fontSize: '84px',
                lineHeight: '110%',
                textShadow: '5px 5px 0px #3d1505',
              }}
            >
              CONOCÉ<br />
              LAS ÚLTIMAS NOTICIAS
            </h1>
            </div>
            
            {/* Assets - Bottle and Glass */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: '50%', zIndex: 10 }}>
              {/* Beer Glass - Back Layer (40-45% width, 7 degrees rotation) */}
              <img 
                src={beerGlassBlog}
                alt="LA20 Beer Glass"
                className="absolute"
                style={{
                  right: '0%',
                  top: '-15px',
                  bottom: '-10px',
                  width: '58%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                  transform: 'rotate(7deg)',
                  transformOrigin: 'bottom center',
                  zIndex: 2,
                }}
              />
              
              {/* Beer Bottle - Front Layer (70% width - 2x larger, -7 degrees rotation) */}
              <img 
                src={beerBottleBlog}
                alt="La Flaka Gose Beer Bottle"
                className="absolute"
                style={{
                  right: '3%',
                  top: '20px',
                  bottom: '0',
                  width: '98%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))',
                  transform: 'rotate(-7deg)',
                  transformOrigin: 'bottom center',
                  zIndex: 3,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content - Articles Section */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto" style={{ padding: '40px 20px' }}>
          {/* Main and Secondary Articles Grid - 65-70% / 30-35% split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Article - Left Column (65-70% width) */}
            <div className="lg:col-span-8">
              <div 
                className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:brightness-105" 
                style={{ 
                  border: '2px solid #F4E1C0',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                }}
                onClick={() => navigate('/blog/currywurst')}
              >
                {/* Image with 16:9 aspect ratio */}
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                {/* Text Block */}
                <div style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                  <h3 
                    className="font-sans font-bold mb-3" 
                    style={{ 
                      color: '#000000',
                      fontSize: '1.5rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {mainArticle.title}
                  </h3>
                  <p 
                    className="font-sans leading-relaxed line-clamp-3" 
                    style={{ 
                      color: '#000000',
                      fontSize: '1rem'
                    }}
                  >
                    {mainArticle.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Articles - Right Column (30-35% width) */}
            <div className="lg:col-span-4 space-y-4">
              {secondaryArticles.map((article, index) => (
                <div 
                  key={index} 
                  className="flex rounded-xl overflow-hidden"
                  style={{ 
                    height: '130px',
                    border: '2px solid #F4E1C0',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  {/* Image - 40% width, square aspect */}
                  <div className="w-2/5 flex-shrink-0 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '8px 0 0 8px' }}
                    />
                  </div>
                  
                  {/* Text - 60% width */}
                  <div className="w-3/5 p-3 flex flex-col justify-center">
                    <h4 
                      className="font-sans font-bold mb-1 leading-tight line-clamp-2" 
                      style={{ 
                        color: '#000000',
                        fontSize: '1rem'
                      }}
                    >
                      {article.title}
                    </h4>
                    <p 
                      className="font-sans leading-snug line-clamp-2" 
                      style={{ 
                        color: '#000000',
                        fontSize: '0.9rem'
                      }}
                    >
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section - Additional Articles */}
      <div className="w-full py-16 px-6" style={{ backgroundColor: '#974119' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header with title and button */}
          <div className="flex justify-between items-center mb-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Explorar todos los artículos
            </h2>
            <Button 
              className="bg-[#FFD200] hover:bg-[#FFD200]/90 text-[#974119] font-bold uppercase px-6 py-3 rounded-lg flex items-center gap-2"
            >
              Más recientes
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>
          
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
                  title: "¿Cerveza artesanal o industria? Te lo contamos...",
                  description: "Conocé las diferencias y elegí tu favorita.",
                  image: blogCarousel1,
                },
                {
                  title: "La jefa cumple hoy 5 años",
                  description: "Conoce el origen, el proceso y toda la historia de esta mística cerveza.",
                  image: blogCarousel2,
                },
                {
                  title: "Celebremos lo nuestro, ven este 15 de septiembre.",
                  description: "Hoy celebramos con orgullo nuestra independencia!​ Brindemos con el sabor auténtico de lo nuestro: cerveza artesanal hecha en Honduras. 🍻​",
                  image: blogCarousel3,
                },
                {
                  title: "Receta del día: Aguachile de camarón",
                  description: "Preparate un Aguachile con sabor original en 5 pasos. Conocé como prepararlo.",
                  image: blogAguachile,
                },
              ].map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-4">
                      <h3 
                        className="text-white mb-2 uppercase line-clamp-2"
                        style={{
                          fontFamily: 'Oswald',
                          fontWeight: 700,
                          fontSize: '24px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-white line-clamp-2"
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                        }}
                      >
                        {item.description}
                      </p>
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
      <div className="w-full py-20 px-6 relative overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#974119', zIndex: 5 }}>
        <div className="max-w-7xl mx-auto relative">
          {/* Center Content */}
          <div className="relative text-center py-12" style={{ zIndex: 20 }}>
            <h2 
              className="text-white uppercase mb-8 font-barlow-condensed"
              style={{
                fontWeight: 900,
                fontSize: '141.75px',
                lineHeight: '102%',
                letterSpacing: '0%',
                textAlign: 'center',
                textShadow: '5px 5px 0px #3d1505',
              }}
            >
              UNITE AL CLUB LA20 Y<br />OBTENÉ BENEFICIOS<br />ESPECIALES
            </h2>
            <Button 
              size="lg"
              className="bg-black hover:bg-black/80 text-white font-bold uppercase px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              UNIRME AL CLUB
            </Button>
          </div>

          {/* Left Bottle Image - Extending into Footer */}
          <img 
            src={beerBottleMetiche}
            alt="La Metiche Belgian Witbier"
            className="hidden lg:block absolute"
            style={{ 
              left: '-40%',
              bottom: '-380px',
              width: '105%',
              height: 'auto',
              zIndex: 10,
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.35))',
              transform: 'rotate(-11deg)',
              transformOrigin: 'bottom center'
            }}
          />

          {/* Right Glass Image - Extending into Footer */}
          <img 
            src={beerGlassClub}
            alt="LA20 Beer Glass"
            className="hidden lg:block absolute"
            style={{ 
              right: '-9.5%',
              bottom: '-600px',
              width: '42%',
              height: 'auto',
              zIndex: 10,
              filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.35))',
              transform: 'rotate(7deg)',
              transformOrigin: 'bottom center'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
