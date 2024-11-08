// components/ProtectedRoute.tsx
"use client";
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const ProtectedRoute = ({ children, role }: { children: ReactNode; role: string }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user.isAuthenticated || user.role !== role) {
      router.push('/');
    }
  }, [user, role, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
