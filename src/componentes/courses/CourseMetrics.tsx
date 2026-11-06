import React from 'react';

export const CourseMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[24px]">menu_book</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-on-surface">48</span>
          <span className="text-xs text-on-surface-variant">Cursos Aperturados</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[24px]">group</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-on-surface">1,420</span>
          <span className="text-xs text-on-surface-variant">Estudiantes Matriculados</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[24px]">co_present</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-on-surface">36</span>
          <span className="text-xs text-on-surface-variant">Docentes en Cátedra</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
          <span className="material-symbols-outlined text-[24px]">pie_chart</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-on-surface">92.4%</span>
          <span className="text-xs text-on-surface-variant">Ocupación Promedio</span>
        </div>
      </div>
    </div>
  );
};