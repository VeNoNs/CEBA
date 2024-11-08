// components/miscelanios/WhatsAppButton.tsx
"use client";
import { FaWhatsapp } from "react-icons/fa";
import "@/animation/WhatsAppButton.css"; // Importa el archivo de CSS

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491234567890" // Cambia el número de teléfono
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 whatsapp-button-animation"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
