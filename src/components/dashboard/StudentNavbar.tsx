// components/dashboard/StudentNavbar.tsx
"use client";

import { FaBell, FaUserCircle } from "react-icons/fa";

const StudentNavbar = () => {
  return (
    <nav className="bg-[#FEC600] p-4 shadow-md flex justify-between items-center">
      {/* Logo y Título */}
      <div className="flex items-center space-x-3">
        <h1 className="text-[#2E2E2E] text-2xl font-bold">CEBA Francisco Bolognesi</h1>
      </div>

      {/* Notificaciones y Perfil */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-[#4A6472] text-2xl cursor-pointer" />
        <div className="text-[#4A6472] font-semibold">Ortiz Cano</div>
        <FaUserCircle className="text-[#4A6472] text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default StudentNavbar;
