import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import blogCurrywurstMain from "@/assets/blog-currywurst-new.png";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const BlogPost = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Header Section with wavy pattern */}
      <section 
        className="relative w-full px-6 overflow-hidden"
        style={{
          backgroundColor: '#94421D',
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '8rem',
          paddingBottom: '3rem',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 
            className="text-white uppercase text-center"
            style={{
              fontFamily: 'Oswald',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              lineHeight: '1',
              letterSpacing: '0',
              textShadow: '5px 5px 0 #3b0d00',
              marginBottom: '2rem',
            }}
          >
            CONOCÉ ESTA RECETA DE LA CASA: CURRYWURST
          </h1>
          
          {/* Metadata row: Date on left, Social on right */}
          <div className="flex items-center justify-between">
            <span className="text-white font-normal">Publicado: 20 Ago, 25</span>
            
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold">Compartir</span>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF', paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <img
            src={blogCurrywurstMain}
            alt="Currywurst con papas y cerveza"
            style={{ 
              width: '100%',
              borderRadius: '1rem',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">

          {/* Ingredients Section */}
          <div className="mb-12">
            <h2 
              className="font-bold uppercase mb-6"
              style={{ 
                color: '#000000',
                fontFamily: 'Oswald',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textTransform: 'uppercase'
              }}
            >
              INGREDIENTES:
            </h2>
            <ul 
              className="space-y-2"
              style={{ 
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '180%',
                letterSpacing: '0%',
                textAlign: 'justify',
                listStyleType: 'disc',
                paddingLeft: '1.5rem'
              }}
            >
              <li>4 salchichas bratwurst</li>
              <li>2 cucharadas de ketchup</li>
              <li>1 cucharada de curry en polvo</li>
              <li>1 cucharadita de pimentón dulce</li>
              <li>1 cucharadita de salsa Worcestershire</li>
              <li>Sal y pimienta al gusto</li>
              <li>Pan para acompañar</li>
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-12">
            <h2 
              className="font-bold uppercase mb-6"
              style={{ 
                color: '#000000',
                fontFamily: 'Oswald',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textTransform: 'uppercase'
              }}
            >
              INSTRUCCIONES:
            </h2>
            <div 
              className="space-y-4"
              style={{ 
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '180%',
                letterSpacing: '0%',
                textAlign: 'justify'
              }}
            >
              <p>
                <strong>1.</strong> Comienza cocinando las salchichas en agua hirviendo durante aproximadamente 10 minutos. Después, escúrrelas y sécalas bien.
              </p>
              <p>
                <strong>2.</strong> Calienta una sartén y asa las salchichas hasta que estén doradas y crujientes por fuera.
              </p>
              <p>
                <strong>3.</strong> En un tazón, combina el ketchup, el curry en polvo, el pimentón y la salsa Worcestershire. Mezcla bien y ajusta la sal y pimienta según tu preferencia.
              </p>
              <p>
                <strong>4.</strong> Corta las salchichas en rodajas y colócalas en un plato. Vierte la mezcla de salsa de curry por encima generosamente.
              </p>
              <p>
                <strong>5.</strong> Sirve con pan al lado y disfruta de este sabroso plato típico alemán.
              </p>
            </div>
          </div>

          {/* Chef's Note */}
          <div 
            className="p-6 rounded-lg mb-12"
            style={{ 
              backgroundColor: '#FFF8E7',
              border: '2px solid #FFD200'
            }}
          >
            <p 
              className="italic"
              style={{ 
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '180%',
                letterSpacing: '0%',
                textAlign: 'justify'
              }}
            >
              <strong>Consejo del Chef Coto:</strong> Esta receta marida perfectamente con nuestras cervezas de estilo alemán. Te recomendamos acompañarla con una Vienna Lager o una Weiss bien fría para realzar los sabores especiados del curry.
            </p>
          </div>
        </div>
      </div>

      {/* Black Banner Section */}
      <div 
        className="w-full py-8 overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="animate-marquee whitespace-nowrap">
          <span 
            className="inline-block font-bold text-white uppercase mx-8"
            style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif' }}
          >
            COMPARTE · DISFRUTA · RELÁJATE · COMPARTE · ¡VIVE LA EXPERIENCIA LA20!
          </span>
          <span 
            className="inline-block font-bold text-white uppercase mx-8"
            style={{ fontSize: '24px', fontFamily: 'Montserrat, sans-serif' }}
          >
            COMPARTE · DISFRUTA · RELÁJATE · COMPARTE · ¡VIVE LA EXPERIENCIA LA20!
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
