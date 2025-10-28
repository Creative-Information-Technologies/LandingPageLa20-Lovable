import { Home, Beer, FileText, Utensils, Mail, Tag, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import la20Logo from "@/assets/la20-logo-new.png";

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  const menuItems = [
    { id: "dashboard", icon: Home, label: "Inicio" },
    { id: "beers", icon: Beer, label: "Cervezas" },
    { id: "articles", icon: FileText, label: "Artículos" },
    { id: "recipes", icon: Utensils, label: "Recetas" },
    { id: "promotions", icon: Tag, label: "Promociones" },
    { id: "contact", icon: Mail, label: "Contacto" },
  ];

  return (
    <aside 
      className="w-[260px] min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #3d1e12 0%, #592b10 100%)",
      }}
    >
      {/* Decorative waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 260 800" preserveAspectRatio="none">
          <path
            d="M0,100 Q65,80 130,100 T260,100 L260,200 Q195,220 130,200 T0,200 Z"
            fill="#FFD740"
            opacity="0.3"
          />
          <path
            d="M0,300 Q65,280 130,300 T260,300 L260,400 Q195,420 130,400 T0,400 Z"
            fill="#FFA000"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Menu content */}
      <nav className="relative z-10 flex flex-col h-full py-8 px-4">
        <div className="mb-12 text-center">
          <img 
            src={la20Logo} 
            alt="La 20 Cervecería" 
            className="h-20 w-auto mx-auto mb-2 drop-shadow-2xl"
          />
          <p className="text-[#FFD740]/80 text-sm uppercase tracking-widest font-oswald">Panel Admin</p>
        </div>

        <div className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                variant="ghost"
                className={`
                  w-full justify-start gap-3 h-12 px-4 rounded-lg
                  transition-all duration-300
                  ${isActive 
                    ? "bg-[#FFD740] text-[#3d1e12] font-bold shadow-lg shadow-[#FFD740]/30" 
                    : "text-white hover:bg-white/10 hover:text-[#FFD740]"
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? "animate-pulse" : ""}`} />
                <span className="font-oswald text-base tracking-wide">{item.label}</span>
              </Button>
            );
          })}
        </div>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 px-4 mt-8 text-white/60 hover:text-red-400 hover:bg-white/5 rounded-lg transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-oswald text-base">Cerrar sesión</span>
        </Button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
