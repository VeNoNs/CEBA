// src/app/dashboard/secretaria/asistencias/page.tsx
"use client";

import { useState } from "react";

// Datos estáticos de los docentes
const docentes = [
  { id: 1, nombre: "Carlos López" },
  { id: 2, nombre: "María Fernández" },
  { id: 3, nombre: "José Ramírez" },
  { id: 4, nombre: "Ana Morales" },
  { id: 5, nombre: "Luis García" },
];

const AsistenciaDocentePage = () => {
  const [asistencias, setAsistencias] = useState<{ [key: number]: boolean | null }>({});

  const registrarAsistencia = (idDocente: number, asistio: boolean) => {
    setAsistencias((prev) => ({ ...prev, [idDocente]: asistio }));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Asistencia de Docentes</h1>
      <p className="mb-6 text-lg text-[#2E2E2E]">Registra la asistencia diaria de los docentes de la institución.</p>

      {/* Lista de Docentes */}
      <ul className="space-y-4">
        {docentes.map((docente) => (
          <li
            key={docente.id}
            className="flex items-center justify-between bg-[#E6D8C3] p-4 rounded-lg shadow-md"
          >
            <span className="text-lg font-medium text-[#4A6472]">{docente.nombre}</span>
            <div className="flex space-x-4">
              <button
                onClick={() => registrarAsistencia(docente.id, true)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  asistencias[docente.id] === true
                    ? "bg-[#C89D5A] text-white"
                    : "bg-white border border-[#4A6472] text-[#4A6472]"
                }`}
              >
                Presente
              </button>
              <button
                onClick={() => registrarAsistencia(docente.id, false)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  asistencias[docente.id] === false
                    ? "bg-[#C89D5A] text-white"
                    : "bg-white border border-[#4A6472] text-[#4A6472]"
                }`}
              >
                Ausente
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsistenciaDocentePage;
