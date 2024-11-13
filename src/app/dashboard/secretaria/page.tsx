// src/app/dashboard/secretaria/reportes/page.tsx
"use client";

import { useState } from "react";

const reportes = [
  { id: 1, tipo: "Estudiantes", descripcion: "Reporte general de estudiantes" },
  { id: 2, tipo: "Asistencias", descripcion: "Registro de asistencias de Docentes" },
  { id: 3, tipo: "Pagos", descripcion: "Resumen de pagos y deudas de los estudiantes" },
];

const estudiantesData = [
  { nombre: "Carlos López", grado: "5to Secundaria", estado: "Activo" },
  { nombre: "Ana Morales", grado: "4to Secundaria", estado: "Inactivo" },
];

const asistenciasData = [
  { fecha: "2024-11-01", estudiante: "Carlos López", asistencia: "Presente" },
  { fecha: "2024-11-01", estudiante: "Ana Morales", asistencia: "Ausente" },
];

const pagosData = [
  { nombre: "Carlos López", montoPagado: 200, montoDeuda: 0 },
  { nombre: "Ana Morales", montoPagado: 100, montoDeuda: 100 },
];

const ReportesPage = () => {
  const [reporteSeleccionado, setReporteSeleccionado] = useState<string | null>(null);

  const seleccionarReporte = (tipo: string) => {
    setReporteSeleccionado(tipo);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Reportes de Secretaría</h1>
      <p className="mb-6 text-lg text-[#2E2E2E]">Selecciona el tipo de reporte que deseas visualizar:</p>

      {/* Selección de Reporte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {reportes.map((reporte) => (
          <button
            key={reporte.id}
            onClick={() => seleccionarReporte(reporte.tipo)}
            className={`p-4 rounded-lg shadow-lg font-semibold ${
              reporteSeleccionado === reporte.tipo
                ? "bg-[#C89D5A] text-white"
                : "bg-[#E6D8C3] text-[#4A6472]"
            } hover:bg-[#C89D5A] hover:text-white transition-all`}
          >
            {reporte.descripcion}
          </button>
        ))}
      </div>

      {/* Reporte Seleccionado */}
      {reporteSeleccionado === "Estudiantes" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#4A6472] mb-4">Reporte de Estudiantes</h2>
          <table className="w-full text-left border border-[#4A6472] rounded-lg">
            <thead>
              <tr className="bg-[#FEC600] text-[#4A6472]">
                <th className="p-3 border-b border-[#4A6472]">Nombre</th>
                <th className="p-3 border-b border-[#4A6472]">Grado</th>
                <th className="p-3 border-b border-[#4A6472]">Estado</th>
              </tr>
            </thead>
            <tbody>
              {estudiantesData.map((estudiante, index) => (
                <tr key={index} className="bg-[#E6D8C3] text-[#4A6472]">
                  <td className="p-3 border-b border-[#4A6472]">{estudiante.nombre}</td>
                  <td className="p-3 border-b border-[#4A6472]">{estudiante.grado}</td>
                  <td className="p-3 border-b border-[#4A6472]">{estudiante.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reporteSeleccionado === "Asistencias" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#4A6472] mb-4">Reporte de Asistencias</h2>
          <table className="w-full text-left border border-[#4A6472] rounded-lg">
            <thead>
              <tr className="bg-[#FEC600] text-[#4A6472]">
                <th className="p-3 border-b border-[#4A6472]">Fecha</th>
                <th className="p-3 border-b border-[#4A6472]">Estudiante</th>
                <th className="p-3 border-b border-[#4A6472]">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {asistenciasData.map((asistencia, index) => (
                <tr key={index} className="bg-[#E6D8C3] text-[#4A6472]">
                  <td className="p-3 border-b border-[#4A6472]">{asistencia.fecha}</td>
                  <td className="p-3 border-b border-[#4A6472]">{asistencia.estudiante}</td>
                  <td className="p-3 border-b border-[#4A6472]">{asistencia.asistencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reporteSeleccionado === "Pagos" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#4A6472] mb-4">Reporte de Pagos</h2>
          <table className="w-full text-left border border-[#4A6472] rounded-lg">
            <thead>
              <tr className="bg-[#FEC600] text-[#4A6472]">
                <th className="p-3 border-b border-[#4A6472]">Nombre</th>
                <th className="p-3 border-b border-[#4A6472]">Monto Pagado</th>
                <th className="p-3 border-b border-[#4A6472]">Monto Deuda</th>
              </tr>
            </thead>
            <tbody>
              {pagosData.map((pago, index) => (
                <tr key={index} className="bg-[#E6D8C3] text-[#4A6472]">
                  <td className="p-3 border-b border-[#4A6472]">{pago.nombre}</td>
                  <td className="p-3 border-b border-[#4A6472]">{pago.montoPagado}</td>
                  <td className="p-3 border-b border-[#4A6472]">{pago.montoDeuda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportesPage;
