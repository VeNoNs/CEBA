"use client";
import { useState } from "react";

// Información del pago de matrícula
const pagoMatricula = {
  concepto: "Matrícula Bimestre 2024-1",
  monto: 200,
  estado: "Pendiente", // Puede ser "Pendiente" o "Pagado"
  fechaVencimiento: "2024-02-01",
};

const MatriculaPage = () => {
  const [estadoPago, setEstadoPago] = useState(pagoMatricula.estado);

  const confirmarPago = () => {
    // Cambia el estado a "Pagado"
    setEstadoPago("Pagado");
    alert("Pago de matrícula confirmado");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Pago de Matrícula</h1>
      <p className="text-lg text-[#2E2E2E] mb-4">
        Asegúrate de completar el pago de matrícula para el bimestre actual antes de la fecha de vencimiento.
      </p>

      {/* Detalles del pago de matrícula */}
      <div
        className={`p-6 rounded-lg shadow-md ${
          estadoPago === "Pagado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
        }`}
      >
        <h2 className="text-xl font-semibold mb-2">{pagoMatricula.concepto}</h2>
        <p className="text-lg mb-1">Monto: ${pagoMatricula.monto}</p>
        <p className="text-lg mb-1">Estado: {estadoPago}</p>
        <p className="text-md text-[#2E2E2E]">
          Fecha límite: {new Date(pagoMatricula.fechaVencimiento).toLocaleDateString("es-ES")}
        </p>
      </div>

      {/* Confirmación de pago */}
      {estadoPago === "Pendiente" && (
        <div className="mt-6">
          <button
            onClick={confirmarPago}
            className="px-6 py-3 bg-[#C89D5A] text-white font-semibold rounded-lg shadow-md hover:bg-[#4A6472] transition-colors"
          >
            Confirmar Pago
          </button>
          <p className="text-sm text-[#2E2E2E] mt-2">
            *Al confirmar el pago, estarás al día con el costo de matrícula para este bimestre.
          </p>
        </div>
      )}

      {/* Mensaje de confirmación si el pago ya fue realizado */}
      {estadoPago === "Pagado" && (
        <div className="mt-6 p-4 bg-green-200 text-green-800 rounded-lg">
          <p className="font-semibold">¡Gracias! El pago de matrícula ha sido completado.</p>
        </div>
      )}
    </div>
  );
};

export default MatriculaPage;
