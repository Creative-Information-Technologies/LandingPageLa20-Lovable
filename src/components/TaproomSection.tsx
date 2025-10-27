import { Button } from "@/components/ui/button";
import taproomPhoto1 from "@/assets/taproom-photo-1.png";
import taproomPhoto2 from "@/assets/taproom-photo-2.png";
import taproomPhoto3 from "@/assets/taproom-photo-3.png";
import taproomPhoto4 from "@/assets/taproom-photo-4.png";

const TaproomSection = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-visible pt-20 pb-4"
      style={{
        backgroundColor: "#8B3A14",
      }}
    >
      {/* Top Photos - Hidden on mobile and tablet */}
      <div className="relative mb-8 hidden lg:block">
        <img
          src={taproomPhoto1}
          alt="Taproom Interior"
          className="absolute -top-20 left-0 w-[30rem] h-48 overflow-visible object-cover z-40"
        />
        <img
          src={taproomPhoto2}
          alt="Taproom Bar"
          className="absolute right-0 -top-10 w-64 h-48 object-cover overflow-visible"
        />

        <img
          src={taproomPhoto3}
          alt="Taproom Brewing Equipment"
          className="absolute top-[41rem] left-0 w-[25rem] h-48 object-cover overflow-visible z-40"
        />
        <img
          src={taproomPhoto4}
          alt="Taproom Atmosphere"
          className="absolute top-[39rem] right-0 w-[25rem] h-48 object-cover overflow-visible z-40"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content */}
        <div className="text-center pt-12 md:pt-20 lg:pt-32 pb-8">
          <h3
            className="text-4xl md:text-5xl font-black mb-1 leading-none"
            style={{
              color: "#FFD801",
              fontFamily: '"Deacon Condensed Test", sans-serif',
            }}
          >
            TENEMOS EL MEJOR Y ÚNICO
          </h3>
          <h1
            className="text-6xl lg:text-[10rem] font-black mb-1 leading-none"
            style={{
              color: "#FFD801",
              fontFamily: '"Deacon Condensed Test", sans-serif',
            }}
          >
            TAPROOM
          </h1>
          <h2
            className="text-6xl lg:text-8xl font-black mb-6 leading-none"
            style={{
              color: "#FFD801",
              fontFamily: '"Deacon Condensed Test", sans-serif',
            }}
          >
            DE SAN PEDRO SULA
          </h2>
        </div>
      </div>

      {/* Diagonal Black Band with Hours - Full Width */}
      <div className="w-full overflow-hidden">
        <div className="relative w-[103vw] ml-[-10px] my-12">
          <div
            className="relative bg-black text-white py-8 overflow-hidden w-full"
            style={{
              transform: "rotate(-2deg)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="text-center space-y-2" style={{ transform: "rotate(0deg)" }}>
              <p className="text-md md:text-xl font-bold tracking-wide">DE JUEVES Y VIERNES 4:00 PM A 12:00 PM</p>
              <p className="text-md md:text-xl font-bold tracking-wide">SÁBADOS 10:00 AM A 12:00 PM</p>
              <p className="text-md md:text-xl font-bold tracking-wide">DOMINGO A MIÉRCOLES CERRADOS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <Button variant="hero" size="xl">
            RESERVAR
          </Button>
        </div>

        {/* Map Section */}
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
          <div className="aspect-video bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8899428445816!2d-88.03113442500769!3d15.490350985108359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665d46ee7a50db%3A0x5a505a24142adced!2sCervecer%C3%ADa%20La20!5e0!3m2!1ses!2shn!4v1761155872254!5m2!1ses!2shn&style=feature:poi|visibility:off&style=feature:transit|visibility:off"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taproom Location"
            />
          </div>
          <div className="flex items-center justify-between p-6 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">UBICACIÓN</p>
              <p className="text-sm text-gray-800">
                Cervecería LA20, Ave Juan Pablo II, 21104 San Pedro Sula, Cortés, Honduras
              </p>
            </div>
            <Button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-6 rounded-full whitespace-nowrap">
              ABRIR EN MAPA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaproomSection;
