import React from 'react';
import { User } from '../../types/user';

interface UsersTableProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({ users, onSelectUser }) => {
  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'Administrador':
        return 'bg-primary text-on-primary';
      case 'Docente':
        return 'bg-tertiary-fixed text-tertiary-container';
      case 'Estudiante':
        return 'bg-secondary-fixed text-on-secondary-fixed-variant';
      default:
        return 'bg-surface-container-high text-on-surface';
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'Activo':
        return 'bg-emerald-100 text-emerald-800';
      case 'Pendiente':
        return 'bg-amber-100 text-amber-800';
      case 'Inactivo':
        return 'bg-surface-container-high text-on-surface-variant';
      default:
        return 'bg-surface-container-high text-on-surface';
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-on-surface">
          <thead className="bg-surface-container-low text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-space-md">ID</th>
              <th className="py-3.5 px-space-md">Usuario</th>
              <th className="py-3.5 px-space-md">Correo Institucional</th>
              <th className="py-3.5 px-space-md">Rol</th>
              <th className="py-3.5 px-space-md">Estado</th>
              <th className="py-3.5 px-space-md hidden xl:table-cell">Registro</th>
              <th className="py-3.5 px-space-md text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-surface-container-low">
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => onSelectUser(user)}
                className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer"
              >
                <td className="py-4 px-space-md font-mono text-xs text-on-surface-variant font-semibold">
                  {user.id}
                </td>
                <td className="py-4 px-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className={`w-10 h-10 rounded-full object-cover shadow-sm ${
                          user.status === 'Inactivo' ? 'grayscale opacity-80' : ''
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-surface-container-lowest ${
                          user.status === 'Activo'
                            ? 'bg-emerald-500'
                            : user.status === 'Pendiente'
                            ? 'bg-amber-500'
                            : 'bg-gray-400'
                        }`}
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-base text-on-surface font-semibold truncate group-hover:text-primary transition-colors">
                        {user.name}
                      </span>
                      <span className="text-xs text-on-surface-variant">{user.subtitle}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-space-md text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1 font-mono text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">mail</span>
                    {user.email}
                  </span>
                </td>
                <td className="py-4 px-space-md">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm ${getRoleBadgeStyle(user.role)}`}>
                    <span className="material-symbols-outlined text-[14px]">
                      {user.role === 'Administrador' ? 'shield_person' : user.role === 'Docente' ? 'school' : 'local_library'}
                    </span>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-space-md">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeStyle(user.status)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Activo' ? 'bg-emerald-600 animate-pulse' : user.status === 'Pendiente' ? 'bg-amber-500' : 'bg-gray-400'}`} />
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-space-md text-xs text-on-surface-variant hidden xl:table-cell">
                  {user.createdAt}
                </td>
                <td className="py-4 px-space-md text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => onSelectUser(user)}
                      className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                      title="Ver detalles"
                    >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                    <button
                      className="p-1.5 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container transition-colors"
                      title="Editar"
                    >
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button
                      className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                      title="Opciones"
                    >
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};