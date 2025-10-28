import { useState } from "react";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import beerBottle1 from "@/assets/beer-bottle-la-jefa.png";
import beerBottle2 from "@/assets/beer-bottle-aleros.png";
import beerBottle3 from "@/assets/beer-bottle-el-chele.png";

interface Beer {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  ibu: number;
  size: string;
  available: boolean;
}

const BeersManagement = () => {
  const { toast } = useToast();
  const [beers, setBeers] = useState<Beer[]>([
    {
      id: 1,
      name: "La Jefa",
      type: "IPA",
      description: "Cerveza artesanal con carácter intenso",
      image: beerBottle1,
      ibu: 45,
      size: "355ml",
      available: true,
    },
    {
      id: 2,
      name: "Aleros",
      type: "Lager",
      description: "Suave y refrescante para cualquier ocasión",
      image: beerBottle2,
      ibu: 20,
      size: "355ml",
      available: true,
    },
    {
      id: 3,
      name: "El Chele",
      type: "Wheat",
      description: "Cerveza de trigo con notas cítricas",
      image: beerBottle3,
      ibu: 18,
      size: "355ml",
      available: true,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newBeer, setNewBeer] = useState({
    name: "",
    type: "",
    description: "",
    ibu: 0,
    size: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/png") {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setNewBeer({ ...newBeer, image: result });
      };
      reader.readAsDataURL(file);
    } else {
      toast({
        title: "Error",
        description: "Por favor selecciona un archivo PNG",
        variant: "destructive",
      });
    }
  };

  const handleSaveBeer = () => {
    if (!newBeer.name || !newBeer.type || !newBeer.image) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    const beer: Beer = {
      id: beers.length + 1,
      name: newBeer.name,
      type: newBeer.type,
      description: newBeer.description,
      image: newBeer.image,
      ibu: newBeer.ibu,
      size: newBeer.size,
      available: true,
    };

    setBeers([...beers, beer]);
    setIsDialogOpen(false);
    setNewBeer({ name: "", type: "", description: "", ibu: 0, size: "", image: "" });
    setImagePreview("");
    
    toast({
      title: "Cerveza agregada",
      description: `${beer.name} ha sido agregada exitosamente`,
    });
  };

  const handleDeleteBeer = (id: number, name: string) => {
    setBeers(beers.filter(beer => beer.id !== id));
    toast({
      title: "Cerveza eliminada",
      description: `${name} ha sido eliminada`,
    });
  };

  const handleEditBeer = (beer: Beer) => {
    toast({
      title: "Editar cerveza",
      description: `Funcionalidad de edición para ${beer.name} próximamente`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-oswald text-4xl font-bold text-white">
          Gestión de Cervezas
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold rounded-xl px-6 h-[44px] gap-2 shadow-lg hover:shadow-[#FFD740]/50 transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Nueva Cerveza
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#3d1e12] border-[#FFD740] text-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-oswald text-2xl text-[#FFD740]">
                Agregar Nueva Cerveza
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name" className="text-white">Nombre *</Label>
                <Input 
                  id="name" 
                  value={newBeer.name}
                  onChange={(e) => setNewBeer({ ...newBeer, name: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="type" className="text-white">Tipo *</Label>
                <Input 
                  id="type" 
                  value={newBeer.type}
                  onChange={(e) => setNewBeer({ ...newBeer, type: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-white">Descripción</Label>
                <Input 
                  id="description" 
                  value={newBeer.description}
                  onChange={(e) => setNewBeer({ ...newBeer, description: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ibu" className="text-white">IBU</Label>
                  <Input 
                    id="ibu" 
                    type="number" 
                    value={newBeer.ibu || ""}
                    onChange={(e) => setNewBeer({ ...newBeer, ibu: parseInt(e.target.value) || 0 })}
                    className="bg-[#2d1810] border-white/20 text-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="size" className="text-white">Tamaño</Label>
                  <Input 
                    id="size" 
                    value={newBeer.size}
                    onChange={(e) => setNewBeer({ ...newBeer, size: e.target.value })}
                    className="bg-[#2d1810] border-white/20 text-white" 
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="image" className="text-white">Imagen (PNG) *</Label>
                <div className="mt-2">
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 hover:border-[#FFD740] transition-colors flex flex-col items-center justify-center gap-2">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="h-32 w-auto object-contain" />
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-[#FFD740]" />
                          <span className="text-white/60 text-sm">Click para subir PNG</span>
                        </>
                      )}
                    </div>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept=".png,image/png"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>
              <Button 
                onClick={handleSaveBeer}
                className="w-full bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold h-[44px]"
              >
                Guardar Cerveza
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beers.map((beer) => (
          <div
            key={beer.id}
            className="bg-[#3d1e12] rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:border-[#FFD740]/50 transition-all duration-300 hover:scale-105"
            style={{ width: "280px", height: "360px" }}
          >
            <div className="h-[220px] bg-gradient-to-b from-[#2d1810] to-[#3d1e12] flex items-center justify-center p-4">
              <img
                src={beer.image}
                alt={beer.name}
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="p-4">
              <h3 className="font-oswald text-xl font-bold text-[#FFD740] mb-1">
                {beer.name}
              </h3>
              <p className="text-white/60 text-sm mb-3">{beer.type} • {beer.ibu} IBU</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleEditBeer(beer)}
                  className="flex-1 bg-[#FFD740]/20 hover:bg-[#FFD740]/30 text-[#FFD740] border border-[#FFD740]/50 h-[44px]"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDeleteBeer(beer.id, beer.name)}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 h-[44px]"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeersManagement;
