// src/app/dashboard/administrador/cursos/page.tsx
"use client";

import { useState } from "react";
import CourseModal from "@/components/dashboard/administrador/CourseModal";

const CursosPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"Agregar" | "Editar">("Agregar");

  const openModal = (type: "Agregar" | "Editar") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-[#FFFFFF] min-h-screen">
      <h1 className="text-4xl font-bold text-[#4A6472] mb-6">Cursos</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => openModal("Agregar")}
          className="px-4 py-2 bg-[#C89D5A] text-white rounded-lg shadow-md hover:bg-[#4A6472] transition-all"
        >
          + Agregar Curso
        </button>
      </div>

      {/* Tabla de cursos */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#FFFFFF] shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#FEC600] text-[#4A6472]">
              <th className="py-3 px-4 text-left">Nombre del Curso</th>
              <th className="py-3 px-4 text-left">Descripción</th>
              <th className="py-3 px-4 text-left">Profesor</th>
              <th className="py-3 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí irían los cursos mapeados de tu lista */}
            <tr className="text-[#2E2E2E] bg-[#E6D8C3] hover:bg-[#C89D5A] transition-all">
              <td className="py-3 px-4">Matemáticas</td>
              <td className="py-3 px-4">Curso básico de matemáticas</td>
              <td className="py-3 px-4">Carlos López</td>
              <td className="py-3 px-4">
                <button
                  onClick={() => openModal("Editar")}
                  className="text-[#4A6472] hover:text-white transition-colors"
                >
                  Editar
                </button>
              </td>
            </tr>
            {/* Fin del ejemplo de curso */}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CourseModal type={modalType} onClose={closeModal} />
      )}
    </div>
  );
};

export default CursosPage;
