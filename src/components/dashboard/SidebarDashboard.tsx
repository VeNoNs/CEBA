// components/SidebarDashboard.tsx
import Link from 'next/link';

type SidebarDashboardProps = {
  role: 'administrador' | 'profesor' | 'secretaria';
};

const SidebarDashboard = ({ role }: SidebarDashboardProps) => {
  const items = {
    administrador: [
      { name: 'Dashboard', href: '/dashboard/administrador' },
      { name: 'Usuarios', href: '/dashboard/administrador/usuarios' },
      { name: 'Reportes', href: '/dashboard/administrador/reportes' },
    ],
    profesor: [
      { name: 'Dashboard', href: '/dashboard/profesor' },
      { name: 'Mis Cursos', href: '/dashboard/profesor/cursos' },
      { name: 'Calendario', href: '/dashboard/profesor/calendario' },
    ],
    secretaria: [
      { name: 'Dashboard', href: '/dashboard/secretaria' },
      { name: 'Asistencias', href: '/dashboard/secretaria/asistencias' },
      { name: 'Eventos', href: '/dashboard/secretaria/eventos' },
    ],
  };

  return (
    <div className="h-full w-64 bg-blue-600 text-white flex flex-col">
      <div className="p-4 font-bold text-lg">Panel de {role}</div>
      <nav className="flex-grow">
        {items[role].map((item, index) => (
          <Link key={index} href={item.href}>
            <span className="block py-2 px-4 hover:bg-blue-700 cursor-pointer">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      <div className="p-4 text-center">© CEBA 2023</div>
    </div>
  );
};

export default SidebarDashboard;
