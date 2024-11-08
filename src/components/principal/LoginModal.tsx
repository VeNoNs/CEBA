// components/LoginModal.tsx
import { useState } from "react";
import Alert from "../miscelanios/Alert";
import { useAuth } from "../../context/AuthContext";

type LoginModalProps = {
  onClose: () => void;
};

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();

  const users = [
    { email: "admin@example.com", password: "admin123", role: "administrador" },
    { email: "teacher@example.com", password: "teacher123", role: "profesor" },
    { email: "student@example.com", password: "student123", role: "estudiante" },
    { email: "secretary@example.com", password: "secretary123", role: "secretaria" },
  ];

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      login(user.role);
      onClose();
    } else {
      setErrorMessage("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
      <div className="bg-[#E6D8C3] p-8 rounded-lg shadow-lg w-11/12 max-w-md relative">
        <h2 className="text-2xl font-semibold mb-6 text-[#2E2E2E] text-center">Iniciar Sesión</h2>
        
        {errorMessage && (
          <div className="mb-4">
            <Alert message={errorMessage} onClose={() => setErrorMessage("")} />
          </div>
        )}

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 border border-[#4A6472] rounded-lg mb-4 text-[#2E2E2E] bg-white shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 border border-[#4A6472] rounded-lg mb-4 text-[#2E2E2E] bg-white shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-[#C89D5A] text-white rounded-lg hover:bg-[#4A6472] transition-all duration-300 shadow-md hover:shadow-lg mb-4"
        >
          Ingresar
        </button>
        
        <button
          onClick={onClose}
          className="w-full py-2 bg-[#2E2E2E] text-white rounded-lg hover:bg-[#4A6472] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
