// components/StatsSection.tsx
"use client";
import "@/animation/StatsSection.css"; // Archivo CSS para las animaciones y estilos

const StatsSection = () => (
  <section
    id="stats"
    className="stats-section min-h-screen flex flex-col items-center justify-center bg-[#E6D8C3] px-6 py-20"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-10 title-animation">
      Estadísticas de Nuestra Institución
    </h2>
    <p className="text-lg md:text-xl text-[#4A6472] max-w-2xl text-center mb-12">
      Nuestro compromiso y dedicación se reflejan en las cifras de nuestros estudiantes y en el impacto positivo que generamos. Aquí tienes un vistazo a nuestras estadísticas.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
      <div className="stat-card fade-in">
        <h3 className="text-3xl font-bold text-[#FEC600]">+1,000</h3>
        <p className="text-lg text-[#2E2E2E]">Estudiantes Graduados</p>
      </div>
      <div className="stat-card fade-in delay-1">
        <h3 className="text-3xl font-bold text-[#FEC600]">95%</h3>
        <p className="text-lg text-[#2E2E2E]">Tasa de Aprobación</p>
      </div>
      <div className="stat-card fade-in delay-2">
        <h3 className="text-3xl font-bold text-[#FEC600]">+50</h3>
        <p className="text-lg text-[#2E2E2E]">Docentes Altamente Capacitados</p>
      </div>
      <div className="stat-card fade-in delay-3">
        <h3 className="text-3xl font-bold text-[#FEC600]">+20</h3>
        <p className="text-lg text-[#2E2E2E]">Años de Experiencia</p>
      </div>
      <div className="stat-card fade-in delay-4">
        <h3 className="text-3xl font-bold text-[#FEC600]">+200</h3>
        <p className="text-lg text-[#2E2E2E]">Proyectos de Impacto</p>
      </div>
      <div className="stat-card fade-in delay-5">
        <h3 className="text-3xl font-bold text-[#FEC600]">+90%</h3>
        <p className="text-lg text-[#2E2E2E]">Satisfacción de Padres</p>
      </div>
    </div>
  </section>
);

export default StatsSection;
