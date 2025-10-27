import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import laMetichePhone from "@/assets/catalog/la-metiche-phone.png";
import wavyPattern from "@/assets/wavy-pattern-brown.png";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100),
  phone: z.string().trim().min(8, { message: "Teléfono inválido" }).max(20),
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255),
  message: z.string().trim().min(1, { message: "El mensaje es requerido" }).max(1000),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
});

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);

      // Encode data for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*Nuevo contacto desde la web*\n\n` +
        `*Nombre:* ${formData.name}\n` +
        `*Teléfono:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Mensaje:* ${formData.message}`
      );

      window.open(`https://wa.me/50425441111?text=${whatsappMessage}`, '_blank');

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        acceptTerms: false,
      });
      setErrors({});
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden rounded-[32px] bg-[#F5F1E8]">
        <DialogTitle className="sr-only">Formulario de Contacto</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Column - Form */}
          <div className="pr-3">
            <h2 className="text-4xl font-black text-black mb-6 font-oswald tracking-tight">
              CONTÁCTANOS
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black font-medium text-sm uppercase font-outfit">
                  Nombre y Apellido
                </Label>
                <Input
                  id="name"
                  placeholder="Ej. Carlos López"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-gray-300 bg-gray-100/50 text-black rounded-xl h-12 placeholder:text-gray-800"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-black font-medium text-sm uppercase font-outfit">
                  Teléfono
                </Label>
                <div className="flex gap-2">
                  <div className="w-28">
                    <Input
                      value="+504"
                      disabled
                      className="border-gray-300 bg-gray-100/50 text-black text-center font-semibold rounded-xl h-12"
                    />
                  </div>
                  <Input
                    id="phone"
                    placeholder="Ej. 2544-11 11"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-gray-300 bg-gray-100/50 text-black flex-1 rounded-xl h-12 placeholder:text-gray-800"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-medium text-sm uppercase font-outfit">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ej. carlos@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-300 bg-gray-100/50 text-black rounded-xl h-12 placeholder:text-gray-800"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-black font-medium text-sm uppercase font-outfit">
                  ¿En qué podemos ayudarte?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-gray-300 bg-gray-100/50 text-black min-h-[100px] resize-none rounded-xl placeholder:text-gray-800"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                  className="mt-1 border-2 border-black data-[state=checked]:bg-yellow-400 data-[state=checked]:border-black w-6 h-6 rounded-sm"
                />
                <Label
                  htmlFor="terms"
                  className="text-black text-sm leading-tight cursor-pointer"
                >
                  He leído y estoy de acuerdo con la{" "}
                  <span className="underline font-semibold">política de privacidad</span>, y los{" "}
                  <span className="underline font-semibold">términos y condiciones</span>.
                </Label>
              </div>
              {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xl py-7 rounded-full border-0 font-outfit tracking-wide shadow-lg"
              >
                ENVIAR MENSAJE
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div
            className="rounded-[24px] p-6 pb-0 text-white relative overflow-hidden flex flex-col min-h-[500px]"
            style={{
              backgroundColor: "#8B4513",
              backgroundImage: `url(${wavyPattern})`,
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          >
            <h3
              className="text-4xl font-black mb-4 text-center leading-[1.1] font-oswald text-white relative z-10"
              style={{ textShadow: '4px 4px 0px #8B3A14' }}
            >
              ¿PREFIERES<br />CONTACTARNOS?
            </h3>

            <div className="space-y-3 z-10 mb-4">
              {/* Phone */}
              <div className="bg-white rounded-full px-8 py-4 flex items-center justify-center gap-3 shadow-lg">
                <Phone className="w-5 h-5 text-black" />
                <span className="text-black font-bold text-base">+504 2544-11 11</span>
              </div>

              {/* Location */}
              <div className="bg-white rounded-full px-8 py-4 flex items-center justify-center gap-3 shadow-lg">
                <MapPin className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black font-semibold text-sm leading-tight text-center">
                  Barrio la Guardia avenida circunvalación a la par de la Pepsi
                </span>
              </div>
            </div>

            {/* Character Illustration */}
            <div className="flex-1 flex items-end justify-center relative z-10 -mb-6">
              <img
                src={laMetichePhone}
                alt="La Metiche"
                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                style={{ maxWidth: 'none' }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
