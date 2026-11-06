import React from 'react';

interface CourseToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  selectedModality: string;
  onModalityChange: (mod: string) => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
}

export const CourseToolbar: React.FC<CourseToolbarProps> = ({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedModality,
  onModalityChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
      {/* Live Search */}
      <div className="relative flex-1 min-w-[280px]">
        <span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
          search
        </span>
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-space-md py-space-sm bg-surface rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
          placeholder="Buscar cursos por título o código (ej: INF, IA)..."
          type="text"
        />
      </div>

      {/* Filter Selects */}
      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="flex items-center gap-space-xs bg-surface px-space-sm py-space-xs rounded-lg">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">apartment</span>
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="bg-transparent text-xs font-semibold text-on-surface focus:outline-none pr-space-xs cursor-pointer"
          >
            <option value="all">Todos los Departamentos</option>
            <option value="Ingeniería">Ingeniería</option>
            <option value="Ciencias">Ciencias</option>
            <option value="Humanidades">Humanidades</option>
            <option value="Diseño">Diseño</option>
          </select>
        </div>

        <div className="flex items-center gap-space-xs bg-surface px-space-sm py-space-xs rounded-lg">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">desktop_windows</span>
          <select
            value={selectedModality}
            onChange={(e) => onModalityChange(e.target.value)}
            className="bg-transparent text-xs font-semibold text-on-surface focus:outline-none pr-space-xs cursor-pointer"
          >
            <option value="all">Todas las Modalidades</option>
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </div>

        {/* View Selector (Grid / Table) */}
        <div className="flex items-center bg-surface p-1 rounded-lg">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-space-xs rounded-md transition-all flex items-center justify-center ${
              viewMode === 'grid'
                ? 'bg-surface-container-lowest text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            title="Vista en cuadrícula"
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
          <button
            onClick={() => onViewModeChange('table')}
            className={`p-space-xs rounded-md transition-all flex items-center justify-center ${
              viewMode === 'table'
                ? 'bg-surface-container-lowest text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            title="Vista en lista"
          >
            <span className="material-symbols-outlined text-[20px]">view_list</span>
          </button>
        </div>
      </div>
    </div>
  );
};