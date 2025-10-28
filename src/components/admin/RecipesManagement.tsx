import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import recipeImage from "@/assets/currywurst-recipe-main.png";

interface Recipe {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  steps: string[];
}

const RecipesManagement = () => {
  const { toast } = useToast();
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      name: "Currywurst Clásica",
      image: recipeImage,
      ingredients: ["Salchichas alemanas", "Salsa curry", "Papas fritas"],
      steps: ["Cocinar salchichas", "Preparar salsa", "Servir con papas"],
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    steps: "",
  });

  const handleSaveRecipe = () => {
    if (!newRecipe.name || !newRecipe.ingredients) {
      toast({
        title: "Error",
        description: "Por favor completa el nombre y los ingredientes",
        variant: "destructive",
      });
      return;
    }

    if (editingRecipe) {
      // Editar receta existente
      const updatedRecipes = recipes.map(recipe =>
        recipe.id === editingRecipe.id
          ? {
              ...recipe,
              name: newRecipe.name,
              ingredients: newRecipe.ingredients.split('\n').filter(i => i.trim()),
              steps: newRecipe.steps.split('\n').filter(s => s.trim()),
            }
          : recipe
      );
      setRecipes(updatedRecipes);
      toast({
        title: "Receta actualizada",
        description: `${newRecipe.name} ha sido actualizada exitosamente`,
      });
    } else {
      // Crear nueva receta
      const recipe: Recipe = {
        id: recipes.length + 1,
        name: newRecipe.name,
        image: recipeImage,
        ingredients: newRecipe.ingredients.split('\n').filter(i => i.trim()),
        steps: newRecipe.steps.split('\n').filter(s => s.trim()),
      };
      setRecipes([...recipes, recipe]);
      toast({
        title: "Receta creada",
        description: `${recipe.name} ha sido agregada exitosamente`,
      });
    }

    setIsDialogOpen(false);
    setEditingRecipe(null);
    setNewRecipe({ name: "", ingredients: "", steps: "" });
  };

  const handleDeleteRecipe = (id: number, name: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
    toast({
      title: "Receta eliminada",
      description: `${name} ha sido eliminada`,
    });
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setNewRecipe({
      name: recipe.name,
      ingredients: recipe.ingredients.join('\n'),
      steps: recipe.steps.join('\n'),
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-oswald text-4xl font-bold text-white">
          Gestión de Recetas
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingRecipe(null);
            setNewRecipe({ name: "", ingredients: "", steps: "" });
          }
        }}>
          <DialogTrigger asChild>
            <Button 
              className="bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold rounded-xl px-6 h-[44px] gap-2 shadow-lg hover:shadow-[#FFD740]/50 transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Nueva Receta
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#3d1e12] border-[#FFD740] text-white">
            <DialogHeader>
              <DialogTitle className="font-oswald text-2xl text-[#FFD740]">
                {editingRecipe ? "Editar Receta" : "Agregar Nueva Receta"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="recipeName" className="text-white">Nombre de la Receta</Label>
                <Input 
                  id="recipeName" 
                  value={newRecipe.name}
                  onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="ingredients" className="text-white">Ingredientes (uno por línea)</Label>
                <textarea 
                  id="ingredients" 
                  rows={4}
                  value={newRecipe.ingredients}
                  onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
                  className="w-full bg-[#2d1810] border border-white/20 text-white rounded-md p-2"
                />
              </div>
              <div>
                <Label htmlFor="steps" className="text-white">Pasos de Preparación</Label>
                <textarea 
                  id="steps" 
                  rows={4}
                  value={newRecipe.steps}
                  onChange={(e) => setNewRecipe({ ...newRecipe, steps: e.target.value })}
                  className="w-full bg-[#2d1810] border border-white/20 text-white rounded-md p-2"
                />
              </div>
              <Button 
                onClick={handleSaveRecipe}
                className="w-full bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold h-[44px]"
              >
                {editingRecipe ? "Actualizar Receta" : "Guardar Receta"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-[#3d1e12] rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:border-[#FFD740]/50 transition-all duration-300 hover:scale-105"
            style={{ width: "280px", height: "360px" }}
          >
            <div className="h-[220px] overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-oswald text-xl font-bold text-[#FFD740] mb-2">
                {recipe.name}
              </h3>
              <p className="text-white/60 text-sm mb-3">
                {recipe.ingredients.length} ingredientes
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleEditRecipe(recipe)}
                  className="flex-1 bg-[#FFD740]/20 hover:bg-[#FFD740]/30 text-[#FFD740] border border-[#FFD740]/50 h-[44px]"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDeleteRecipe(recipe.id, recipe.name)}
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

export default RecipesManagement;
