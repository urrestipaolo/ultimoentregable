import React from 'react';

interface UserToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (role: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  onReset: () => void;
}

export const UserToolbar: React.FC<UserToolbarProps> = ({
  searchTerm,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedStatus,
  onStatusChange,
  onReset,
}) => {
  const roles = [
    { key: 'all', label: 'Todos' },
    { key: 'Administrador', label: 'Admin' },
    { key: 'Docente', label: 'Docente' },
    { key: 'Estudiante', label: 'Estudiante' },
  ];

  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
      <div className="relative flex-1">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
          search
        </span>
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-space-md py-2.5 bg-surface-container-low rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary-container"
          placeholder="Buscar por nombre, correo o ID..."
          type="text"
        />
      </div>

      <div className="flex flex-wrap items-center gap-space-sm">
        {/* Roles Filter */}
        <div className="flex items-center bg-surface-container-low rounded-lg p-1">
          <span className="text-on-surface-variant text-xs px-2 hidden sm:inline">Rol:</span>
          {roles.map((r) => {
            const isActive = selectedRole === r.key;
            return (
              <button
                key={r.key}
                onClick={() => onRoleChange(r.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        {/* Status Filter */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="appearance-none bg-surface-container-low text-on-surface text-xs font-semibold py-2.5 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-container cursor-pointer"
          >
            <option value="all">Estado: Todos</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Pendiente">Pendiente</option>
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
            expand_more
          </span>
        </div>

        <button
          onClick={onReset}
          className="p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          title="Restablecer Filtros"
        >
          <span className="material-symbols-outlined text-[20px]">restart_alt</span>
        </button>
      </div>
    </div>
  );
};