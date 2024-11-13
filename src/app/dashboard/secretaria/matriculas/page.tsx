// src/app/dashboard/secretaria/matriculas/page.tsx
"use client";

import { useState } from "react";
import ModalDocumentos from "@/components/dashboard/secretaria/ModalDocumentos";

const estudiantes = [
  { id: 1, nombre: "Carlos López", grado: "5to Secundaria" },
  { id: 2, nombre: "Ana Morales", grado: "4to Secundaria" },
  { id: 3, nombre: "Luis García", grado: "3ro Secundaria" },
  { id: 4, nombre: "María Fernández", grado: "5to Secundaria" },
  { id: 5, nombre: "Juan Pérez", grado: "4to Secundaria" },
];

const documentosPorEstudiante: { [key: number]: { nombre: string; revisado: boolean }[] } = {
  1: [
    { nombre: "DNI", revisado: false },
    { nombre: "Certificado de Estudios", revisado: false },
  ],
  2: [
    { nombre: "DNI", revisado: false },
    { nombre: "Certificado de Estudios", revisado: false },
  ],
  3: [
    { nombre: "DNI", revisado: false },
    { nombre: "Certificado de Estudios", revisado: false },
  ],
  4: [
    { nombre: "DNI", revisado: false },
    { nombre: "Certificado de Estudios", revisado: false },
  ],
  5: [
    { nombre: "DNI", revisado: false },
    { nombre: "Certificado de Estudios", revisado: false },
  ],
};

const MatriculasPage = () => {
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroGrado, setFiltroGrado] = useState("");
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const estudiantesFiltrados = estudiantes.filter((estudiante) => {
    const coincideNombre = estudiante.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
    const coincideGrado = filtroGrado === "" || estudiante.grado === filtroGrado;
    return coincideNombre && coincideGrado;
  });

  const abrirModalDocumentos = (idEstudiante: number) => {
    setEstudianteSeleccionado(idEstudiante);
    setIsModalOpen(true);
  };

  const toggleDocumentoRevisado = (index: number) => {
    if (estudianteSeleccionado !== null) {
      documentosPorEstudiante[estudianteSeleccionado][index].revisado =
        !documentosPorEstudiante[estudianteSeleccionado][index].revisado;
      setEstudianteSeleccionado(estudianteSeleccionado); // Para forzar una actualización de estado
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Gestión de Matrículas</h1>
      <p className="mb-6 text-lg text-[#2E2E2E]">Filtra y revisa los documentos subidos por los estudiantes.</p>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
              className="flex items-center justify-between bg-[#E6D8C3] p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => abrirModalDocumentos(estudiante.id)}
            >
              <div>
                <p className="text-lg font-medium text-[#4A6472]">{estudiante.nombre}</p>
                <p className="text-sm text-[#2E2E2E]">Grado: {estudiante.grado}</p>
              </div>
              <div className="text-lg font-bold text-[#4A6472]">Ver Documentos</div>
            </li>
          ))
        ) : (
          <p className="text-center text-[#2E2E2E]">No se encontraron resultados para los filtros seleccionados.</p>
        )}
      </ul>

      {/* Modal de Documentos */}
      {isModalOpen && estudianteSeleccionado !== null && (
        <ModalDocumentos
          estudianteNombre={estudiantes.find((e) => e.id === estudianteSeleccionado)?.nombre || ""}
          documentos={documentosPorEstudiante[estudianteSeleccionado]}
          onToggleRevisado={toggleDocumentoRevisado}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default MatriculasPage;
