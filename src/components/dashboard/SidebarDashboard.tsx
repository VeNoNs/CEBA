// components/dashboard/SidebarDashboard.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type SidebarItem = {
  name: string;
  href?: string;
  subItems?: { name: string; href: string }[];
};

type SidebarDashboardProps = {
  role: "administrador" | "profesor" | "secretaria" | "estudiante";
};

const SidebarDashboard = ({ role }: SidebarDashboardProps) => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({
    Cursos: false,
    Matriculas: false,
  });

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const items: { [key: string]: SidebarItem[] } = {
    administrador: [
      { name: "Dashboard", href: "/dashboard/administrador" },
      { name: "Usuarios", href: "/dashboard/administrador/usuarios" },
      { name: "Cursos", href: "/dashboard/administrador/cursos" },
      { name: "Reportes", href: "/dashboard/administrador/reportes" },
      { name: "Cerrar sesión", href: "/" }, // Cerrar sesión agregado aquí
    ],
    profesor: [
      { name: "Dashboard", href: "/dashboard/profesor" },
      {
        name: "Cursos",
        subItems: [
          { name: "Asistencia", href: "/dashboard/profesor/cursos/asistencias" },
          { name: "Notas y Exámenes", href: "/dashboard/profesor/cursos/notas" },
        ],
      },
      { name: "Calendario de Exámenes", href: "/dashboard/profesor/calendario" },
      { name: "Cerrar sesión", href: "/" }, // Cerrar sesión agregado aquí
    ],
    secretaria: [
      { name: "Dashboard", href: "/dashboard/secretaria" },
      { name: "Pensiones", href: "/dashboard/secretaria/pensiones" },
      { name: "Matriculas", href: "/dashboard/secretaria/matriculas" },
      { name: "Asistencia Docente", href: "/dashboard/secretaria/asistencias" },
      { name: "Cerrar sesión", href: "/" }, // Cerrar sesión agregado aquí
    ],
    estudiante: [
      { name: "Dashboard", href: "/dashboard/estudiante" },
      {
        name: "Matriculas",
        subItems: [
          { name: "Documentos", href: "/dashboard/estudiante/matriculas/documentos" },
          { name: "Pagos", href: "/dashboard/estudiante/matriculas/pagos" },
        ],
      },
      {
        name: "Cursos",
        subItems: [
          { name: "Exámenes", href: "/dashboard/estudiante/cursos/examenes" },
          { name: "Asistencias", href: "/dashboard/estudiante/cursos/asistencias" },
        ],
      },
      { name: "Pensiones", href: "/dashboard/estudiante/pensiones" },
      { name: "Calendario de Exámenes", href: "/dashboard/estudiante/calendario" },
      { name: "Cerrar sesión", href: "/" }, // Cerrar sesión agregado aquí
    ],
  };

  return (
    <div className="h-screen w-64 bg-[#FFFFFF] text-[#4A6472] flex flex-col shadow-lg">
      <div className="p-6 font-bold text-xl text-center bg-[#FEC600] text-[#4A6472] rounded-b-lg shadow-md">
        Panel de {role.charAt(0).toUpperCase() + role.slice(1)}
      </div>
      <nav className="flex-grow mt-4">
        {items[role].map((item, index) =>
          item.subItems ? (
            <div key={index} className="px-4 py-2">
              <button
                onClick={() => toggleSubmenu(item.name)}
                className="flex justify-between items-center w-full py-2 px-4 bg-[#E6D8C3] text-[#4A6472] rounded-lg hover:bg-[#C89D5A] hover:text-white transition-all cursor-pointer"
              >
                {item.name}
                {openSubmenus[item.name] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openSubmenus[item.name] && (
                <div className="mt-2 ml-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href}>
                      <div className="block py-2 px-4 rounded-md text-[#4A6472] hover:bg-[#C89D5A] hover:text-white transition-all cursor-pointer">
                        {subItem.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={index} href={item.href || "#"} passHref>
              <div className="block py-3 px-6 rounded-lg mx-4 my-2 bg-[#E6D8C3] text-[#4A6472] hover:bg-[#C89D5A] hover:text-white transition-all cursor-pointer">
                {item.name}
              </div>
            </Link>
          )
        )}
      </nav>
      <div className="p-4 text-center text-sm text-[#2E2E2E] bg-[#FEC600] rounded-t-lg">
        © CEBA 2023
      </div>
    </div>
  );
};

export default SidebarDashboard;
