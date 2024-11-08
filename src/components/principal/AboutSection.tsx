// components/AboutSection.tsx
"use client";
import Image from "next/image";
import "@/animation/AboutSection.css"; // Archivo CSS para animaciones y estilos

const AboutSection = () => (
  <section
    id="about"
    className="about-section relative min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-20 md:px-12 lg:px-24"
  >
    {/* Encabezado con animación */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 fade-in">
      Conócenos
    </h2>
    
    {/* Descripción con animación */}
    <p className="text-lg md:text-xl text-[#4A6472] max-w-3xl mb-12 leading-relaxed slide-in">
      En CEBA, brindamos educación básica alternativa para jóvenes y adultos. Si
      no has terminado tus estudios, aquí te ofrecemos la oportunidad de hacerlo
      en un ambiente flexible y de apoyo. Con más de 22 años de experiencia, 
      estamos dedicados a ayudarte a alcanzar tus metas académicas.
    </p>

    {/* Imagen del director con estilo circular y sombra */}
    <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#C89D5A] shadow-lg hover:scale-105 transform transition duration-500 ease-in-out fade-in">
      <Image
        src="/assets/director.webp" // Cambia esto a la ruta de tu imagen
        alt="Director de la Institución"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </section>
);

export default AboutSection;
