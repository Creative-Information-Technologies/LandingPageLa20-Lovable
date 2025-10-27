import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#E8E8E8] overflow-hidden">
      {/* Top Wave Transition - Black */}
      <div className="absolute top-0 left-0 right-0 w-full h-80 z-30">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0,125 Q180,60 360,125 T720,125 T1080,125 T1440,125 L1440,0 L0,0 Z" fill="hsl(0, 0%, 0%)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pb-0 pt-32">
        {/* Title */}
        <h2
          className="text-3xl md:text-5xl lg:text-5xl font-black text-black text-center mt-12 mb-16 leading-tight container mx-auto px-4"
          style={{
            fontFamily: '"Deacon Condensed Test", sans-serif',
          }}
        >
          EL ARTE DE HACER LA MEJOR
          <br />
          <span className="inline-flex items-center gap-4">BIRRA DE HONDURAS</span>
        </h2>

        {/* Video Container */}
        <div className="relative w-screen aspect-video overflow-hidden">
          {/* Video Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-xl">Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
