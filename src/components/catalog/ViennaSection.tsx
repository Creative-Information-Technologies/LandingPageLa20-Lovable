import viennaImage from "@/assets/catalog/vienna-lager-oktoberfest.png";
import wavyPattern from "@/assets/catalog/wavy-pattern-oktoberfest.png";

const ViennaSection = () => {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundColor: "#974119",
        backgroundImage: `url(${wavyPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Beer Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={viennaImage}
              alt="Vienna Lager - Cerveza Artesanal LA20 con vaso y botella"
              className="w-full h-auto object-contain max-w-lg rounded-3xl"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl px-8 lg:px-16 py-16 shadow-2xl lg:-ml-16">
            <h2
              className="font-oswald font-bold uppercase mb-6"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: "128%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                textShadow: "6px 6px 0px rgba(0, 0, 0, 0.8)",
              }}
            >
              CONOCÉ LA BEBIDA OFICIAL
              <br />
              DEL OKTOBEER FEST
            </h2>
            <p
              className="font-outfit font-normal"
              style={{
                fontSize: "clamp(16px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#FFFFFF",
              }}
            >
              Nuestra nueva Vienna Lager, te está esperando para celebrar el Oktobeer Fest ¿Te animas?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViennaSection;
