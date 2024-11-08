// components/ScholarshipsSection.tsx
"use client";
import "@/animation/ScholarshipsSection.css";

const ScholarshipsSection = () => (
  <section
    id="scholarships"
    className="scholarships-section min-h-screen flex flex-col items-center justify-center bg-[#E6D8C3] text-center px-6 py-20 md:px-12 lg:px-24"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 title-animation">
      Becas y Oportunidades
    </h2>
    
    <p className="text-lg md:text-xl text-[#4A6472] max-w-3xl mb-12 leading-relaxed fade-in">
      Ofrecemos diversas oportunidades de becas para estudiantes destacados y aquellos con necesidad económica. Descubre cómo puedes acceder a nuestros programas de apoyo.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
      {["Beca de Excelencia", "Beca de Inclusión", "Beca de Deportes"].map((scholarship, index) => (
        <div key={index} className="scholarship-card fade-in shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 className="text-2xl font-semibold text-[#2E2E2E] mb-4">{scholarship}</h3>
          <p className="text-md text-[#4A6472]">
            {scholarship === "Beca de Excelencia" && "Para estudiantes con alto rendimiento académico."}
            {scholarship === "Beca de Inclusión" && "Para estudiantes que requieren apoyo financiero adicional."}
            {scholarship === "Beca de Deportes" && "Para atletas destacados en distintas disciplinas."}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ScholarshipsSection;
