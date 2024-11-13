// src/components/ModalDocumentos.tsx
import { Dispatch, SetStateAction } from "react";

type Documento = {
  nombre: string;
  revisado: boolean;
};

type ModalDocumentosProps = {
  estudianteNombre: string;
  documentos: Documento[];
  onToggleRevisado: (index: number) => void;
  onClose: () => void;
};

const ModalDocumentos = ({
  estudianteNombre,
  documentos,
  onToggleRevisado,
  onClose,
}: ModalDocumentosProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#4A6472] mb-4">Documentos de {estudianteNombre}</h2>
        <ul className="space-y-4">
          {documentos.map((documento, index) => (
            <li key={index} className="flex items-center justify-between bg-[#E6D8C3] p-4 rounded-lg shadow-md">
              <span className="text-lg font-medium text-[#4A6472]">{documento.nombre}</span>
              <button
                onClick={() => onToggleRevisado(index)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  documento.revisado
                    ? "bg-[#C89D5A] text-white"
                    : "bg-white border border-[#4A6472] text-[#4A6472]"
                }`}
              >
                {documento.revisado ? "Revisado" : "Marcar como Revisado"}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-[#FEC600] text-[#4A6472] font-semibold rounded-lg shadow hover:bg-[#C89D5A] hover:text-white transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalDocumentos;
