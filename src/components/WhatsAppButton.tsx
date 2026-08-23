import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola 👋, quiero cotizar productos promocionales que vi en su página.");
    const phoneNumber = "573195251237"; // Reemplazar con el número real de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-pulse-glow"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Cotizar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="text-white font-semibold text-sm hidden sm:inline">
        Cotiza por WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;
