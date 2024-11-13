// pages/dashboard/estudiante/asistencias/page.tsx
"use client";

import { useState } from "react";
import AsistenciaModal from "@/components/dashboard/estudiante/AsistenciaModal";

const cursos = [
  { id: 1, nombre: "Matemáticas" },
  { id: 2, nombre: "Ciencias" },
  { id: 3, nombre: "Historia" },
  { id: 4, nombre: "Inglés" },
];

const EstudianteAsistenciasPage = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<{ id: number; nombre: string } | null>(null);

  const abrirModal = (curso: { id: number; nombre: string }) => {
    setCursoSeleccionado(curso);
  };

  const cerrarModal = () => {
    setCursoSeleccionado(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Mis Asistencias</h1>
      <p className="text-lg text-[#2E2E2E] mb-4">Selecciona un curso para ver tus registros de asistencia.</p>
      <div className="grid grid-cols-2 gap-4">
        {cursos.map((curso) => (
          <button
            key={curso.id}
            onClick={() => abrirModal(curso)}
            className="p-4 bg-[#E6D8C3] text-[#4A6472] rounded-lg shadow-lg hover:bg-[#C89D5A] hover:text-white transition-all font-semibold"
          >
            {curso.nombre}
          </button>
        ))}
      </div>

      {cursoSeleccionado && (
        <AsistenciaModal curso={cursoSeleccionado} onClose={cerrarModal} />
      )}
    </div>
  );
};

export default EstudianteAsistenciasPage;
