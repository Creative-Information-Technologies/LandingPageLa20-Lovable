import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import BeersManagement from "@/components/admin/BeersManagement";
import ArticlesManagement from "@/components/admin/ArticlesManagement";
import RecipesManagement from "@/components/admin/RecipesManagement";
import PromotionsManagement from "@/components/admin/PromotionsManagement";
import ContactManagement from "@/components/admin/ContactManagement";
import AdminDashboard from "@/components/admin/AdminDashboard";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <AdminDashboard />;
      case "beers":
        return <BeersManagement />;
      case "articles":
        return <ArticlesManagement />;
      case "recipes":
        return <RecipesManagement />;
      case "promotions":
        return <PromotionsManagement />;
      case "contact":
        return <ContactManagement />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#2d1810]">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-8 overflow-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
