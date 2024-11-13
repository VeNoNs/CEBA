"use client";
import { useState } from "react";

// Datos de ejemplo de las pensiones del estudiante
const pensiones = [
  {
    id: 1,
    mes: "Enero",
    monto: 150.0,
    fechaLimite: "2024-01-10",
    estado: "Pendiente",
    recargo: 10.0,
  },
  {
    id: 2,
    mes: "Febrero",
    monto: 150.0,
    fechaLimite: "2024-02-10",
    estado: "Pagado",
    fechaPago: "2024-02-05",
  },
  {
    id: 3,
    mes: "Marzo",
    monto: 150.0,
    fechaLimite: "2024-03-10",
    estado: "Pendiente",
    recargo: 10.0,
  },
];

const PensionesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Pensiones</h1>
      <p className="text-lg text-[#2E2E2E] mb-4">
        Aquí puedes ver las pensiones pendientes y pagadas, incluyendo sus fechas límite de pago y cualquier recargo aplicable.
      </p>

      <div className="space-y-4">
        {pensiones.map((pension) => (
          <div
            key={pension.id}
            className="p-4 bg-[#E6D8C3] rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            {/* Información del mes y monto */}
            <div>
              <h2 className="text-lg font-semibold text-[#4A6472]">{pension.mes}</h2>
              <p className="text-md text-[#2E2E2E]">Monto: S/ {pension.monto.toFixed(2)}</p>
              {pension.recargo && pension.estado === "Pendiente" && (
                <p className="text-sm text-red-600">Recargo por retraso: S/ {pension.recargo.toFixed(2)}</p>
              )}
            </div>

            {/* Fecha límite y estado */}
            <div className="text-center">
              <p className="text-md text-[#2E2E2E]">Fecha límite: {pension.fechaLimite}</p>
              {pension.estado === "Pagado" ? (
                <p className="text-sm text-green-600">Pagado el {pension.fechaPago}</p>
              ) : (
                <p className="text-sm text-red-600 font-semibold">Pendiente</p>
              )}
            </div>

            {/* Estado visual con icono */}
            <div className="flex items-center space-x-2">
              {pension.estado === "Pagado" ? (
                <div className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold">
                  Pagado
                </div>
              ) : (
                <div className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold">
                  Pendiente
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PensionesPage;
