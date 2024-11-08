// components/dashboard/StudentNavbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

const StudentNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <button
        onClick={() => setOpen(!open)}
        className="text-white"
      >
        {open ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>
      {open && (
        <div className="mt-4">
          <Link href="/dashboard/estudiante/cursos" className="block text-white">Cursos</Link>
          <Link href="/dashboard/estudiante/calendario" className="block text-white">Calendario</Link>
          <Link href="/dashboard/estudiante/ajustes" className="block text-white">Ajustes</Link>
        </div>
      )}
    </nav>
  );
};

export default StudentNavbar;
