import { Button } from "@/components/ui/button";

const JoinSection = () => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-visible -mt-32" style={{ backgroundColor: "#8B3A14" }}>
      <div
        className="absolute left-0 right-0 w-full h-80 z-30"
        style={{
          top: '-80px'
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <path id="wavePath" d="M0,125 Q180,90 360,125 T720,125 T1080,125 T1440,125" />
          </defs>

          {/* Brown fill below the wave - multiple waves to cover all spaces */}
          <path
            d="M0,195 Q180,230 360,195 T720,195 T1080,195 T1440,195 L1440,320 L0,320 Z"
            fill="#8B3A14"
            transform="translate(-720, 0)"
          />
          <path
            d="M0,195 Q180,230 360,195 T720,195 T1080,195 T1440,195 L1440,320 L0,320 Z"
            fill="#8B3A14"
            transform="translate(-360, 0)"
          />
          <path
            d="M0,195 Q180,230 360,195 T720,195 T1080,195 T1440,195 L1440,320 L0,320 Z"
            fill="#8B3A14"
          />
          <path
            d="M0,195 Q180,230 360,195 T720,195 T1080,195 T1440,195 L1440,320 L0,320 Z"
            fill="#8B3A14"
            transform="translate(360, 0)"
          />
          <path
            d="M0,195 Q180,230 360,195 T720,195 T1080,195 T1440,195 L1440,320 L0,320 Z"
            fill="#8B3A14"
            transform="translate(720, 0)"
          />

          {/* Black wave band shape - symmetrical wave pattern on both top and bottom */}
          <path
            d="M0,125 Q180,90 360,125 T720,125 T1080,125 T1440,125 L1440,195 Q1260,230 1080,195 T720,195 T360,195 T0,195 Z"
            fill="hsl(0, 0%, 0%)"
          />

          <text
            dy="48"
            className="font-black tracking-widest"
            style={{
              fontSize: "clamp(20px, 3vw, 42px)",
              fill: "hsl(0, 0%, 100%)",
              opacity: 1,
              fontFamily: "Deacon Condensed Test, sans-serif",
              fontWeight: 900,
              letterSpacing: "0.15em",
            }}
          >
            <textPath href="#wavePath" startOffset="50%" textAnchor="middle">
              ÚNETE AL CLUB LA20, Y OBTÉN BENEFICIOS
            </textPath>
          </text>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-[60vh]">
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-12 leading-tight"
          style={{
            fontFamily: '"Deacon Condensed Test", sans-serif',
            color: "#FFD801",
          }}
        >
          UNITE AL CLUB LA20 Y
          <br />
          OBTENÉ BENEFICIOS
          <br />
          ESPECIALES
        </h2>

        <Button
          size="xl"
          className="bg-black text-white hover:bg-gray-900 text-lg px-12 py-6 rounded-full font-bold"
          style={{
            fontFamily: '"Deacon Condensed Test", sans-serif',
          }}
        >
          UNIRME AL CLUB
        </Button>
      </div>
    </section>
  );
};

export default JoinSection;
