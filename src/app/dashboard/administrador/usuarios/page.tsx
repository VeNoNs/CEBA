// src/app/dashboard/administrador/usuarios/page.tsx
"use client";

import { useState } from "react";
import UserModal from "@/components/dashboard/administrador/UserModal";

const UsuariosPage = () => {
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
      <h1 className="text-4xl font-bold text-[#4A6472] mb-6">Usuarios</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => openModal("Agregar")}
          className="px-4 py-2 bg-[#C89D5A] text-white rounded-lg shadow-md hover:bg-[#4A6472] transition-all"
        >
          + Agregar Usuario
        </button>
      </div>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#FFFFFF] shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#FEC600] text-[#4A6472]">
              <th className="py-3 px-4 text-left">Nombre</th>
              <th className="py-3 px-4 text-left">Correo</th>
              <th className="py-3 px-4 text-left">Rol</th>
              <th className="py-3 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí irían los usuarios mapeados de tu lista */}
            <tr className="text-[#2E2E2E] bg-[#E6D8C3] hover:bg-[#C89D5A] transition-all">
              <td className="py-3 px-4">Juan Pérez</td>
              <td className="py-3 px-4">juan.perez@example.com</td>
              <td className="py-3 px-4">Administrador</td>
              <td className="py-3 px-4">
                <button
                  onClick={() => openModal("Editar")}
                  className="text-[#4A6472] hover:text-white transition-colors"
                >
                  Editar
                </button>
              </td>
            </tr>
            {/* Fin del ejemplo de usuario */}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <UserModal type={modalType} onClose={closeModal} />
      )}
    </div>
  );
};

export default UsuariosPage;
