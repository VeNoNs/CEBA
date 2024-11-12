// pages/dashboard/secretaria/layout.tsx
import { ReactNode } from 'react';
import SidebarDashboard from '@/components/dashboard/SidebarDashboard';

type SecretariaLayoutProps = {
  children: ReactNode;
};

const SecretariaLayout = ({ children }: SecretariaLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <SidebarDashboard role="secretaria" />
      <main className="flex-grow p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default SecretariaLayout;
