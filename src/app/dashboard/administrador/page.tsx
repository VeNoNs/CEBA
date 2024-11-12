// src/app/dashboard/administrador/page.tsx
"use client";

const AdministradorPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] p-8">
      <h1 className="text-4xl font-bold text-[#4A6472] mb-6">Panel del Administrador</h1>

      {/* Sección de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard title="Usuarios Totales" value="1,200" color="#C89D5A" />
        <MetricCard title="Cursos Activos" value="45" color="#C89D5A" />
        <MetricCard title="Reportes Generados" value="120" color="#C89D5A" />
      </div>

      {/* Sección de Visualización de Datos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataVisualizationCard
          title="Usuarios Registrados por Mes"
          data={[50, 70, 45, 80, 60, 90]}
          labels={["Ene", "Feb", "Mar", "Abr", "May", "Jun"]}
        />
        <DataVisualizationCard
          title="Matrículas por Mes"
          data={[100, 150, 120, 180, 130, 170]}
          labels={["Ene", "Feb", "Mar", "Abr", "May", "Jun"]}
        />
      </div>

      <footer className="text-center mt-12 text-sm text-[#2E2E2E]">
        © CEBA 2023 - Todos los derechos reservados
      </footer>
    </div>
  );
};

export default AdministradorPage;

// Componente para la Tarjeta de Métrica
const MetricCard = ({ title, value, color }: { title: string; value: string; color: string }) => (
  <div className="bg-[#E6D8C3] rounded-lg shadow-lg p-6 text-center">
    <h2 className="text-2xl font-semibold text-[#4A6472]">{title}</h2>
    <p className="text-4xl font-bold" style={{ color }}>{value}</p>
  </div>
);

// Componente para Visualización de Datos (imitación de gráfico de barras)
const DataVisualizationCard = ({
  title,
  data,
  labels,
}: {
  title: string;
  data: number[];
  labels: string[];
}) => (
  <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-[#4A6472] mb-4">{title}</h3>
    <div className="space-y-2">
      {data.map((value, index) => (
        <div key={index} className="flex items-center">
          <span className="w-12 text-sm text-[#4A6472]">{labels[index]}</span>
          <div className="flex-1 h-4 bg-[#E6D8C3] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(value / Math.max(...data)) * 100}%`,
                backgroundColor: "#C89D5A",
              }}
            ></div>
          </div>
          <span className="w-8 ml-2 text-sm text-[#4A6472]">{value}</span>
        </div>
      ))}
    </div>
  </div>
);
