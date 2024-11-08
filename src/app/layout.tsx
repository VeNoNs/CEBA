// src/app/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';

export const metadata: Metadata = {
  title: 'Plataforma Educativa',
  description: 'Sistema de gestión escolar con control de roles',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
