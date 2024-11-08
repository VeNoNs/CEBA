// components/Alert.tsx
import { useEffect } from "react";

const Alert = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Eliminar la alerta después de 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, [onClose]);

  return (
    <div className="bg-red-500 text-white px-4 py-2 rounded shadow-lg text-center">
      {message}
    </div>
  );
};

export default Alert;
