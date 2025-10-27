import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import taproomImage1 from "@/assets/taproom-image-1.png";
import taproomImage2 from "@/assets/taproom-image-2.png";

const LocationSection = () => {
  const handleOpenMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Cervecería+LA20+Ave+Juan+Pablo+II+21104+San+Pedro+Sula+Cortés+Honduras",
      "_blank",
    );
  };

  return (
    <section className="relative bg-white pb-32 overflow-visible" style={{ paddingTop: "0px" }}>
      <div className="container mx-auto px-4 overflow-visible relative z-10">
        {/* Decorative Images */}
        <div className="absolute -top-20 -left-24 w-96 h-72 -rotate-12 rounded-lg shadow-2xl z-50 pointer-events-none hidden lg:block overflow-hidden">
          <img src={taproomImage1} alt="Taproom LA20" className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="absolute -top-12 -right-16 w-96 h-72 rotate-12 rounded-lg shadow-2xl z-50 pointer-events-none hidden lg:block overflow-hidden">
          <img src={taproomImage2} alt="Interior de LA20" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center relative z-20 py-20">
          <h2
            className="font-barlow font-extrabold uppercase"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#974119",
              letterSpacing: "0.02em",
              width: "665px",
              height: "128px",
              opacity: 1,
              margin: "0 auto 1rem auto",
            }}
          >
            POR QUÉ CONFORMARSE
            <br />
            CON VERLAS
          </h2>
          <h3
            className="font-barlow font-extrabold uppercase mb-16"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#974119",
              letterSpacing: "0.02em",
              width: "858px",
              height: "92px",
              opacity: 1,
              margin: "0 auto 4rem auto",
            }}
          >
            VEN A PROBARLAS
          </h3>

          {/* Location Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-300 z-30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <h4 className="text-sm font-bold tracking-wider text-gray-700 uppercase">Ubicación</h4>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  Cervecería LA20, Ave Juan Pablo II, 21104
                  <br />
                  San Pedro Sula, Cortés, Honduras
                </p>
              </div>
              <Button
                onClick={handleOpenMap}
                className="bg-black hover:bg-gray-800 text-white font-bold uppercase px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Abrir en Mapa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
