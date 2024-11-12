// pages/dashboard/estudiante/layout.tsx
import { ReactNode } from "react";
import StudentNavbar from "@/components/dashboard/StudentNavbar";
import SidebarDashboard from "@/components/dashboard/SidebarDashboard";

type StudentLayoutProps = {
  children: ReactNode;
};

const StudentLayout = ({ children }: StudentLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#2E2E2E]">
      {/* Navbar superior */}
      <StudentNavbar />

      {/* Contenedor para Sidebar y contenido */}
      <div className="flex">
        {/* Sidebar a la izquierda */}
        <SidebarDashboard role="estudiante" />

        {/* Contenido principal */}
        <main className="flex-grow p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
