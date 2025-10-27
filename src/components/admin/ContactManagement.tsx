import { useState } from "react";
import { Save, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactManagement = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "contacto@la20cerveceria.com",
    phone: "+504 1234-5678",
    address: "Col. Palmira, Tegucigalpa, Honduras",
    facebook: "facebook.com/la20cerveceria",
    instagram: "@la20cerveceria",
  });

  const handleSave = () => {
    toast.success("Información de contacto actualizada correctamente");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="font-oswald text-4xl font-bold text-white mb-2">
          Información de Contacto
        </h1>
        <p className="text-white/60">
          Actualiza los datos de contacto de la cervecería
        </p>
      </div>

      <div className="bg-[#3d1e12] rounded-2xl shadow-xl border border-white/10 p-8">
        <div className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-white flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#FFD740]" />
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="bg-[#2d1810] border-white/20 text-white h-[44px]"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-[#FFD740]" />
              Teléfono
            </Label>
            <Input
              id="phone"
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              className="bg-[#2d1810] border-white/20 text-white h-[44px]"
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-white flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#FFD740]" />
              Dirección
            </Label>
            <Input
              id="address"
              value={contactInfo.address}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
              className="bg-[#2d1810] border-white/20 text-white h-[44px]"
            />
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="font-oswald text-xl font-bold text-[#FFD740] mb-4">
              Redes Sociales
            </h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="facebook" className="text-white flex items-center gap-2 mb-2">
                  <Facebook className="w-4 h-4 text-[#FFD740]" />
                  Facebook
                </Label>
                <Input
                  id="facebook"
                  value={contactInfo.facebook}
                  onChange={(e) => setContactInfo({ ...contactInfo, facebook: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white h-[44px]"
                />
              </div>

              <div>
                <Label htmlFor="instagram" className="text-white flex items-center gap-2 mb-2">
                  <Instagram className="w-4 h-4 text-[#FFD740]" />
                  Instagram
                </Label>
                <Input
                  id="instagram"
                  value={contactInfo.instagram}
                  onChange={(e) => setContactInfo({ ...contactInfo, instagram: e.target.value })}
                  className="bg-[#2d1810] border-white/20 text-white h-[44px]"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleSave}
            className="w-full bg-[#FFD740] hover:bg-[#FFA000] text-[#3d1e12] font-bold h-[44px] gap-2 shadow-lg hover:shadow-[#FFD740]/50 transition-all duration-300 mt-6"
          >
            <Save className="w-5 h-5" />
            Guardar Cambios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactManagement;
