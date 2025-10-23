import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wavyPatternBrown from "@/assets/wavy-pattern-brown.png";
import wavyPatternOrange from "@/assets/wavy-pattern-orange-new.png";
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
          backgroundColor: "#94421D",
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "8rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            className="text-white uppercase text-center"
            style={{
              fontFamily: "Oswald",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 5rem)",
              lineHeight: "1",
              letterSpacing: "0",
              textShadow: "5px 5px 0 #3b0d00",
              marginBottom: "2rem",
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
      <div
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#FFFFFF", paddingTop: "5rem", paddingBottom: "3rem" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto", overflow: "hidden", borderRadius: "1rem" }}>
          <img
            src={blogCurrywurstMain}
            alt="Currywurst con papas y cerveza"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "center 40%",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Content Section with padding bottom */}
      <div className="w-full px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF", paddingBottom: "4rem" }}>
        <div className="max-w-4xl mx-auto">
          {/* Ingredients Section */}
          <div className="mb-12">
            <h2
              className="font-bold uppercase mb-6"
              style={{
                color: "#000000",
                fontFamily: "Oswald",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}
            >
              INGREDIENTES:
            </h2>
            <ul
              className="space-y-2"
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "180%",
                letterSpacing: "0%",
                textAlign: "justify",
                listStyleType: "disc",
                paddingLeft: "1.5rem",
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
                color: "#000000",
                fontFamily: "Oswald",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}
            >
              INSTRUCCIONES:
            </h2>
            <div
              className="space-y-4"
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "180%",
                letterSpacing: "0%",
                textAlign: "justify",
              }}
            >
              <p>
                <strong>1.</strong> Comienza cocinando las salchichas en agua hirviendo durante aproximadamente 10
                minutos. Después, escúrrelas y sécalas bien.
              </p>
              <p>
                <strong>2.</strong> Calienta una sartén y asa las salchichas hasta que estén doradas y crujientes por
                fuera.
              </p>
              <p>
                <strong>3.</strong> En un tazón, combina el ketchup, el curry en polvo, el pimentón y la salsa
                Worcestershire. Mezcla bien y ajusta la sal y pimienta según tu preferencia.
              </p>
              <p>
                <strong>4.</strong> Corta las salchichas en rodajas y colócalas en un plato. Vierte la mezcla de salsa
                de curry por encima generosamente.
              </p>
              <p>
                <strong>5.</strong> Sirve con pan al lado y disfruta de este sabroso plato típico alemán.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider Section with 2 peaks on both sides */}
      <section className="relative w-full" style={{ overflow: "visible", marginTop: "-2px", zIndex: 1 }}>
        <svg
          className="block w-full"
          style={{
            height: "300px",
            display: "block",
            overflow: "visible",
          }}
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <path id="waveTextPath" d="M0,150 Q360,100 720,150 T1440,150 T2160,150 T2880,150" fill="none" />
          </defs>

          {/* White background covering from top to middle of black band */}
          <rect x="0" y="0" width="1440" height="150" fill="hsl(0, 0%, 100%)" />

          {/* Orange background with pattern from middle of black band continuing down */}
          <rect x="0" y="150" width="1440" height="1000" fill="hsl(36, 100%, 50%)" />

          {/* Wavy pattern overlay */}
          <defs>
            <pattern id="orangeWavyPattern" x="0" y="0" width="1440" height="600" patternUnits="userSpaceOnUse">
              <image
                href={wavyPatternOrange}
                x="0"
                y="0"
                width="1440"
                height="600"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <rect x="0" y="150" width="1440" height="1000" fill="url(#orangeWavyPattern)" opacity="1" />

          {/* Black wave band with curves on top and bottom - much bigger */}
          <path d="M0,100 Q360,50 720,100 T1440,100 L1440,200 Q1080,250 720,200 T0,200 Z" fill="hsl(0, 0%, 0%)" />

          {/* White text following the wave curve - repeated multiple times */}
          <text
            style={{
              fontFamily: "Oswald",
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "6px",
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              strokeWidth: "2px",
              textTransform: "uppercase",
            }}
            dy="22"
          >
            <textPath href="#waveTextPath" startOffset="0">
              COMPARTE, DISFRUTA, RELÁJATE, COMPARTE, DISFRUTA, RELÁJATE, COMPARTE, DISFRUTA, RELÁJATE, COMPARTE,
              DISFRUTA, RELÁJATE,
            </textPath>
          </text>
        </svg>
      </section>

      {/* Orange section behind footer */}
      <section
        className="relative w-full"
        style={{
          marginTop: "-150px",
          paddingTop: "150px",
        }}
      >
        {/* Background layer behind everything */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 0,
            backgroundColor: "hsl(var(--blog-orange))",
            backgroundImage: `url(${wavyPatternOrange})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            pointerEvents: "none",
          }}
        />
        {/* Footer content above background */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
