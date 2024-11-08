// components/Navbar.tsx
import { useState } from "react";
import Image from "next/image";

type NavbarProps = {
  onOpenLogin: () => void;
};

const Navbar = ({ onOpenLogin }: NavbarProps) => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      {/* Logo y Nombre */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo/logoCeba.webp"
          alt="Logo CEBA Francisco Bolognesi"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold text-gray-900">CEBA Francisco Bolognesi</h1>
      </div>

      {/* Navegación */}
      <nav className="flex space-x-6 text-lg">
        <a href="#home" className="text-gray-900 hover:text-green-600">Inicio</a>
        <a href="#about" className="text-gray-900 hover:text-green-600">Nosotros</a>
        <a href="#stats" className="text-gray-900 hover:text-green-600">Estadísticas</a>
        <a href="#staff" className="text-gray-900 hover:text-green-600">Docentes</a>
        <a href="#scholarships" className="text-gray-900 hover:text-green-600">Convenios Educativos</a>
        <a href="#contact" className="text-gray-900 hover:text-green-600">Contacto</a>
      </nav>

      {/* Botón de Ingreso */}
      <button
        onClick={onOpenLogin}
        className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-xl focus:outline-none"
      >
        Ingresar
      </button>
    </header>
  );
};

export default Navbar;
