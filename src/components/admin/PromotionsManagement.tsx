import { useState } from "react";
import { Plus, Edit, Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface Promotion {
  id: number;
  title: string;
  description: string;
  discount: string;
  startDate: string;
  endDate: string;
  active: boolean;
  code?: string;
}

const PromotionsManagement = () => {
  const { toast } = useToast();
  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: 1,
      title: "Happy Hour",
      description: "2x1 en cervezas seleccionadas",
      discount: "50%",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      active: true,
      code: "HAPPY2024",
    },
    {
      id: 2,
      title: "Club LA20",
      description: "Descuento exclusivo para miembros",
      discount: "20%",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      active: true,
      code: "CLUB20",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null);
  const [newPromotion, setNewPromotion] = useState({
    title: "",
    description: "",
    discount: "",
    startDate: "",
    endDate: "",
    code: "",
  });

  const handleSavePromotion = () => {
    if (!newPromotion.title || !newPromotion.discount || !newPromotion.startDate || !newPromotion.endDate) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    if (editingPromotion) {
      // Editar promoción existente
      const updatedPromotions = promotions.map(promo =>
        promo.id === editingPromotion.id
          ? {
              ...promo,
              title: newPromotion.title,
              description: newPromotion.description,
              discount: newPromotion.discount,
              startDate: newPromotion.startDate,
              endDate: newPromotion.endDate,
              code: newPromotion.code,
            }
          : promo
      );
      setPromotions(updatedPromotions);
      toast({
        title: "Promoción actualizada",
        description: `${newPromotion.title} ha sido actualizada exitosamente`,
      });
    } else {
      // Crear nueva promoción
      const promotion: Promotion = {
        id: promotions.length + 1,
        title: newPromotion.title,
        description: newPromotion.description,
        discount: newPromotion.discount,
        startDate: newPromotion.startDate,
        endDate: newPromotion.endDate,
        active: true,
        code: newPromotion.code,
      };
      setPromotions([...promotions, promotion]);
      toast({
        title: "Promoción creada",
        description: `${promotion.title} ha sido agregada exitosamente`,
      });
    }

    setIsDialogOpen(false);
    setEditingPromotion(null);
    setNewPromotion({ title: "", description: "", discount: "", startDate: "", endDate: "", code: "" });
  };

  const handleDeletePromotion = (id: number, title: string) => {
    setPromotions(promotions.filter(promo => promo.id !== id));
    toast({
      title: "Promoción eliminada",
      description: `${title} ha sido eliminada`,
    });
  };

  const handleEditPromotion = (promotion: Promotion) => {
    setEditingPromotion(promotion);
    setNewPromotion({
      title: promotion.title,
      description: promotion.description,
      discount: promotion.discount,
      startDate: promotion.startDate,
      endDate: promotion.endDate,
      code: promotion.code || "",
    });
    setIsDialogOpen(true);
  };

  const handleToggleActive = (id: number) => {
    const updatedPromotions = promotions.map(promo =>
      promo.id === id ? { ...promo, active: !promo.active } : promo
    );
    setPromotions(updatedPromotions);
    const promo = updatedPromotions.find(p => p.id === id);
    toast({
      title: promo?.active ? "Promoción activada" : "Promoción desactivada",
      description: `${promo?.title} ha sido ${promo?.active ? "activada" : "desactivada"}`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-oswald text-4xl font-bold text-white">
            Gestión de Promociones
          </h1>
          <p className="text-white/60 mt-2">
            Crea y administra las promociones de la cervecería
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingPromotion(null);
            setNewPromotion({ title: "", description: "", discount: "", startDate: "", endDate: "", code: "" });
          }
        }}>
          <DialogTrigger asChild>
            <Button 
              className="bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold rounded-xl px-6 h-[44px] gap-2 shadow-lg hover:shadow-[#FFD740]/50 transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Nueva Promoción
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#3d1e12] border-[#FFD740] text-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-oswald text-2xl text-[#FFD740]">
                {editingPromotion ? "Editar Promoción" : "Crear Nueva Promoción"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="title" className="text-white">Título *</Label>
                <Input 
                  id="title" 
                  value={newPromotion.title}
                  onChange={(e) => setNewPromotion({ ...newPromotion, title: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-white">Descripción *</Label>
                <Input 
                  id="description" 
                  value={newPromotion.description}
                  onChange={(e) => setNewPromotion({ ...newPromotion, description: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="discount" className="text-white">Descuento *</Label>
                <Input 
                  id="discount" 
                  placeholder="ej: 20%, 2x1, etc."
                  value={newPromotion.discount}
                  onChange={(e) => setNewPromotion({ ...newPromotion, discount: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="code" className="text-white">Código Promocional</Label>
                <Input 
                  id="code" 
                  placeholder="ej: PROMO2024"
                  value={newPromotion.code}
                  onChange={(e) => setNewPromotion({ ...newPromotion, code: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-white">Fecha Inicio *</Label>
                  <Input 
                    id="startDate" 
                    type="date" 
                    value={newPromotion.startDate}
                    onChange={(e) => setNewPromotion({ ...newPromotion, startDate: e.target.value })}
                    className="bg-[#2d1810] border-white/20 text-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-white">Fecha Fin *</Label>
                  <Input 
                    id="endDate" 
                    type="date" 
                    value={newPromotion.endDate}
                    onChange={(e) => setNewPromotion({ ...newPromotion, endDate: e.target.value })}
                    className="bg-[#2d1810] border-white/20 text-white" 
                  />
                </div>
              </div>
              <Button 
                onClick={handleSavePromotion}
                className="w-full bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold h-[44px]"
              >
                {editingPromotion ? "Actualizar Promoción" : "Guardar Promoción"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className={`bg-[#3d1e12] rounded-2xl shadow-xl border overflow-hidden hover:scale-105 transition-all duration-300 p-6 ${
              promo.active ? "border-[#FFD740]/50" : "border-white/10 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Tag className={`w-6 h-6 ${promo.active ? "text-[#FFD740]" : "text-white/40"}`} />
                <h3 className="font-oswald text-xl font-bold text-[#FFD740]">
                  {promo.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor={`active-${promo.id}`} className="text-xs text-white/60">
                  {promo.active ? "Activa" : "Inactiva"}
                </Label>
                <Switch
                  id={`active-${promo.id}`}
                  checked={promo.active}
                  onCheckedChange={() => handleToggleActive(promo.id)}
                />
              </div>
            </div>
            
            <p className="text-white/80 text-sm mb-3">{promo.description}</p>
            
            <div className="bg-[#2d1810] rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-xs">Descuento:</span>
                <span className="text-[#FFD740] font-bold text-lg">{promo.discount}</span>
              </div>
              {promo.code && (
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs">Código:</span>
                  <span className="text-white font-mono text-sm bg-[#3d1e12] px-2 py-1 rounded">
                    {promo.code}
                  </span>
                </div>
              )}
            </div>
            
            <div className="text-white/50 text-xs mb-4">
              <div>Inicio: {new Date(promo.startDate).toLocaleDateString('es-HN')}</div>
              <div>Fin: {new Date(promo.endDate).toLocaleDateString('es-HN')}</div>
            </div>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => handleEditPromotion(promo)}
                className="flex-1 bg-[#FFD740]/20 hover:bg-[#FFD740]/30 text-[#FFD740] border border-[#FFD740]/50 h-[44px]"
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                onClick={() => handleDeletePromotion(promo.id, promo.title)}
                className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 h-[44px]"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsManagement;
