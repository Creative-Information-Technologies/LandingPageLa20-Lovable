import la20Logo from "@/assets/la20-logo-new.png";

const AdminHeader = () => {
  return (
    <header 
      className="h-[80px] flex items-center justify-center relative overflow-hidden shadow-lg"
      style={{
        background: "linear-gradient(90deg, #592b10 0%, #3d1e12 50%, #592b10 100%)",
      }}
    >
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)",
        }} />
      </div>

      {/* Logo */}
      <div className="relative z-10">
        <img 
          src={la20Logo} 
          alt="La 20 Cervecería" 
          className="h-16 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Golden shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD740]/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" 
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    </header>
  );
};

export default AdminHeader;
