// src/app/dashboard/layout.tsx
"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push("/");
    }
  }, [user.isAuthenticated, router]);

  if (!user.isAuthenticated) {
    return null; // O muestra un indicador de carga si prefieres
  }

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Dashboard de {user.role}</h1>
        <button onClick={logout} className="text-red-400">
          Cerrar sesión
        </button>
      </header>
      <main>{children}</main>
      <footer className="p-4 bg-gray-800 text-white text-center">© 2023 I.E.</footer>
    </div>
  );
};

export default DashboardLayout;
