// components/dashboard/ExamenesModal.tsx
import { useEffect } from "react";

type ExamenesModalProps = {
  curso: { id: number; nombre: string };
  examenes: { nombre: string; fecha: string; nota: number }[];
  onClose: () => void;
};

const ExamenesModal = ({ curso, examenes, onClose }: ExamenesModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#4A6472] font-bold text-lg"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-[#4A6472] mb-4">
          Notas en {curso.nombre}
        </h2>
        {examenes.length > 0 ? (
          <ul className="space-y-4">
            {examenes.map((examen, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-[#E6D8C3] p-4 rounded-lg shadow-md"
              >
                <div>
                  <h3 className="text-lg font-medium text-[#4A6472]">{examen.nombre}</h3>
                  <p className="text-sm text-[#2E2E2E]">{examen.fecha}</p>
                </div>
                <span className="text-xl font-bold text-[#2E2E2E] bg-[#C89D5A] rounded-full px-4 py-1">
                  {examen.nota}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-[#2E2E2E]">No hay notas registradas para este curso.</p>
        )}
      </div>
    </div>
  );
};

export default ExamenesModal;
