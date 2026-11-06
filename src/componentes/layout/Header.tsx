import React, { useEffect, useState } from 'react';
import { Usuario } from '../../types/user';

interface HeaderProps {
  userName?: string;
  userRole?: string;
  period?: string;
}

export const Header: React.FC<HeaderProps> = ({
  userName: customUserName,
  userRole: customUserRole,
  period = '2025-1',
}) => {
  const [user, setUser] = useState<Usuario | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error al parsear el usuario del localStorage:', error);
      }
    }
  }, []);

  const displayName =
    customUserName ||
    (user ? `${user.nombre} ${user.apellido}`.trim() || user.username : 'Usuario');

  const displayRole =
    customUserRole ||
    (user
      ? user.rol === 'ADMIN'
        ? 'Administrador'
        : user.rol === 'DOCENTE'
        ? 'Docente'
        : 'Estudiante'
      : 'Invitado');

  // Obtenemos las iniciales de forma segura
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 0) return 'U';
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  };

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-md flex-1 max-w-md">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
            search
          </span>
          <input
            className="w-full pl-10 pr-space-md py-space-xs bg-surface-container-low rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary-container"
            placeholder="Buscar estudiantes, cursos, aulas..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-space-lg">

        <div className="flex items-center gap-space-sm">
          {user?.fotoUrl ? (
            <img
              src={user.fotoUrl}
              alt={displayName}
              className="w-8 h-8 rounded-full object-cover border border-outline-variant"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
              {getInitials(displayName)}
            </div>
          )}

          <div className="hidden md:flex flex-col text-left">
            <span className="text-sm text-on-surface font-semibold leading-tight">{displayName}</span>
            <span className="text-xs text-on-surface-variant">{displayRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
};