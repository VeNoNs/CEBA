"use client";
import { useState } from "react";

// Datos de ejemplo para los documentos requeridos
const documentosRequeridos = [
  { id: 1, nombre: "DNI", estado: "En proceso" },
  { id: 2, nombre: "Certificado de Estudios", estado: "Aprobado" },
  { id: 3, nombre: "Comprobante de Pago de Matrícula", estado: "Rechazado" },
];

const DocumentosPage = () => {
  const [documentos, setDocumentos] = useState(documentosRequeridos);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = (id: number) => {
    // Aquí agregar lógica para subir el archivo
    if (file) {
      const updatedDocumentos = documentos.map((doc) =>
        doc.id === id ? { ...doc, estado: "En proceso" } : doc
      );
      setDocumentos(updatedDocumentos);
      setFile(null); // Resetea el archivo seleccionado
      alert("Documento subido correctamente.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Documentos Requeridos</h1>
      <p className="text-lg text-[#2E2E2E] mb-4">
        Aquí puedes subir los documentos requeridos por la institución. Una vez subidos, serán revisados por la secretaría.
      </p>

      <div className="space-y-6">
        {documentos.map((documento) => (
          <div
            key={documento.id}
            className="p-4 bg-[#E6D8C3] rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            {/* Nombre y estado del documento */}
            <div>
              <h2 className="text-lg font-semibold text-[#4A6472]">{documento.nombre}</h2>
              <p className="text-md text-[#2E2E2E]">
                Estado:{" "}
                <span
                  className={`font-semibold ${
                    documento.estado === "Aprobado"
                      ? "text-green-600"
                      : documento.estado === "Rechazado"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {documento.estado}
                </span>
              </p>
            </div>

            {/* Subir o editar documento */}
            <div className="flex flex-col md:flex-row items-center space-x-4 mt-4 md:mt-0">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, documento.id)}
                className="bg-white border border-[#4A6472] rounded-lg p-2"
              />
              <button
                onClick={() => handleUpload(documento.id)}
                className="px-4 py-2 rounded-lg bg-[#C89D5A] text-white font-semibold hover:bg-[#4A6472] transition-colors"
              >
                {documento.estado === "Aprobado" ? "Ver Documento" : "Subir Documento"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentosPage;
