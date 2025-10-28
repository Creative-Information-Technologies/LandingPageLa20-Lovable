import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import blogImage1 from "@/assets/blog-currywurst-main.png";
import blogImage2 from "@/assets/blog-cerveza-artesanal.png";

interface Article {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
}

const ArticlesManagement = () => {
  const { toast } = useToast();
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Currywurst: La Receta Perfecta",
      image: blogImage1,
      date: "2024-01-15",
      excerpt: "Descubre cómo preparar este clásico alemán en casa",
    },
    {
      id: 2,
      title: "El Arte de la Cerveza Artesanal",
      image: blogImage2,
      date: "2024-01-10",
      excerpt: "Todo sobre el proceso de elaboración",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    date: "",
  });

  const handleSaveArticle = () => {
    if (!newArticle.title || !newArticle.date) {
      toast({
        title: "Error",
        description: "Por favor completa el título y la fecha",
        variant: "destructive",
      });
      return;
    }

    if (editingArticle) {
      // Editar artículo existente
      const updatedArticles = articles.map(article =>
        article.id === editingArticle.id
          ? {
              ...article,
              title: newArticle.title,
              date: newArticle.date,
              excerpt: newArticle.content.substring(0, 100),
            }
          : article
      );
      setArticles(updatedArticles);
      toast({
        title: "Artículo actualizado",
        description: `${newArticle.title} ha sido actualizado exitosamente`,
      });
    } else {
      // Crear nuevo artículo
      const article: Article = {
        id: articles.length + 1,
        title: newArticle.title,
        image: blogImage1,
        date: newArticle.date,
        excerpt: newArticle.content.substring(0, 100),
      };
      setArticles([...articles, article]);
      toast({
        title: "Artículo creado",
        description: `${article.title} ha sido publicado exitosamente`,
      });
    }

    setIsDialogOpen(false);
    setEditingArticle(null);
    setNewArticle({ title: "", content: "", date: "" });
  };

  const handleDeleteArticle = (id: number, title: string) => {
    setArticles(articles.filter(article => article.id !== id));
    toast({
      title: "Artículo eliminado",
      description: `${title} ha sido eliminado`,
    });
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setNewArticle({
      title: article.title,
      content: article.excerpt,
      date: article.date,
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-oswald text-4xl font-bold text-white">
          Gestión de Artículos
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setEditingArticle(null);
            setNewArticle({ title: "", content: "", date: "" });
          }
        }}>
          <DialogTrigger asChild>
            <Button 
              className="bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold rounded-xl px-6 h-[44px] gap-2 shadow-lg hover:shadow-[#FFD740]/50 transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              Nuevo Artículo
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#3d1e12] border-[#FFD740] text-white">
            <DialogHeader>
              <DialogTitle className="font-oswald text-2xl text-[#FFD740]">
                {editingArticle ? "Editar Artículo" : "Crear Nuevo Artículo"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="title" className="text-white">Título</Label>
                <Input 
                  id="title" 
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <div>
                <Label htmlFor="content" className="text-white">Contenido</Label>
                <textarea 
                  id="content" 
                  rows={4}
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  className="w-full bg-[#2d1810] border border-white/20 text-white rounded-md p-2"
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-white">Fecha</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={newArticle.date}
                  onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white" 
                />
              </div>
              <Button 
                onClick={handleSaveArticle}
                className="w-full bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold h-[44px]"
              >
                {editingArticle ? "Actualizar Artículo" : "Publicar Artículo"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#3d1e12] rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:border-[#FFD740]/50 transition-all duration-300 hover:scale-105"
            style={{ width: "280px", height: "360px" }}
          >
            <div className="h-[220px] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-oswald text-lg font-bold text-[#FFD740] mb-1 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-white/60 text-xs mb-3">{article.date}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleEditArticle(article)}
                  className="flex-1 bg-[#FFD740]/20 hover:bg-[#FFD740]/30 text-[#FFD740] border border-[#FFD740]/50 h-[44px]"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDeleteArticle(article.id, article.title)}
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

export default ArticlesManagement;
