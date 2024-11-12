// src/components/dashboard/CourseModal.tsx
"use client";

import { useState } from "react";

type CourseModalProps = {
  type: "Agregar" | "Editar";
  onClose: () => void;
};

const CourseModal = ({ type, onClose }: CourseModalProps) => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [teacher, setTeacher] = useState("");

  const handleSubmit = () => {
    // Lógica de envío (guardar o actualizar curso)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-[#4A6472] mb-4">
          {type} Curso
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre del Curso"
            className="w-full p-3 border border-[#4A6472] rounded-lg focus:outline-none focus:border-[#C89D5A]"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <textarea
            placeholder="Descripción del Curso"
            className="w-full p-3 border border-[#4A6472] rounded-lg focus:outline-none focus:border-[#C89D5A]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre del Profesor"
            className="w-full p-3 border border-[#4A6472] rounded-lg focus:outline-none focus:border-[#C89D5A]"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#E6D8C3] text-[#4A6472] rounded-lg hover:bg-[#C89D5A] hover:text-white transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#C89D5A] text-white rounded-lg hover:bg-[#4A6472] transition-all"
          >
            {type}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
