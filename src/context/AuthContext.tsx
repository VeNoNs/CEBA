// context/AuthContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  role: string;
  isAuthenticated: boolean;
};

type AuthContextType = {
  user: User;
  login: (role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ role: '', isAuthenticated: false });
  const router = useRouter();

  const login = (role: string) => {
    setUser({ role, isAuthenticated: true });
    router.push(`/dashboard/${role}`);
  };

  const logout = () => {
    setUser({ role: '', isAuthenticated: false });
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
