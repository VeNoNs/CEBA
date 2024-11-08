// pages/dashboard/estudiante/layout.tsx
import { ReactNode } from 'react';
import StudentNavbar from '@/components/dashboard/StudentNavbar';

type StudentLayoutProps = {
  children: ReactNode;
};

const StudentLayout = ({ children }: StudentLayoutProps) => {
  return (
    <div className="min-h-screen">
      <StudentNavbar />
      <main className="p-8">{children}</main>
    </div>
  );
};

export default StudentLayout;
