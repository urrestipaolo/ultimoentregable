import React from 'react';

export const UserMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wide">Total Activos</span>
          <span className="text-2xl text-on-surface font-bold mt-1">1,280</span>
          <span className="text-xs text-secondary flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">trending_up</span> +38 este ciclo
          </span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[26px]">groups</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wide">Estudiantes</span>
          <span className="text-2xl text-on-surface font-bold mt-1">1,094</span>
          <span className="text-xs text-on-surface-variant mt-1">85.4% de la matrícula</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[26px]">school</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wide">Cuerpo Docente</span>
          <span className="text-2xl text-on-surface font-bold mt-1">158</span>
          <span className="text-xs text-tertiary-container flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">assignment_turned_in</span> 98% validados
          </span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
          <span className="material-symbols-outlined text-[26px]">co_present</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wide">Pendientes</span>
          <span className="text-2xl text-on-surface font-bold mt-1">28</span>
          <span className="text-xs text-on-surface-variant mt-1">Validación pendiente</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined text-[26px]">pending_actions</span>
        </div>
      </div>
    </div>
  );
};