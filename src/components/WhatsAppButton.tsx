import { useState } from "react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "5565996961418"; // Número oficial do WhatsApp
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="text-white h-8 w-8"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M13.601 2.326A7.706 7.706 0 0 0 8.096.03 7.723 7.723 0 0 0 .337 7.745c0 1.366.381 2.703 1.104 3.868L0 16l4.48-1.172a7.71 7.71 0 0 0 3.616.924h.003a7.723 7.723 0 0 0 7.759-7.715 7.707 7.707 0 0 0-2.257-5.711ZM8.1 14.569a6.443 6.443 0 0 1-3.285-.9l-.235-.14-2.662.696.712-2.587-.154-.266a6.439 6.439 0 0 1-.974-3.44A6.443 6.443 0 1 1 8.1 14.569Z"/>
            <path d="M12.01 9.69c-.206-.103-1.206-.594-1.393-.661-.187-.068-.324-.103-.461.103-.137.206-.53.661-.649.797-.119.137-.237.154-.443.051-.206-.103-.868-.32-1.652-1.021-.61-.543-1.021-1.213-1.14-1.419-.119-.206-.013-.317.09-.42.093-.092.206-.237.309-.356.103-.119.137-.205.206-.342.068-.137.034-.256-.017-.358-.051-.103-.461-1.111-.63-1.519-.166-.4-.334-.345-.461-.351-.119-.007-.256-.007-.393-.007s-.358.051-.547.256c-.187.206-.716.699-.716 1.706s.734 1.98.835 2.118c.103.137 1.446 2.204 3.51 3.09.491.212.875.339 1.173.435.493.157.943.135 1.299.082.396-.059 1.206-.491 1.377-.966.17-.475.17-.881.119-.965-.051-.084-.187-.137-.393-.24Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
