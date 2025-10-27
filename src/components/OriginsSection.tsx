import origins1997 from "@/assets/origins-1997.png";
import origins1998 from "@/assets/origins-1998.png";

const OriginsSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden pt-32 pb-8">
      {/* Top Wave Transition - Brown/Orange */}
      <div className="absolute top-0 left-0 right-0 w-full h-80 z-30">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Define the wave path for text */}
            <path id="wave-text-path" d="M0,195 Q180,160 360,195 T720,195 T1080,195 T1440,195" dy="40" />
          </defs>
          {/* Brown/Orange wave band shape */}
          <path d="M0,195 Q180,160 360,195 T720,195 T1080,195 T1440,195 L1440,0 L0,0 Z" fill="#8B3A14" dx="200" />
          {/* Text following the wave */}
          <text
            dy="70"
            style={{
              fontFamily: '"Deacon Condensed Test", sans-serif',
              fontSize: "48px",
              fontWeight: "900",
              fill: "white",
              letterSpacing: "0.1em",
            }}
          >
            <textPath href="#wave-text-path" startOffset="50%" textAnchor="middle">
              CONOCÉ NUESTROS ORÍGENES
            </textPath>
          </text>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-96">
        {/* Horizontal Scrollable Timeline */}
        <div className="w-full overflow-x-auto md:overflow-x-auto scrollbar-hide whitespace-nowrap snap-x snap-mandatory">
          <div className="flex gap-4 md:gap-16 pb-8 px-4 md:px-8 justify-start min-w-max">
            {/* Timeline Item 1 - 1997 */}
            <div className="inline-flex flex-col items-start gap-6 min-w-[90vw] md:min-w-[600px] snap-center">
              <div className="flex items-start gap-6">
                {/* Year Badge */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-black font-black text-2xl"
                  style={{
                    backgroundColor: "#FFD801",
                    fontFamily: '"Deacon Condensed Test", sans-serif',
                  }}
                >
                  1997
                </div>

                {/* Description */}
                <div className="max-w-xs text-white pt-2">
                  <p className="text-sm leading-relaxed whitespace-normal">
                    Nos consumos; "Que huevon tener una cerveza que valga la pena, tener lugar para probar una cerveza
                    de verdad y para colmo que sea extranjera".
                  </p>
                </div>
              </div>

              {/* Image Card */}
              <div
                className="relative w-full md:w-[500px] h-48 md:h-72 bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-3"
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={origins1997}
                  alt="Taproom 1997"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Timeline Item 2 - 1998 */}
            <div className="inline-flex flex-col items-start gap-6 min-w-[90vw] md:min-w-[600px] snap-center">
              <div className="flex items-start gap-6">
                {/* Year Badge */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-black font-black text-2xl"
                  style={{
                    backgroundColor: "#FFD801",
                    fontFamily: '"Deacon Condensed Test", sans-serif',
                  }}
                >
                  1998
                </div>

                {/* Description */}
                <div className="max-w-xs text-white pt-2">
                  <p className="text-sm leading-relaxed whitespace-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Image Card */}
              <div
                className="relative w-full md:w-[500px] h-48 md:h-72 bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-3"
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={origins1998}
                  alt="Taproom 1998"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Timeline Item 3 - 2000 */}
            <div className="inline-flex flex-col items-start gap-6 min-w-[90vw] md:min-w-[600px] snap-center">
              <div className="flex items-start gap-6">
                {/* Year Badge */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-black font-black text-2xl"
                  style={{
                    backgroundColor: "#FFD801",
                    fontFamily: '"Deacon Condensed Test", sans-serif',
                  }}
                >
                  2000
                </div>

                {/* Description */}
                <div className="max-w-xs text-white pt-2">
                  <p className="text-sm leading-relaxed whitespace-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Image Card */}
              <div
                className="relative w-full md:w-[500px] h-48 md:h-72 bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-3"
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-sm">
                  Imagen del Taproom 2000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginsSection;
