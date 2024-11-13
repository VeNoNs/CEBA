// src/app/dashboard/secretaria/pensiones/page.tsx
"use client";

import { useState } from "react";

// Datos estáticos de estudiantes
const estudiantes = [
  { id: 1, nombre: "Carlos López", grado: "5to Secundaria", deuda: 200, tieneDeuda: true },
  { id: 2, nombre: "Ana Morales", grado: "4to Secundaria", deuda: 0, tieneDeuda: false },
  { id: 3, nombre: "Luis García", grado: "3ro Secundaria", deuda: 150, tieneDeuda: true },
  { id: 4, nombre: "María Fernández", grado: "5to Secundaria", deuda: 0, tieneDeuda: false },
  { id: 5, nombre: "Juan Pérez", grado: "4to Secundaria", deuda: 100, tieneDeuda: true },
];

const PensionesPage = () => {
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroMonto, setFiltroMonto] = useState("");
  const [filtroDeuda, setFiltroDeuda] = useState("");
  const [filtroGrado, setFiltroGrado] = useState("");

  // Filtra los estudiantes según los criterios seleccionados
  const estudiantesFiltrados = estudiantes.filter((estudiante) => {
    const coincideNombre = estudiante.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
    const coincideMonto = filtroMonto === "" || estudiante.deuda >= parseFloat(filtroMonto);
    const coincideDeuda = filtroDeuda === "" || (filtroDeuda === "conDeuda" && estudiante.tieneDeuda) || (filtroDeuda === "sinDeuda" && !estudiante.tieneDeuda);
    const coincideGrado = filtroGrado === "" || estudiante.grado === filtroGrado;

    return coincideNombre && coincideMonto && coincideDeuda && coincideGrado;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Gestión de Pensiones</h1>
      <p className="mb-6 text-lg text-[#2E2E2E]">Filtra y gestiona las pensiones de los estudiantes.</p>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">Buscar por Nombre:</label>
          <input
            type="text"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            className="w-full p-3 border border-[#4A6472] rounded-lg text-[#4A6472] bg-white shadow-sm"
            placeholder="Nombre del estudiante"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">Monto mínimo de deuda:</label>
          <input
            type="number"
            value={filtroMonto}
            onChange={(e) => setFiltroMonto(e.target.value)}
            className="w-full p-3 border border-[#4A6472] rounded-lg text-[#4A6472] bg-white shadow-sm"
            placeholder="Monto mínimo"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">Estado de Deuda:</label>
          <select
            value={filtroDeuda}
            onChange={(e) => setFiltroDeuda(e.target.value)}
            className="w-full p-3 border border-[#4A6472] rounded-lg text-[#4A6472] bg-white shadow-sm"
          >
            <option value="">-- Selecciona estado --</option>
            <option value="conDeuda">Con Deuda</option>
            <option value="sinDeuda">Sin Deuda</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">Grado:</label>
          <select
            value={filtroGrado}
            onChange={(e) => setFiltroGrado(e.target.value)}
            className="w-full p-3 border border-[#4A6472] rounded-lg text-[#4A6472] bg-white shadow-sm"
          >
            <option value="">-- Selecciona grado --</option>
            <option value="5to Secundaria">5to Secundaria</option>
            <option value="4to Secundaria">4to Secundaria</option>
            <option value="3ro Secundaria">3ro Secundaria</option>
          </select>
        </div>
      </div>

      {/* Lista de Estudiantes Filtrados */}
      <ul className="space-y-4">
        {estudiantesFiltrados.length > 0 ? (
          estudiantesFiltrados.map((estudiante) => (
            <li
              key={estudiante.id}
              className="flex items-center justify-between bg-[#E6D8C3] p-4 rounded-lg shadow-md"
            >
              <div>
                <p className="text-lg font-medium text-[#4A6472]">{estudiante.nombre}</p>
                <p className="text-sm text-[#2E2E2E]">Grado: {estudiante.grado}</p>
                <p className="text-sm text-[#2E2E2E]">Deuda: ${estudiante.deuda.toFixed(2)}</p>
              </div>
              <div className={`text-lg font-bold ${estudiante.tieneDeuda ? "text-red-500" : "text-green-500"}`}>
                {estudiante.tieneDeuda ? "Con Deuda" : "Sin Deuda"}
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-[#2E2E2E]">No se encontraron resultados para los filtros seleccionados.</p>
        )}
      </ul>
    </div>
  );
};

export default PensionesPage;
