// pages/dashboard/estudiante/examenes.tsx
"use client";

import { useState } from "react";
import ExamenesModal from "@/components/dashboard/estudiante/ExamenesModal";

// Define los tipos de curso y examen
type Curso = { id: number; nombre: string };
type Examen = { nombre: string; fecha: string; nota: number };

// Datos estáticos de los cursos y exámenes
const cursos: Curso[] = [
  { id: 1, nombre: "Matemáticas" },
  { id: 2, nombre: "Ciencias" },
  { id: 3, nombre: "Historia" },
];

const examenesPorCurso: { [key: number]: Examen[] } = {
  1: [
    { nombre: "Examen Parcial", fecha: "2024-11-01", nota: 15 },
    { nombre: "Examen Final", fecha: "2024-11-15", nota: 18 },
  ],
  2: [
    { nombre: "Examen Parcial", fecha: "2024-11-05", nota: 14 },
    { nombre: "Examen Final", fecha: "2024-11-20", nota: 16 },
  ],
  3: [
    { nombre: "Examen Único", fecha: "2024-12-10", nota: 19 },
  ],
};

const ExamenesPage = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<Curso | null>(null);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Exámenes y Notas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-[#E6D8C3] p-4 rounded-lg shadow-md cursor-pointer hover:bg-[#C89D5A] hover:text-white transition-all"
            onClick={() => setCursoSeleccionado(curso)}
          >
            <h2 className="text-lg font-semibold text-[#4A6472]">{curso.nombre}</h2>
            <p className="text-sm text-[#2E2E2E]">Ver notas de exámenes</p>
          </div>
        ))}
      </div>

      {cursoSeleccionado && (
        <ExamenesModal
          curso={cursoSeleccionado}
          examenes={examenesPorCurso[cursoSeleccionado.id] || []}
          onClose={() => setCursoSeleccionado(null)}
        />
      )}
    </div>
  );
};

export default ExamenesPage;
