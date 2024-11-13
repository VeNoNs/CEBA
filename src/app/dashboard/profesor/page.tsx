// src/app/dashboard/profesor/reportes/page.tsx
"use client";

const ReportesPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Reportes del Profesor</h1>
      <p className="mb-6 text-lg text-[#2E2E2E]">
        Aquí puedes revisar un resumen de estadísticas importantes de tus clases y estudiantes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Número de estudiantes */}
        <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-[#4A6472]">Total de Estudiantes</h2>
          <p className="text-3xl font-bold text-[#C89D5A] mt-4">120</p>
          <span className="text-sm text-[#2E2E2E]">Estudiantes activos en tus clases</span>
        </div>

        {/* Promedio de Calificaciones */}
        <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-[#4A6472]">Promedio de Calificaciones</h2>
          <p className="text-3xl font-bold text-[#C89D5A] mt-4">85%</p>
          <span className="text-sm text-[#2E2E2E]">Calificación media de tus estudiantes</span>
        </div>

        {/* Asistencia Media */}
        <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-[#4A6472]">Asistencia Media</h2>
          <p className="text-3xl font-bold text-[#C89D5A] mt-4">92%</p>
          <span className="text-sm text-[#2E2E2E]">Asistencia promedio en todas tus clases</span>
        </div>

        {/* Número de Clases */}
        <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-[#4A6472]">Número de Clases</h2>
          <p className="text-3xl font-bold text-[#C89D5A] mt-4">6</p>
          <span className="text-sm text-[#2E2E2E]">Clases que estás enseñando este semestre</span>
        </div>

        {/* Calificaciones Destacadas */}
        <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-[#4A6472]">Estudiantes con Mejores Calificaciones</h2>
          <p className="text-3xl font-bold text-[#C89D5A] mt-4">15</p>
          <span className="text-sm text-[#2E2E2E]">Estudiantes con un promedio superior al 90%</span>
        </div>

        {/* Clases con Mejor Asistencia */}
        <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold text-[#4A6472]">Clases con Mayor Asistencia</h2>
          <p className="text-3xl font-bold text-[#C89D5A] mt-4">Historia y Matemáticas</p>
          <span className="text-sm text-[#2E2E2E]">Clases con asistencia superior al 95%</span>
        </div>
      </div>
    </div>
  );
};

export default ReportesPage;
