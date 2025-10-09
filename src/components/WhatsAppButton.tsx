import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "5511999999999"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de solicitar um orçamento para energia solar.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-48 animate-fade-in">
            <div className="bg-foreground text-background px-4 py-2 rounded-lg shadow-strong text-sm">
              Fale conosco no WhatsApp!
              <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
            </div>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleClick}
          className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-soft hover:shadow-strong flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="Contato via WhatsApp"
        >
          <i className="bi bi-whatsapp text-white text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
