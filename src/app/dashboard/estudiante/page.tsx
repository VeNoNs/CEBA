// pages/dashboard/estudiante/reportes.tsx
"use client";

import { useState } from "react";

const ReportesEstudiantePage = () => {
  const [selectedCurso, setSelectedCurso] = useState<number | null>(null);

  // Datos estáticos para los cursos y sus notas
  const cursos = [
    {
      id: 1,
      nombre: "Matemáticas",
      notas: [
        { bimestre: "Primer Bimestre", nota: 18 },
        { bimestre: "Segundo Bimestre", nota: 14 },
        { bimestre: "Tercer Bimestre", nota: 16 },
        { bimestre: "Cuarto Bimestre", nota: 10 },
      ],
    },
    {
      id: 2,
      nombre: "Ciencias",
      notas: [
        { bimestre: "Primer Bimestre", nota: 12 },
        { bimestre: "Segundo Bimestre", nota: 8 },
        { bimestre: "Tercer Bimestre", nota: 14 },
        { bimestre: "Cuarto Bimestre", nota: 17 },
      ],
    },
  ];

  // Datos estáticos para los pagos
  const pagos = [
    { concepto: "Matricula", monto: 500, estado: "Pagado", fecha: "2024-01-10" },
    { concepto: "Pensión Marzo", monto: 300, estado: "Pendiente", fecha: "2024-03-05" },
    { concepto: "Pensión Abril", monto: 300, estado: "Pendiente", fecha: "2024-04-05" },
  ];

  const renderNotas = () => {
    if (!selectedCurso) return null;
    const curso = cursos.find((c) => c.id === selectedCurso);
    if (!curso) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold text-[#4A6472] mb-4">Notas en {curso.nombre}</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-left text-[#2E2E2E]">Bimestre</th>
              <th className="border-b p-3 text-left text-[#2E2E2E]">Nota</th>
            </tr>
          </thead>
          <tbody>
            {curso.notas.map((nota, index) => (
              <tr key={index}>
                <td className="p-3 border-b">{nota.bimestre}</td>
                <td
                  className={`p-3 border-b font-semibold ${
                    nota.nota >= 12 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {nota.nota}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Reporte Académico y de Pagos</h1>

      {/* Selección de curso para ver notas */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-[#2E2E2E] mb-2">Selecciona un curso:</label>
        <select
          onChange={(e) => setSelectedCurso(Number(e.target.value))}
          className="w-full p-3 border border-[#4A6472] rounded-lg text-[#4A6472] bg-white shadow-sm"
        >
          <option value="">-- Selecciona un curso --</option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Renderiza notas del curso seleccionado */}
      {renderNotas()}

      {/* Resumen de pagos */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold text-[#4A6472] mb-4">Resumen de Pagos</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-left text-[#2E2E2E]">Concepto</th>
              <th className="border-b p-3 text-left text-[#2E2E2E]">Monto</th>
              <th className="border-b p-3 text-left text-[#2E2E2E]">Fecha</th>
              <th className="border-b p-3 text-left text-[#2E2E2E]">Estado</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((pago, index) => (
              <tr key={index}>
                <td className="p-3 border-b">{pago.concepto}</td>
                <td className="p-3 border-b">S/ {pago.monto}</td>
                <td className="p-3 border-b">{pago.fecha}</td>
                <td
                  className={`p-3 border-b font-semibold ${
                    pago.estado === "Pagado" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {pago.estado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportesEstudiantePage;
