import { Beer, FileText, Utensils, Mail } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { icon: Beer, label: "Cervezas", count: 8, color: "#FFD740" },
    { icon: FileText, label: "Artículos", count: 12, color: "#FFA000" },
    { icon: Utensils, label: "Recetas", count: 5, color: "#FF8A00" },
    { icon: Mail, label: "Contactos", count: 1, color: "#FF6F00" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-oswald text-4xl font-bold text-white mb-8">
        Bienvenido al Panel de Administración
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-[#3d1e12] rounded-2xl p-6 shadow-xl border border-white/10 hover:border-[#FFD740]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <span 
                  className="font-oswald text-5xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.count}
                </span>
              </div>
              <p className="text-white/80 font-oswald text-lg">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-[#3d1e12] rounded-2xl p-8 shadow-xl border border-white/10">
        <h2 className="font-oswald text-2xl font-bold text-[#FFD740] mb-4">
          Actividad Reciente
        </h2>
        <p className="text-white/60">No hay actividad reciente para mostrar.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
