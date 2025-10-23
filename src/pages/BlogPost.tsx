import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import blogCurrywurstMain from "@/assets/blog-currywurst-new.png";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const BlogPost = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Header with wavy pattern */}
      <div 
        className="relative w-full px-6 overflow-hidden"
        style={{
          backgroundColor: '#974119',
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 
            className="text-white uppercase mb-8"
            style={{
              fontFamily: 'Oswald',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1',
              letterSpacing: '0%',
              textAlign: 'left',
            }}
          >
            CONOCÉ ESTA <span style={{
              backgroundColor: '#FFD600',
              color: '#000',
              borderRadius: '8px',
              padding: '0 10px',
            }}>RECETA</span><br />
            DE LA CASA: CURRYWURST
          </h1>
          
          {/* Metadata and Social Media Icons */}
          <div className="flex items-center gap-6 mt-8">
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

      {/* Main Image Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <img
            src={blogCurrywurstMain}
            alt="Currywurst con papas y cerveza"
            style={{ 
              width: '100%',
              borderRadius: '12px',
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
                color: '#3B200B',
                fontSize: '1.75rem',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              INGREDIENTES:
            </h2>
            <ul 
              className="space-y-2"
              style={{ 
                color: '#3B200B',
                fontSize: '1rem',
                lineHeight: '1.5em',
                listStyleType: 'disc',
                paddingLeft: '1.5rem'
              }}
            >
              <li>1 kg de salchicha alemana (bratwurst)</li>
              <li>2 cucharadas de aceite vegetal</li>
              <li>1 cebolla grande picada finamente</li>
              <li>2 dientes de ajo picados</li>
              <li>1 taza de salsa de tomate (ketchup)</li>
              <li>1/4 taza de agua</li>
              <li>2 cucharadas de curry en polvo</li>
              <li>1 cucharadita de pimentón dulce</li>
              <li>Sal y pimienta al gusto</li>
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-12">
            <h2 
              className="font-bold uppercase mb-6"
              style={{ 
                color: '#3B200B',
                fontSize: '1.75rem',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              INSTRUCCIONES:
            </h2>
            <div 
              className="space-y-4"
              style={{ 
                color: '#3B200B',
                fontSize: '1rem',
                lineHeight: '1.8em'
              }}
            >
              <p>
                <strong>1.</strong> En una sartén grande, calienta el aceite a fuego medio. Cocina las salchichas durante 8-10 minutos, volteándolas ocasionalmente hasta que estén doradas por todos lados. Retira y reserva.
              </p>
              <p>
                <strong>2.</strong> En la misma sartén, agrega la cebolla picada y cocina hasta que esté translúcida, aproximadamente 5 minutos. Añade el ajo y cocina por 1 minuto más.
              </p>
              <p>
                <strong>3.</strong> Incorpora el ketchup, el agua, el curry en polvo y el pimentón. Mezcla bien y deja cocinar a fuego lento durante 10 minutos, revolviendo ocasionalmente.
              </p>
              <p>
                <strong>4.</strong> Corta las salchichas en rodajas de 2-3 cm y agrégalas a la salsa. Cocina por 5 minutos más para que se integren los sabores.
              </p>
              <p>
                <strong>5.</strong> Prueba y ajusta la sazón con sal y pimienta al gusto. Sirve caliente acompañado de papas fritas y tu cerveza LA20 favorita.
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
                color: '#3B200B',
                fontSize: '1rem',
                lineHeight: '1.6em'
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
