// src/app/dashboard/administrador/reportes/page.tsx
"use client";

import { useState } from "react";

const ReportesPage = () => {
  const [dateRange, setDateRange] = useState("Última semana");
  const [reportType, setReportType] = useState("Ventas");

  const handleGenerateReport = () => {
    // Lógica para generar reportes (puede ser una consulta a la API o algo similar)
    console.log(`Generando reporte de ${reportType} para ${dateRange}`);
  };

  return (
    <div className="p-8 bg-[#FFFFFF] min-h-screen">
      <h1 className="text-4xl font-bold text-[#4A6472] mb-6">Reportes</h1>
      
      {/* Filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <div>
          <label className="text-[#4A6472] font-semibold mr-2">Rango de Fechas:</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="p-2 border border-[#4A6472] rounded-lg focus:outline-none focus:border-[#C89D5A]"
          >
            <option>Última semana</option>
            <option>Último mes</option>
            <option>Últimos 3 meses</option>
            <option>Último año</option>
          </select>
        </div>
        
        <div>
          <label className="text-[#4A6472] font-semibold mr-2">Tipo de Reporte:</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="p-2 border border-[#4A6472] rounded-lg focus:outline-none focus:border-[#C89D5A]"
          >
            <option>Ventas</option>
            <option>Asistencia</option>
            <option>Pensiones</option>
            <option>Matriculas</option>
          </select>
        </div>
        
        <button
          onClick={handleGenerateReport}
          className="px-4 py-2 bg-[#C89D5A] text-white rounded-lg shadow-md hover:bg-[#4A6472] transition-all"
        >
          Generar Reporte
        </button>
      </div>

      {/* Gráfico de datos o tabla */}
      <div className="bg-[#E6D8C3] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#4A6472] mb-4">Resultados del Reporte</h2>
        
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 mr-4">
            <h3 className="text-xl font-bold text-[#4A6472] mb-2">Métrica 1</h3>
            <p className="text-[#2E2E2E]">Descripción o valor de la métrica.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 mr-4">
            <h3 className="text-xl font-bold text-[#4A6472] mb-2">Métrica 2</h3>
            <p className="text-[#2E2E2E]">Descripción o valor de la métrica.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-bold text-[#4A6472] mb-2">Métrica 3</h3>
            <p className="text-[#2E2E2E]">Descripción o valor de la métrica.</p>
          </div>
        </div>

        {/* Tabla de datos */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-[#FEC600] text-[#4A6472]">
                <th className="py-3 px-4 text-left">Fecha</th>
                <th className="py-3 px-4 text-left">Descripción</th>
                <th className="py-3 px-4 text-left">Cantidad</th>
                <th className="py-3 px-4 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Datos de ejemplo */}
              <tr className="text-[#2E2E2E] bg-[#E6D8C3] hover:bg-[#C89D5A] transition-all">
                <td className="py-3 px-4">01/01/2024</td>
                <td className="py-3 px-4">Venta de curso</td>
                <td className="py-3 px-4">10</td>
                <td className="py-3 px-4">$500</td>
              </tr>
              <tr className="text-[#2E2E2E] bg-[#E6D8C3] hover:bg-[#C89D5A] transition-all">
                <td className="py-3 px-4">02/01/2024</td>
                <td className="py-3 px-4">Pago de pensiones</td>
                <td className="py-3 px-4">15</td>
                <td className="py-3 px-4">$750</td>
              </tr>
              {/* Más filas según los datos */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportesPage;
