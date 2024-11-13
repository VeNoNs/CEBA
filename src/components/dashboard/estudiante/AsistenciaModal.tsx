import { useEffect, useState } from "react";

type AsistenciaModalProps = {
  curso: { id: number; nombre: string } | null;
  onClose: () => void;
};

type Asistencia = {
  fecha: string;
  asistencia: boolean;
};

// Definir el tipo explícito para `asistenciasPorCurso`
const asistenciasPorCurso: { [key: number]: Asistencia[] } = {
  1: [
    { fecha: "2024-11-01", asistencia: true },
    { fecha: "2024-11-08", asistencia: false },
    { fecha: "2024-11-15", asistencia: true },
  ],
  2: [
    { fecha: "2024-11-02", asistencia: true },
    { fecha: "2024-11-09", asistencia: true },
  ],
  3: [
    { fecha: "2024-11-03", asistencia: false },
    { fecha: "2024-11-10", asistencia: true },
  ],
  4: [
    { fecha: "2024-11-04", asistencia: true },
    { fecha: "2024-11-11", asistencia: false },
  ],
};

const AsistenciaModal = ({ curso, onClose }: AsistenciaModalProps) => {
  const [asistencias, setAsistencias] = useState<Asistencia[]>([]);

  useEffect(() => {
    if (curso && curso.id in asistenciasPorCurso) {
      // Cargar asistencias para el curso seleccionado
      setAsistencias(asistenciasPorCurso[curso.id]);
    } else {
      setAsistencias([]);
    }
  }, [curso]);

  if (!curso) return null;

  // Configuración del mes y año actuales
  const today = new Date();
  const [month] = useState(today.getMonth());
  const [year] = useState(today.getFullYear());

  // Días del mes actual
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const days = [];

    // Días vacíos antes del inicio del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-start-${i}`} className="flex-1 bg-gray-100"></div>);
    }

    // Días del mes con asistencia coloreada
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
      const asistencia = asistencias.find((a) => a.fecha === dateStr);

      days.push(
        <div
          key={day}
          className={`flex-1 p-2 border text-center ${
            asistencia
              ? asistencia.asistencia
                ? "bg-green-300 text-green-800"
                : "bg-red-300 text-red-800"
              : "bg-white"
          }`}
        >
          <div className="text-lg font-semibold">{day}</div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#4A6472] font-bold text-lg"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-[#4A6472] mb-4">Asistencias en {curso.nombre}</h2>
        <div className="bg-[#E6D8C3] text-center p-2 font-semibold text-[#4A6472] mb-4">
          {new Date(year, month).toLocaleString("es-ES", { month: "long", year: "numeric" })}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((dia, index) => (
            <div key={index} className="font-semibold text-[#4A6472] text-center">
              {dia}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default AsistenciaModal;
