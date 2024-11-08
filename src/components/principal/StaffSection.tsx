// components/StaffSection.tsx
"use client";
import Image from "next/image";
import "@/animation/StaffSection.css"; // Archivo CSS para las animaciones y estilos

const StaffSection = () => (
  <section
    id="staff"
    className="staff-section min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20"
  >
    {/* Título con animación */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-10 title-animation">
      Nuestro Equipo Docente
    </h2>
    
    <p className="text-lg md:text-xl text-[#4A6472] max-w-2xl text-center mb-12 fade-in">
      Contamos con un equipo de docentes calificados y comprometidos con el aprendizaje de nuestros estudiantes. Cada uno de ellos aporta su experiencia y conocimiento para brindar una educación de calidad.
    </p>

    {/* Tarjetas de Docentes */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
      {[
        { name: "Prof. Juan Pérez", role: "Matemáticas", image: "/assets/director.webp" },
        { name: "Prof. María López", role: "Lenguaje", image: "/assets/director.webp" },
        { name: "Prof. Carlos Rojas", role: "Ciencias", image: "/assets/director.webp" },
        { name: "Prof. Ana Castillo", role: "Historia", image: "/assets/director.webp" },
        { name: "Prof. Luis Vargas", role: "Educación Física", image: "/assets/director.webp" },
        { name: "Prof. Sofía Sánchez", role: "Inglés", image: "/assets/director.webp" },
      ].map((staff, index) => (
        <div key={index} className="staff-card fade-in">
          <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
            <Image
              src={staff.image}
              alt={`Foto de ${staff.name}`}
              layout="fill"
              objectFit="cover"
              className="staff-image"
            />
          </div>
          <div className="p-4 bg-white rounded-b-lg text-center shadow-lg">
            <h3 className="text-2xl font-semibold text-[#2E2E2E]">{staff.name}</h3>
            <p className="text-md text-[#4A6472]">{staff.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StaffSection;
