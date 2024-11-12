// pages/dashboard/profesor/cursos/notas.tsx
"use client";

import { useState } from "react";

// Datos estáticos para los cursos y estudiantes
const cursos = [
  { id: 1, nombre: "Matemáticas" },
  { id: 2, nombre: "Ciencias" },
  { id: 3, nombre: "Historia" },
];

const estudiantes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Gómez" },
  { id: 3, nombre: "Luis Rodríguez" },
  { id: 4, nombre: "Marta Sánchez" },
];

const NotasPage = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<number | null>(null);
  const [notas, setNotas] = useState<{ [key: number]: number | '' }>({});

  const seleccionarCurso = (id: number) => {
    setCursoSeleccionado(id);
    setNotas(estudiantes.reduce((acc, estudiante) => {
      acc[estudiante.id] = ''; // Inicializamos las notas
      return acc;
    }, {} as { [key: number]: number | '' }));
  };

  const registrarNota = (idEstudiante: number, nota: number) => {
    setNotas((prev) => ({ ...prev, [idEstudiante]: nota }));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Registro de Notas</h1>

      {/* Selección de Curso */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-[#2E2E2E] mb-2">Selecciona un curso:</label>
        <select
          onChange={(e) => seleccionarCurso(Number(e.target.value))}
          className="w-full p-3 border border-[#4A6472] rounded-lg text-[#4A6472] bg-white shadow-sm"
        >
          <option value="">-- Selecciona un curso --</option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de Estudiantes */}
      {cursoSeleccionado && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#2E2E2E] mb-4">
            Estudiantes en {cursos.find((c) => c.id === cursoSeleccionado)?.nombre}
          </h2>
          <ul className="space-y-4">
            {estudiantes.map((estudiante) => (
              <li
                key={estudiante.id}
                className="flex items-center justify-between bg-[#E6D8C3] p-4 rounded-lg shadow-md"
              >
                <span className="text-lg font-medium text-[#4A6472]">{estudiante.nombre}</span>
                <input
                  type="number"
                  placeholder="Nota"
                  value={notas[estudiante.id]}
                  onChange={(e) => registrarNota(estudiante.id, Number(e.target.value))}
                  className="w-20 p-2 border border-[#4A6472] rounded-md text-center bg-white text-[#4A6472] shadow-sm"
                  min={0}
                  max={20}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={() => alert("Notas guardadas")}
            className="mt-6 px-6 py-3 bg-[#C89D5A] text-white font-semibold rounded-lg shadow-lg hover:bg-[#4A6472] transition-colors"
          >
            Guardar Notas
          </button>
        </div>
      )}
    </div>
  );
};

export default NotasPage;
