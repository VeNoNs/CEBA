// pages/dashboard/profesor/cursos/asistencia.tsx
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

const AsistenciaPage = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<number | null>(null);
  const [asistencias, setAsistencias] = useState<{ [key: number]: boolean | null }>({});

  const seleccionarCurso = (id: number) => {
    setCursoSeleccionado(id);
    setAsistencias(estudiantes.reduce((acc, estudiante) => {
      acc[estudiante.id] = null; // Estado inicial de asistencia
      return acc;
    }, {} as { [key: number]: boolean | null }));
  };

  const registrarAsistencia = (idEstudiante: number, asistio: boolean) => {
    setAsistencias((prev) => ({ ...prev, [idEstudiante]: asistio }));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Registro de Asistencias</h1>

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
                <div className="flex space-x-4">
                  <button
                    onClick={() => registrarAsistencia(estudiante.id, true)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      asistencias[estudiante.id] === true
                        ? "bg-[#C89D5A] text-white"
                        : "bg-white border border-[#4A6472] text-[#4A6472]"
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    onClick={() => registrarAsistencia(estudiante.id, false)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      asistencias[estudiante.id] === false
                        ? "bg-[#C89D5A] text-white"
                        : "bg-white border border-[#4A6472] text-[#4A6472]"
                    }`}
                  >
                    No
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AsistenciaPage;
