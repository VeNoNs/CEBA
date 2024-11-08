// pages/dashboard/administrador/layout.tsx
import { ReactNode } from 'react';
import SidebarDashboard from '@/components/dashboard/SidebarDashboard';

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <SidebarDashboard role="administrador" />
      <main className="flex-grow p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default AdminLayout;
