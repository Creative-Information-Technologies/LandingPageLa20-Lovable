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
        className="relative w-full py-16 px-6 overflow-hidden"
        style={{
          backgroundColor: '#974119',
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 
            className="text-white uppercase text-center"
            style={{
              fontFamily: 'Oswald',
              fontWeight: 700,
              fontSize: '96px',
              lineHeight: '115%',
              letterSpacing: '0%',
            }}
          >
            CONOCÉ ESTA RECETA DE<br />LA CASA: CURRYWURST
          </h1>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-4 mt-6">
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

      {/* Main Content */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="mb-12">
            <img
              src={blogCurrywurstMain}
              alt="Currywurst con papas y cerveza"
              className="w-full rounded-xl shadow-lg"
              style={{ 
                maxWidth: '900px',
                margin: '0 auto',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
              }}
            />
          </div>

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

        </div>
      </div>

      {/* Black Banner Section */}
    <div className="relative w-full overflow-hidden">
  {/* Franja negra ondulada */}
  <div className="relative w-full overflow-hidden bg-black">
    {/* SVG que forma la ola */}
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,60 C300,100 900,20 1440,60 L1440,0 L0,0 Z"
        fill="#000000"
      />
      <path
        d="M0,60 C300,100 900,20 1440,60 L1440,200 L0,200 Z"
        fill="#000000"
      />
    </svg>

    {/* Contenido dentro de la franja */}
    <div className="relative py-10 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-center">
        <span
          className="inline-block font-extrabold text-white uppercase mx-6"
          style={{
            fontSize: '26px',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '2px'
          }}
        >
          COMPARTE · DISFRUTA · RELÁJATE · COMPARTE · ¡VIVE LA EXPERIENCIA LA20!
        </span>
        <span
          className="inline-block font-extrabold text-white uppercase mx-6"
          style={{
            fontSize: '26px',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '2px'
          }}
        >
          COMPARTE · DISFRUTA · RELÁJATE · COMPARTE · ¡VIVE LA EXPERIENCIA LA20!
        </span>
      </div>
    </div>
  </div>

  {/* Footer debajo */}
  <Footer />
</div>
