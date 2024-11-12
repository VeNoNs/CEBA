// pages/dashboard/profesor/calendario.tsx
"use client";
import { useState } from 'react';

const ProfesorCalendarioPage = () => {
  // Datos estáticos de exámenes para mostrar en el calendario
  const examenes = [
    { fecha: '2024-11-15', nombre: 'Examen de Matemáticas' },
    { fecha: '2024-11-20', nombre: 'Examen de Historia' },
    { fecha: '2024-11-25', nombre: 'Examen de Ciencias' },
    { fecha: '2024-12-01', nombre: 'Examen de Inglés' },
  ];

  // Generar fechas para el mes actual
  const [mes] = useState(new Date().getMonth());
  const [año] = useState(new Date().getFullYear());

  const diasEnMes = new Date(año, mes + 1, 0).getDate();
  const primerDiaMes = new Date(año, mes, 1).getDay();

  const renderCalendario = () => {
    const dias = [];
    for (let i = 0; i < primerDiaMes; i++) {
      dias.push(<div key={`empty-start-${i}`} className="flex-1 bg-gray-100"></div>);
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
      const fechaCompleta = `${año}-${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
      const examen = examenes.find(e => e.fecha === fechaCompleta);

      dias.push(
        <div
          key={dia}
          className={`flex-1 p-2 border ${examen ? 'bg-[#C89D5A] text-white' : 'bg-white'}`}
        >
          <div className="text-lg font-semibold">{dia}</div>
          {examen && <div className="text-sm mt-2">{examen.nombre}</div>}
        </div>
      );
    }

    return dias;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#4A6472] mb-6">Calendario de Exámenes</h1>
      <div className="bg-[#E6D8C3] text-center p-2 font-semibold text-[#4A6472]">
        {new Date(año, mes).toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-4 text-center">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dia, index) => (
          <div key={index} className="font-semibold text-[#4A6472]">
            {dia}
          </div>
        ))}
        {renderCalendario()}
      </div>
    </div>
  );
};

export default ProfesorCalendarioPage;
