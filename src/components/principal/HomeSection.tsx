// components/HomeSection.tsx
"use client";
import Image from "next/image";
import "@/animation/HomeSection.css";

const HomeSection = () => {
  return (
    <section className="home-section relative min-h-screen flex flex-col items-center justify-center bg-[#4A6472] overflow-hidden">
      {/* Imagen de Fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/assets/CEBA-Minedu.jpg"
          alt="Estudiante en clase"
          fill
          sizes="100vw"
          quality={100}
          className="opacity-60 object-cover"
          priority
        />
      </div>

      {/* Texto Animado */}
      <div className="relative z-10 max-w-3xl text-center px-6 md:px-10 lg:px-20 text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FEC600] title-animation">
          CEBA Francisco Bolognesi
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white subtitle-animation">
          "Termina el colegio"
        </h2>
        <p className="text-lg md:text-xl text-[#E6D8C3] mt-4 text-animation">
          Estudia con nosotros y accede a becas
        </p>
      </div>

      {/* Botón Animado */}
      <button className="mt-10 px-8 py-3 bg-[#C89D5A] text-white font-semibold rounded-lg shadow-lg hover:bg-[#FEC600] transition-colors button-animation">
        Comienza Ahora
      </button>
    </section>
  );
};

export default HomeSection;
