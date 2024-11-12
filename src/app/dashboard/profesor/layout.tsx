// pages/dashboard/profesor/layout.tsx
import { ReactNode } from 'react';
import SidebarDashboard from '@/components/dashboard/SidebarDashboard';

type ProfesorLayoutProps = {
  children: ReactNode;
};

const ProfesorLayout = ({ children }: ProfesorLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <SidebarDashboard role="profesor" />
      <main className="flex-grow p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default ProfesorLayout;
