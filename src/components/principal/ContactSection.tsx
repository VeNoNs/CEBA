// components/ContactSection.tsx
"use client";
import "@/animation/ContactSection.css";

const ContactSection = () => (
  <section
    id="contact"
    className="contact-section min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-20 md:px-12 lg:px-24"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 title-animation">
      Contáctanos
    </h2>
    
    <p className="text-lg md:text-xl text-[#4A6472] max-w-3xl mb-12 leading-relaxed fade-in">
      Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
    </p>

    <form className="contact-form max-w-xl w-full space-y-6">
      <input
        type="text"
        placeholder="Nombre Completo"
        className="input-field w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4A6472] fade-in"
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        className="input-field w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4A6472] fade-in"
      />
      <textarea
        placeholder="Mensaje"
        rows={5}
        className="input-field w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4A6472] fade-in"
      ></textarea>
      <button
        type="submit"
        className="submit-button w-full py-3 bg-[#C89D5A] text-white font-semibold rounded-lg shadow-lg hover:bg-[#FEC600] transition-colors fade-in"
      >
        Enviar Mensaje
      </button>
    </form>
  </section>
);

export default ContactSection;
